import { getAllVolunteers, createVolunteers, deleteVolunteers, updateVolunteers } from "../services/volunteer.service.js";

export function getVolunteers(req, res){
    const data = getAllVolunteers();
    return res.json(data);
}

export function createVolunteer(req, res){
    try{
        const newVolunteer = req.body;
        const createdVolunteer = createVolunteers(newVolunteer);

        return res.status(201).json(createdVolunteer);

    } catch {
        return res.status(500).json({error: "Erro ao criar voluntário"});
    }
}

export function deleteVolunteer(req, res){
    const id = parseInt(req.params.id);
    const deleted = deleteVolunteers(id);
    if(deleted){
        return res.status(200).json({message: "Voluntário deletado com sucesso!"});
    }
    return res.status(404).json({error: "Voluntário não encontrado."});
}

export function updateVolunteer(req, res){
    const id = parseInt(req.params.id);
    const data = req.body;
    const updatedVolunteer = updateVolunteers(id, data);
    if(updatedVolunteer){
        return res.status(200).json({ message: "Voluntário atualizado com sucesso!" });
    }
    return res.status(404).json({error: "Voluntário não encontrado."});
}