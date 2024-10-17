import doctorService from "../services/doctor.service"
import { Request, Response } from "express";

async function Listar(req: Request, res: Response) {
    const doctors = await doctorService.Listar();

    res.status(200).json(doctors)
}

export default { Listar }