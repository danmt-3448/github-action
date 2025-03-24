FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile \
  && yarn cache clean

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


# Nhận giá trị từ build args
ARG VITE_API_URL
ARG BUILD_VERSION
ENV VITE_API_URL=${VITE_API_URL}
ENV BUILD_VERSION=${BUILD_VERSION}

# Tạo file .env trong container từ ENV
RUN echo "VITE_API_URL=${VITE_API_URL}" > .env && \
  echo "BUILD_VERSION=${BUILD_VERSION}" >> .env

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "dev" ]
