import serviceAppointment from "../services/appointment.service";
import { Request, Response } from "express";


async function ListarByUser(req: any, res: Response) {

    const idUser = req.idUser;
    const appointments = await serviceAppointment.Listar(idUser);

    res.status(200).json(appointments);
}

async function Inserir(req: any, res: Response) {

    const idUser = req.idUser;
    const { idDoctor, idService,
        bookingDate, bookingHour } = req.body;

    const appointment = await serviceAppointment.Inserir(idUser,
        idDoctor, idService, bookingDate, bookingHour);

    res.status(201).json(appointment);
}

async function Excluir(req: any, res: Response) {

    const idUser = req.idUser;
    const idAppointment = req.params.idAppointment;

    const appointment = await serviceAppointment.Excluir(idUser, idAppointment);

    res.status(200).json(appointment);
}

export default { ListarByUser, Inserir, Excluir };