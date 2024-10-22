import serviceUser from "../services/user.service";
import { Request, Response } from "express";

async function Inserir(req: Request, res: Response) {

    const { name, email, password } = req.body;

    const user = await serviceUser.Inserir(name, email, password);

    res.status(201).json(user);
}

async function Login(req: Request, res: Response) {

    const { email, password } = req.body;

    const user = await serviceUser.Login(email, password);

    if (user.length == 0)
        res.status(401).json({ error: "E-mail ou senha inválida" });
    else
        res.status(200).json(user);
}

async function Profile(req: any, res: Response) {

    const idUser = req.idUser;
    const user = await serviceUser.Profile(idUser);

    res.status(200).json(user);
}

export default { Inserir, Login, Profile }