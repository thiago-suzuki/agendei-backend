import { database } from '../config/database';
import camelcaseKeys from 'camelcase-keys';

async function Listar() {

    let sql = `
        SELECT * 
            FROM doctors
        ORDER BY 
        CASE
            WHEN name ILIKE 'Dr. %' THEN SUBSTRING(name FROM 5)  -- Ignora "Dr. " e ordena a partir do 5º caractere
            WHEN name ILIKE 'Dra. %' THEN SUBSTRING(name FROM 6) -- Ignora "Dra. " e ordena a partir do 6º caractere
            ELSE name
        END;
    `

    const doctors = await database.query(sql, []).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return doctors;
}


async function Inserir(name: any, specialty: any, icon: any) {

    let sql = `insert into doctors(name, specialty, icon) values($1, $2, $3)
    returning *`;

    const doctor = await database.query(sql, [name, specialty, icon]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return doctor[0];
}

async function Editar(id_doctor: any, name: any, specialty: any, icon: any) {

    let sql = `update doctors set name=$1, specialty=$2, icon=$3
where id_doctor = $4`;

    await database.query(sql, [name, specialty, icon, id_doctor]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return { id_doctor };
}

async function Excluir(id_doctor: any) {

    let sql = `delete from doctors where id_doctor = $1`;

    await database.query(sql, [id_doctor]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return { id_doctor };
}

async function ListarServicos(id_doctor: any) {

    let sql = `select d.id_service, s.description, d.price
    from doctors_services d
    join services s on (s.id_service = d.id_service)
    where d.id_doctor = $1
    order by s.description`;

    const serv = await database.query(sql, [id_doctor]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return serv;
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos }