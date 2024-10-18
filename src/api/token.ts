import jwt from "jsonwebtoken";

const secretToken = "jornadaJS123";

function CreateToken(id_user: any) {
    const token = jwt.sign({ id_user }, secretToken, {
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

        req.id_user = tokenDecoded.id_user;

        next();
    });
}

export default { CreateToken, ValidateToken };