import doctorRepository from "../repositories/doctor.repository";

async function Listar() {

    const doctors = await doctorRepository.Listar();

    return doctors;
}


async function Inserir(name: any, specialty: any, icon: any) {

    const doctor = await doctorRepository.Inserir(name, specialty, icon);

    return doctor;
}

async function Editar(idDoctor: any, name: any, specialty: any, icon: any) {

    const doctor = await doctorRepository.Editar(idDoctor, name, specialty, icon);

    return doctor;
}

async function Excluir(idDoctor: any) {

    const doctor = await doctorRepository.Excluir(idDoctor);

    return doctor;
}

async function ListarServicos(idDoctor: any) {

    const serv = await doctorRepository.ListarServicos(idDoctor);

    return serv;
}


export default { Listar, Inserir, Editar, Excluir, ListarServicos }