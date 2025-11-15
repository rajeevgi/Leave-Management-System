# Build the Angular app
FROM  node:22-alpine AS build

# Set Working directory inside container
WORKDIR /app

# Copy Packages files and install dependencies
COPY package*.json ./
RUN  npm ci 

# Copy rest of the app
COPY  . .

# Run the production environment
RUN  npm run build -- --configuration production

# Serve app using Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/lms-app/browser /usr/share/nginx/html

# EXPOSE
EXPOSE 80

# Start app 
CMD [ "nginx", "-g", "daemon off;" ]