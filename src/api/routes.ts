import { Router } from 'express';
import doctorController from '../controllers/doctor.controller';


const bodyParser = require('body-parser');

const app = Router();
app.use(bodyParser.json());

app.get("/doctors", doctorController.Listar);

app.get('/ping', (req, res) =>
    res.status(200).json({
        message: 'Running! ⚡️',
    }),
);

export { app };
