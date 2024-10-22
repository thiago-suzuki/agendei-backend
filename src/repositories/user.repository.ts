import { database } from '../config/database';
import camelcaseKeys from 'camelcase-keys';

async function Inserir(name: any, email: any, password: any) {

    let sql = `insert into users(name, email, password) values($1, $2, $3)
    returning *`;

    const user = await database.query(sql, [name, email, password]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return user[0];
}

async function ListarByEmail(email: any) {

    let sql = `select * from users where email = $1`;

    const user = await database.query(sql, [email]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    if (user.length == 0)
        return [];
    else
        return user[0];
}

async function Profile(idUser: any) {

    let sql = `select id_user, name, email from users where id_user = $1`;

    const user = await database.query(sql, [idUser]).then((result) => {
        return camelcaseKeys(result.rows);
    });

    return user[0];
}

export default { Inserir, ListarByEmail, Profile }