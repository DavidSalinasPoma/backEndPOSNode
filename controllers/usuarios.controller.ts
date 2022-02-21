import { Request, Response } from "express";

// Index usuarios
export const getUsuarios = (req: Request, res: Response) => {

    res.json({
        message: 'getUsuarios'
    })

}

// Show usuarios
export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        message: 'getUsuarios',
        id: id
    })

}

// store Usuarios
export const postUsuario = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        message: 'PostUsuarios',
        body: body
    })

}

// Update usuario
export const putUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        message: 'getUsuarios',
        body,
        id
    })

}

// Delete usuarios
export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        message: 'getUsuarios',
        id
    })

}


