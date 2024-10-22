import repoAppointment from "../repositories/appointment.repository";

async function Listar(idUser: any) {

    const appointments = await repoAppointment.Listar(idUser);

    return appointments;
}

async function Inserir(idUser: any, idDoctor: any, idService: any,
    bookingDate: any, bookingHour: any) {

    const appointment = await repoAppointment.Inserir(idUser,
        idDoctor, idService, bookingDate, bookingHour);

    return appointment;
}

async function Excluir(idUser: any, idAppointment: any) {

    const appointment = await repoAppointment.Excluir(idUser, idAppointment);

    return appointment;
}

export default { Listar, Inserir, Excluir }