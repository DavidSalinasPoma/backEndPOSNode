// Imprta todo lo que ese paquete contiene
import express, { Application } from 'express';

// Creamos el alias directamente
import userRoutes from '../routes/usuario.routes';

// Importando el cors
import cors from 'cors';

// Para base de datos relacionales
import db from '../db/conexion';



class Server {

    private app: Application;
    private port: string;

    // Creando paths de las rutas
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Tiene que ejecutarse en ese orden
        // 1.- Base de datos
        this.dbConection();

        // 2.- This middlerares
        this.middlewares();

        // 3.- Definir mis rutas
        this.routes();


    }

    async dbConection() {
        try {

            await db.authenticate();
            console.log('Data base esta online');


        } catch (error) {

            throw new Error(String(error));

        }
    }

    // Para parsear el BODY
    // Son metodos que se ejecutan antes de que se pase a una ruta
    middlewares() {
        // CORS
        this.app.use(cors());

        //Lectura del BODY para que funcione potsman
        this.app.use(express.json());

        // Configurando la carpeta publica
        this.app.use(express.static('public'));

    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    /**
     * Metodo que escucha el servidor
     */
    public listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!!: ' + this.port);
        })
    }
}

export default Server;