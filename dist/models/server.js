"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imprta todo lo que ese paquete contiene
const express_1 = __importDefault(require("express"));
// Creamos el alias directamente
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
// Importando el cors
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        // Creando paths de las rutas
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Tiene que ejecutarse en ese orden
        // 1.- This middlerares
        this.middlewares();
        //2.- Definir mis rutas
        this.routes();
    }
    // Para parsear el BODY
    // Son metodos que se ejecutan antes de que se pase a una ruta
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        //Lectura del BODY para que funcione potsman
        this.app.use(express_1.default.json());
        // Configurando la carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_routes_1.default);
    }
    /**
     * Metodo que escucha el servidor
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!!: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map