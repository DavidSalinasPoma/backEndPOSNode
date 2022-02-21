"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importando el servidor
const server_1 = __importDefault(require("./models/server"));
const dotenv_1 = __importDefault(require("dotenv"));
// Utilizamos todas las varibles de entorno como globales
dotenv_1.default.config();
// Creamos el objeto server
const server = new server_1.default();
// Accedemos a su metodo de la clase
server.listen();
//# sourceMappingURL=app.js.map