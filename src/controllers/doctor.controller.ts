import doctorService from "../services/doctor.service"
import { Request, Response } from "express";

async function Listar(req: Request, res: Response) {
    const doctors = await doctorService.Listar();

    res.status(200).json(doctors)
}

async function Inserir(req: Request, res: Response) {

    /*
    const name = req.body.name;
    const specialty = req.body.specialty;
    const icon = req.body.icon;
    */
    const { name, specialty, icon } = req.body;

    const doctor = await doctorService.Inserir(name, specialty, icon);

    res.status(201).json(doctor);
}

async function Editar(req: Request, res: Response) {

    const idDoctor = req.params.idDoctor;
    const { name, specialty, icon } = req.body;

    const doctor = await doctorService.Editar(idDoctor, name, specialty, icon);

    res.status(200).json(doctor);
}

async function Excluir(req: Request, res: Response) {

    const idDoctor = req.params.idDoctor;

    const doctor = await doctorService.Excluir(idDoctor);

    res.status(200).json(doctor);
}

async function ListarServicos(req: Request, res: Response) {

    const idDoctor = req.params.idDoctor;
    const serv = await doctorService.ListarServicos(idDoctor);

    res.status(200).json(serv);
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos }