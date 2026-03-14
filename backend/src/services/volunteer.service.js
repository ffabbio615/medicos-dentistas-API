import {volunteers} from "../database/fakeDb.js";

export function getAllVolunteers(){
    return volunteers;
}

export function createVolunteers(data){

    const volunteerId = volunteers.reduce((max, volunteer) => {
        return volunteer.id > max ? volunteer.id : max;
    }, 0);

    const newVolunteer = {
        id: volunteerId + 1,
        ...data
    };

    volunteers.push(newVolunteer);
    return newVolunteer;
}

export function deleteVolunteers(id){
    const index = volunteers.findIndex(volunteer => volunteer.id === id);

    if(index !== -1){
        volunteers.splice(index, 1);
        return true;
    }

    return false;
}

export function updateVolunteers(id, data){
    const index = volunteers.findIndex(volunteer => volunteer.id === id);
    if(index !== -1){
        volunteers[index] = {
            ...volunteers[index],
            ...data
        };
        return volunteers[index];
    }
}