"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
// Index usuarios
const getUsuarios = (req, res) => {
    res.json({
        message: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
// Show usuarios
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'getUsuarios',
        id: id
    });
};
exports.getUsuario = getUsuario;
// store Usuarios
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        message: 'PostUsuarios',
        body: body
    });
};
exports.postUsuario = postUsuario;
// Update usuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: 'getUsuarios',
        body,
        id
    });
};
exports.putUsuario = putUsuario;
// Delete usuarios
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'getUsuarios',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map