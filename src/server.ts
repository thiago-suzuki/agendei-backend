import express from 'express';
import cors from "cors";
import { app } from './api/routes';

const exp = express();

exp.use(express.json());
exp.use(cors());
exp.use(app)

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

exp.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
})