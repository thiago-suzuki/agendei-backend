import { database } from '../config/database';
import camelcaseKeys from 'camelcase-keys';

async function Listar(idUser: any) {

    let sql = `
        select a.id_appointment, s.description as service, 
        d.name as doctor, d.specialty,
        a.booking_date, a.booking_hour, u.name as user, ds.price
        from appointments a
            join services s on (s.id_service = a.id_service)
            join doctors d on (d.id_doctor = a.id_doctor)
            join users u on (u.id_user = a.id_user)
            join doctors_services ds on (ds.id_doctor = a.id_doctor and 
                                    ds.id_service = a.id_service)
        where a.id_user = $1
        order by a.booking_date, a.booking_hour 
    `;


    const appointments = await database.query(sql, [idUser]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return appointments;
}

async function Inserir(idUser: any,
    idDoctor: any, idService: any, bookingDate: any, bookingHour: any) {

    let sql = `insert into appointments(id_user,
        id_doctor, id_service, booking_date, booking_hour) 
        values($1, $2, $3, $4, $5) returning id_appointment`;

    const appointment = await database.query(sql, [idUser,
        idDoctor, idService, bookingDate, bookingHour]).then((result) => {
            return camelcaseKeys(result.rows);
        });

    return appointment[0];
}

async function Excluir(idUser: any, idAppointment: any) {

    let sql = `delete from appointments 
    where id_appointment=$1 and id_user=$2`;

    await database.query(sql, [idAppointment, idUser]);

    return { idAppointment };
}

export default { Listar, Inserir, Excluir }