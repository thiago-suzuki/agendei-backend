import jwt from "jsonwebtoken";

const secretToken = "jornadaJS123";

function CreateToken(idUser: any) {
    const token = jwt.sign({ idUser }, secretToken, {
        expiresIn: 9999999
    });

    return token;
}

function ValidateToken(req: any, res: any, next: any) {
    const authToken = req.headers.authorization; // "Bearer 000000000"

    if (!authToken)
        return res.status(401).json({ error: "Token não informado" });

    const [bearer, token] = authToken.split(" ");  // "Bearer"   "000000000"

    jwt.verify(token, secretToken, (err: any, tokenDecoded: any) => {

        if (err)
            return res.status(401).json({ error: "Token inválido" });

        req.idUser = tokenDecoded.idUser;

        next();
    });
}

export default { CreateToken, ValidateToken };