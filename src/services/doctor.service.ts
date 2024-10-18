import doctorRepository from "../repositories/doctor.repository";

async function Listar() {

    const doctors = await doctorRepository.Listar();

    return doctors;
}


async function Inserir(name: any, specialty: any, icon: any) {

    const doctor = await doctorRepository.Inserir(name, specialty, icon);

    return doctor;
}

async function Editar(id_doctor: any, name: any, specialty: any, icon: any) {

    const doctor = await doctorRepository.Editar(id_doctor, name, specialty, icon);

    return doctor;
}

async function Excluir(id_doctor: any) {

    const doctor = await doctorRepository.Excluir(id_doctor);

    return doctor;
}

async function ListarServicos(id_doctor: any) {

    const serv = await doctorRepository.ListarServicos(id_doctor);

    return serv;
}


export default { Listar, Inserir, Editar, Excluir, ListarServicos }