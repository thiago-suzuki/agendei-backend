import serviceAppointment from "../services/appointment.service";
import { Request, Response } from "express";


async function ListarByUser(req: any, res: Response) {

    const id_user = req.id_user;
    const appointments = await serviceAppointment.Listar(id_user);

    res.status(200).json(appointments);
}

async function Inserir(req: any, res: Response) {

    const id_user = req.id_user;
    const { id_doctor, id_service,
        booking_date, booking_hour } = req.body;

    const appointment = await serviceAppointment.Inserir(id_user,
        id_doctor, id_service, booking_date, booking_hour);

    res.status(201).json(appointment);
}

async function Excluir(req: any, res: Response) {

    const id_user = req.id_user;
    const id_appointment = req.params.id_appointment;

    const appointment = await serviceAppointment.Excluir(id_user, id_appointment);

    res.status(200).json(appointment);
}

export default { ListarByUser, Inserir, Excluir };