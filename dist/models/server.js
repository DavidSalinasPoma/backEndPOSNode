"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Para base de datos relacionales
const conexion_1 = __importDefault(require("../db/conexion"));
class Server {
    constructor() {
        // Creando paths de las rutas
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Tiene que ejecutarse en ese orden
        // 1.- Base de datos
        this.dbConection();
        // 2.- This middlerares
        this.middlewares();
        // 3.- Definir mis rutas
        this.routes();
    }
    dbConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conexion_1.default.authenticate();
                console.log('Data base esta online');
            }
            catch (error) {
                throw new Error(String(error));
            }
        });
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