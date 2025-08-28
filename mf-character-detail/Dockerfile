FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3002
CMD ["npx","webpack","serve","--port","3002","--host","0.0.0.0"]
