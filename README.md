# Aplicación Todo Angular v2.0

Esta versión introduce una lista de tareas obtenida desde una API remota. El proyecto utiliza Angular 17 con TailwindCSS.

## Características
- Obtiene tareas desde `https://todoapitest.juansegaliz.com/todos` usando `TodoService`.
- Muestra las tareas en una tabla responsive con TailwindCSS con las columnas: **ID**, **Título** y **Completado**.
- Configura el enrutamiento para mostrar la lista en `/todos`.

## Para comenzar
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar la aplicación:
   ```bash
   npm start
   ```
3. Navegar a `http://localhost:4200/todos` para ver la lista de tareas.

## Estructura del proyecto
- `src/app/services/todo.service.ts` — Proporciona el método `getTodos()` para llamar a la API y mapear los resultados.
- `src/app/components/todo-list` — Contiene el componente que renderiza la tabla de tareas.
- `src/app/app.routes.ts` — Define las rutas de la aplicación.
