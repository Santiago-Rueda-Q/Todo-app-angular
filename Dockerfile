# Etapa de construcción con Node.js
FROM node:18 AS build  # Cambié la imagen base a node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Construye el proyecto Angular para producción
RUN npm run build --prod

# Etapa de producción con Nginx
FROM nginx:alpine

# Copia los archivos construidos en la etapa anterior al directorio de Nginx
COPY --from=build /app/dist/todo-app-angular /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
