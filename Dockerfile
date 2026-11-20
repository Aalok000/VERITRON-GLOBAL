# Use the official Node.js LTS image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Build the Next.js app (static export for production)
RUN npm run build

# Production image – only runtime dependencies
FROM node:20-alpine AS runner
WORKDIR /app

# Copy only the built files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV production

# Start the Next.js server
CMD ["npm","run","start"]
