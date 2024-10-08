# Use Node.js 20 as the base image
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Build the Nest.js application
RUN npm run build

# Start a new stage for a smaller final image
FROM --platform=$TARGETPLATFORM node:20-alpine

WORKDIR /app

# Copy built assets and necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src ./src
COPY --from=builder /app/.env ./.env

# Expose the port Nest.js runs on
EXPOSE 8080

# Run Prisma migrations and start the Nest.js application
CMD ["/bin/sh", "-c", "npx prisma migrate deploy && npm run start:prod"]