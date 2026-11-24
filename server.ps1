$port = 3000
$root = $PSScriptRoot
if (-not $root) { $root = "C:\Users\Aalok\.gemini\scratch\veritron-global-website" }

$ip = [System.Net.IPAddress]::Any
$listener = New-Object System.Net.Sockets.TcpListener($ip, $port)

try {
    $listener.Start()
    Write-Host "=========================================================="
    Write-Host "VERITRON GLOBAL WEB SERVER ACTIVE"
    Write-Host "Listening on all network interfaces on port $port"
    Write-Host "Local PC Access:     http://localhost:$port/"
    Write-Host "Mobile / LAN Access: http://10.154.187.177:$port/"
    Write-Host "=========================================================="
} catch {
    Write-Error "Failed to start listener on port ${port}: $($_.Exception.Message)"
    exit 1
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        
        $requestLine = $reader.ReadLine()
        if (-not [string]::IsNullOrWhiteSpace($requestLine)) {
            $parts = $requestLine.Split(" ")
            if ($parts.Length -ge 2) {
                $method = $parts[0]
                $urlPath = $parts[1]
                
                # strip query parameters
                if ($urlPath.Contains("?")) {
                    $urlPath = $urlPath.Substring(0, $urlPath.IndexOf("?"))
                }
                
                # decode URL
                $urlPath = [System.Uri]::UnescapeDataString($urlPath)

                # map to local file
                if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
                    $filePath = Join-Path $root "index.html"
                } else {
                    $relative = $urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
                    $filePath = Join-Path $root $relative
                }

                # fallback to index.html if file doesn't exist
                if (-not (Test-Path $filePath -PathType Leaf)) {
                    $filePath = Join-Path $root "index.html"
                }

                if (Test-Path $filePath -PathType Leaf) {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    
                    $contentType = switch ($ext) {
                        ".html" { "text/html; charset=utf-8" }
                        ".css"  { "text/css; charset=utf-8" }
                        ".js"   { "application/javascript; charset=utf-8" }
                        ".json" { "application/json; charset=utf-8" }
                        ".png"  { "image/png" }
                        ".jpg"  { "image/jpeg" }
                        ".jpeg" { "image/jpeg" }
                        ".webp" { "image/webp" }
                        ".svg"  { "image/svg+xml" }
                        ".ico"  { "image/x-icon" }
                        default { "application/octet-stream" }
                    }

                    $header = "HTTP/1.1 200 OK`r`n" +
                              "Content-Type: $contentType`r`n" +
                              "Content-Length: $($bytes.Length)`r`n" +
                              "Access-Control-Allow-Origin: *`r`n" +
                              "Connection: close`r`n`r`n"

                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                } else {
                    $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                    $header = "HTTP/1.1 404 Not Found`r`n" +
                              "Content-Type: text/plain; charset=utf-8`r`n" +
                              "Content-Length: $($body.Length)`r`n" +
                              "Connection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($body, 0, $body.Length)
                }
            }
        }
        $stream.Flush()
        $client.Close()
    } catch {
        # ignore transient connection errors
    }
}
