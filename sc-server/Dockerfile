# One Stage: Install process
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and yarn.lock separately for better caching
COPY package.json yarn.lock ./

# Copy Prisma schema and generate client
COPY prisma ./prisma

# Install dependencies
RUN yarn install --frozen-lockfile

COPY . .

# Build the application
RUN yarn build

EXPOSE 3000

CMD ["node", "dist/src/main"]