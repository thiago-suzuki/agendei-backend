import repoAppointment from "../repositories/appointment.repository";

async function Listar(id_user: any) {

    const appointments = await repoAppointment.Listar(id_user);

    return appointments;
}

async function Inserir(id_user: any, id_doctor: any, id_service: any,
    booking_date: any, booking_hour: any) {

    const appointment = await repoAppointment.Inserir(id_user,
        id_doctor, id_service, booking_date, booking_hour);

    return appointment;
}

async function Excluir(id_user: any, id_appointment: any) {

    const appointment = await repoAppointment.Excluir(id_user, id_appointment);

    return appointment;
}

export default { Listar, Inserir, Excluir }