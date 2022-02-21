// importando el servidor
import Server from './models/server';
import dotenv from 'dotenv';

// Utilizamos todas las varibles de entorno como globales
dotenv.config();

// Creamos el objeto server
const server = new Server();
// Accedemos a su metodo de la clase
server.listen();