import { Request, Response } from "express";
import Usuario from "../models/usuario.model";

// Index usuarios
export const getUsuarios = async (req: Request, res: Response) => {

    // Base de datos
    const usuarios = await Usuario.findAll();

    res.json({
        message: 'getUsuarios',
        usuarios: usuarios
    })

}

// Show usuarios
export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;


    // Validamos si el usuario existe
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.status(200).json({
            message: 'Usuario encontrado',
            usuario: usuario
        })
    } else {
        res.status(200).json({
            message: `No existe el usuario con el id ${id}`,
        })
    }


}

// store Usuarios
export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;


    try {

        // Validamos si el email existe
        const existeEmail = await Usuario.findOne({
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
        const usuario = await Usuario.create(body);

        res.status(200).json({
            message: 'Usuario agregado correctamente',
            usuario: usuario
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }



}

// Update usuario
export const putUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {

            if (!usuario) {
                return res.status(400).json({
                    message: 'No existe un usuario con el id: ' + id
                });
            }
        }

        await Usuario.update(body, {
            where: {
                id: id
            }
        });

        res.status(200).json({
            message: 'El usuario se actualizo correctamente',
            usuario: await Usuario.findByPk(id)
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}

// Delete usuarios
export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {

        if (!usuario) {
            return res.status(400).json({
                message: 'No existe un usuario con el id: ' + id
            });
        }
    }

    // Para eliminar logicamente
    await usuario.update({ estado: false });

    // Para eliminar fisicamente
    // await usuario.destroy();

    res.json({
        message: 'Usuario Borrado',
        usuario
    })

}


