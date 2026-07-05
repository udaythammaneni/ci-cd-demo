# Stage 1 - Install dependencies
FROM node:18-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# Stage 2 - Production image
FROM node:18-alpine

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]