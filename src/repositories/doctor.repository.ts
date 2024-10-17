import { query } from "../database/sqlite";

async function Listar() {

    let sql = "select * from doctors order by name";

    const doctors = await query(sql, []);

    return doctors;
}


export default { Listar }