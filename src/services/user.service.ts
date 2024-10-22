import bcrypt from "bcrypt";
import repoUser from "../repositories/user.repository";
import jwt from "../api/token";

async function Inserir(name: any, email: any, password: string | Buffer) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUser.Inserir(name, email, hashPassword);

    user.token = jwt.CreateToken(user.idUser);

    return user;
}

async function Login(email: any, password: string | Buffer) {

    const user = await repoUser.ListarByEmail(email);

    if (user.length == 0)
        return [];
    else {
        if (await bcrypt.compare(password, user.password)) {
            delete user.password;

            user.token = jwt.CreateToken(user.idUser);

            return user;
        } else
            return [];
    }

    return user;
}

async function Profile(idUser: any) {

    const user = await repoUser.Profile(idUser);

    return user;
}

export default { Inserir, Login, Profile }