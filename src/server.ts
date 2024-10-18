import express from 'express';
import cors from "cors";
import { app } from './api/routes';
import path from 'path';

const exp = express();

//app.use('/database', express.static(path.join(__dirname, './src/database')));
exp.use(express.json());
exp.use(cors());
exp.use(app)

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

exp.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
})