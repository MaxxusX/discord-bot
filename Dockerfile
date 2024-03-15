FROM node:21-alpine AS base
RUN corepack enable pnpm
COPY . /app
WORKDIR /app
RUN pnpm install --production
CMD ["pnpm", "start"]