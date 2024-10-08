# Use Node.js 20 as the base image (compatible with Next.js 14)
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including dev dependencies for the build process
RUN npm i

# Copy the rest of the application code
COPY . .

RUN npm run update:orval

# Build the Next.js application
RUN npm run build

# Start a new stage for a smaller final image
FROM node:20-alpine

WORKDIR /app

# Copy built assets and necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/public ./public
COPY  --from=builder /app/orval ./orval
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/.env.production ./.env.production

# Expose the port Next.js runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production

# Run the Next.js application
CMD ["npm", "start"]