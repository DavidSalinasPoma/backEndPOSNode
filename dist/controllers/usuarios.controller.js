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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
// Index usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Base de datos
    const usuarios = yield usuario_model_1.default.findAll();
    res.json({
        message: 'getUsuarios',
        usuarios: usuarios
    });
});
exports.getUsuarios = getUsuarios;
// Show usuarios
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Validamos si el usuario existe
    const usuario = yield usuario_model_1.default.findByPk(id);
    if (usuario) {
        res.status(200).json({
            message: 'Usuario encontrado',
            usuario: usuario
        });
    }
    else {
        res.status(200).json({
            message: `No existe el usuario con el id ${id}`,
        });
    }
});
exports.getUsuario = getUsuario;
// store Usuarios
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // Validamos si el email existe
        const existeEmail = yield usuario_model_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(500).json({
                message: 'Ya existe un usuario con el email: ' + body.email
            });
        }
        // Para crear un nuevo registro
        const usuario = yield usuario_model_1.default.create(body);
        res.status(200).json({
            message: 'Usuario agregado correctamente',
            usuario: usuario
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
// Update usuario
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            if (!usuario) {
                return res.status(400).json({
                    message: 'No existe un usuario con el id: ' + id
                });
            }
        }
        yield usuario_model_1.default.update(body, {
            where: {
                id: id
            }
        });
        res.status(200).json({
            message: 'El usuario se actualizo correctamente',
            usuario: yield usuario_model_1.default.findByPk(id)
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }
});
exports.putUsuario = putUsuario;
// Delete usuarios
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_model_1.default.findByPk(id);
    if (!usuario) {
        if (!usuario) {
            return res.status(400).json({
                message: 'No existe un usuario con el id: ' + id
            });
        }
    }
    // Para eliminar logicamente
    yield usuario.update({ estado: false });
    // Para eliminar fisicamente
    // await usuario.destroy();
    res.json({
        message: 'Usuario Borrado',
        usuario
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map