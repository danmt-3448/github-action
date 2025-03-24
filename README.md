# React Template Docker Setup

This guide explains how to build and run the React application using Docker.

## Prerequisites

- Docker installed
- Docker Compose installed
- Node.js >= 18 (for local development)

## Environment Variables

Required environment variables:

```env
BUILD_VERSION=1.0.0
VITE_API_URL=http://staging.localhost:3000/api
```

## Build and Run with Dockerfile

```bash
# Build the image with environment variables
docker build \
  --build-arg VITE_API_URL=http://staging.localhost:3000/api \
  --build-arg BUILD_VERSION=1.0.0 \
  -t template .

# Run the container in detached mode
docker run -dp 3000:3000 -t template
```

## Build and Run with Docker Compose

```bash
# Build with environment variables (no cache)
BUILD_VERSION=1.0.0 VITE_API_URL=http://staging.localhost:3000/api docker-compose build --no-cache

# Start containers in detached mode with force recreate
docker-compose up -d --force-recreate

# Check environment variables in container
docker exec -it template sh -c "cat /app/.env"
```

## Useful Commands

```bash
# View container logs
docker logs template

# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# Rebuild and restart
docker-compose up -d --build --force-recreate
```

## Accessing the Application

The application will be available at:

- Development: http://localhost:3000
- Staging: http://staging.localhost:3000
