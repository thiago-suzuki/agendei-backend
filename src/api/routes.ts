import { Router, Request, Response } from 'express';
import doctorController from '../controllers/doctor.controller';
import controllerUser from "../controllers/user.controller";
import controllerAppointment from "../controllers/appointment.controller";
import jwt from "./token";


const bodyParser = require('body-parser');

const app = Router();
app.use(bodyParser.json());

// Doctors...
app.get("/doctors", jwt.ValidateToken, doctorController.Listar);
app.post("/doctors", jwt.ValidateToken, doctorController.Inserir);
app.put("/doctors/:idDoctor", jwt.ValidateToken, doctorController.Editar);
app.delete("/doctors/:idDoctor", jwt.ValidateToken, doctorController.Excluir);
app.get("/doctors/:idDoctor/services", jwt.ValidateToken, doctorController.ListarServicos);

// Users...
app.post("/users/register", controllerUser.Inserir);
app.post("/users/login", controllerUser.Login);
app.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);

// Reservas (appointments)...
app.get("/appointments", jwt.ValidateToken, controllerAppointment.ListarByUser);
app.post("/appointments", jwt.ValidateToken, controllerAppointment.Inserir);
app.delete("/appointments/:idAppointment", jwt.ValidateToken, controllerAppointment.Excluir);



app.get('/ping', (req, res) =>
    res.status(200).json({
        message: 'Running! ⚡️',
    }),
);

export { app };
