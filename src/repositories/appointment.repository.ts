import { database } from '../config/database';
import camelcaseKeys from 'camelcase-keys';

async function Listar(id_user: any) {

    let sql = `select a.id_appointment, s.description as service, 
    d.name as doctor, d.specialty,
   a.booking_date, a.booking_hour, u.name as user, ds.price
from appointments a
join services s on (s.id_service = a.id_service)
join doctors d on (d.id_doctor = a.id_doctor)
join users u on (u.id_user = a.id_user)
join doctors_services ds on (ds.id_doctor = a.id_doctor and 
                        ds.id_service = a.id_service)
where a.id_user = $1
order by a.booking_date, a.booking_hour `;


    const appointments = await database.query(sql, [id_user]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return appointments;
}

async function Inserir(id_user: any,
    id_doctor: any, id_service: any, booking_date: any, booking_hour: any) {

    let sql = `insert into appointments(id_user,
        id_doctor, id_service, booking_date, booking_hour) 
        values($1, $2, $3, $4, $5) returning id_appointment`;

    const appointment = await database.query(sql, [id_user,
        id_doctor, id_service, booking_date, booking_hour]).then((result) => {
            return camelcaseKeys(result.rows);
        });

    return appointment[0];
}

export default { Listar, Inserir }