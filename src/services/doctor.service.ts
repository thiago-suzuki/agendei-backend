import doctorRepository from "../repositories/doctor.repository";

async function Listar() {

    const doctors = await doctorRepository.Listar();

    return doctors;
}


export default { Listar }