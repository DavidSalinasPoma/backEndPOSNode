# Proyecto POS con nodeJS

# Instalar typescript de form global

1.- npm i -g typescript

# Crear proyecto NodeJS

2.- npm init -y

# Crear proyecto TS

3.- tsc --init

# TSlint para verificar errores

4.- npm i tslint --save-dev

# Instalar TS de manera local

5.- npm i typescript --save-dev

# Inicializar en alchrivo TSlint.json

6.- ./node_modules/.bin/tslint --init

# Crearcion del restServer

7.- creamos una carpeta models y dentro un server.ts

# Intalacion de paquetes necesarios

8.- npm i express cors dotenv

# Instalar dependencia types de desarrollo

9.- npm i --save-dev @types/express y npm i --save-dev @types/cors

10.- Configurar el server.ts y el app.ts

# Nodemos y ts --watch para correr el servidor

11.- npm start "start": "nodemon dist/app.js",
12.- npm run ts "ts": "tsc --watch"

# Configurando Modelos, controladores y rutas de la aplicación

13.- Craer carpeta models, controller y usuarios

# Midlewares necesarios para la aplicación para trabajar con postman

14.- // CORS
this.app.use(cors());

        //Lectura del BODY para que funcione potsman
        this.app.use(express.json());

# Crear la carpeta publica

15.- Crear en el directorio raiz public

# Instalación, conexion y configuración de MYSQL

16.- Crear la base de datos en laragon
17.- npm install --save sequelize
18.- npm i mysql2
