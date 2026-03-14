import "./VolunteerList.scss";
import { useEffect, useState } from "react";
import type { VolunteerFormData } from "../../types/volunteer";
import VolunteerForm from "../../components/VolunteerForm";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

export default function VolunteerList(){

    const token = localStorage.getItem("token");
    const [volunteers, setVolunteers] = useState<VolunteerFormData[]>([]);
    const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
    const [volunteerIndex, setVolunteerIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const conectionError = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    useEffect(()=>{
        const getVolunteers = async() =>{
            try {
                if(!token){
                    conectionError();
                    return;
                }
                const res = await fetch("https://medicos-dentistas-api.onrender.com/api/volunteers", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if(res.status === 401){
                    conectionError();
                    return;
                }
                const data: VolunteerFormData[] = await res.json();
                setVolunteers(data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch {
                conectionError();
            }
        }

        getVolunteers();
    });

    const handleDeleteVolunteer = async(id: number) =>{
        const res = await fetch(`https://medicos-dentistas-api.onrender.com/api/volunteers/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(res.status === 401){
            localStorage.removeItem("token");
            navigate("/login");
            return;
        }
        
        const deletedVolunteer = await res.json();

        if(deletedVolunteer.error){
            alert("Houve um erro ao deletar o voluntário: " + deletedVolunteer.error);
        }else{
            alert("Voluntário deletado com sucesso!");
            setVolunteers(volunteers.filter((_, index) => index !== id-1));
        }
    }

    const handleUpdateVolunteer = async(data: VolunteerFormData) => {
        const res = await fetch(`https://medicos-dentistas-api.onrender.com/api/volunteers/${volunteerIndex!}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                {
                    name: data.name,
                    email: data.email,
                    tel: data.tel,
                    message: data.message
                }
            ),
        })

        if(res.status === 401){
            localStorage.removeItem("token");
            navigate("/login");
            return;
        }
        const updatedVolunteer = await res.json();
        
        if(updatedVolunteer.error){
            alert("Houve um erro ao atualizar o voluntário: " + updatedVolunteer.error);
        }else{
            alert("Voluntário atualizado com sucesso!");
            setShowUpdateForm(false);
            setVolunteers(volunteers.map((volunteer) => {
                if(volunteer.id === volunteerIndex){
                    return {...volunteer, ...data};
                }
                return volunteer;
            }));
        }
    }

    return(
        <>
        {loading && <Loader />}
        {showUpdateForm &&
            <section onClick={()=> setShowUpdateForm(false)} className="update-volunteer-section">
                <div onClick={(e) => e.stopPropagation()} className="update-volunteer-form-container">
                    <VolunteerForm onSubmit={handleUpdateVolunteer} formTitle="Atualizar Voluntário" />
                </div>
            </section>
        }
            <section className="volunteers-list-container">
                <h1>Lista de Voluntários</h1>
                <div className="volunteers-cards-container">
                    {volunteers.map((volunteer) => (
                        <div className="volunteers-card" key={volunteer.id}>
                            <div className="volunteers-card-buttons">
                                <button onClick={() => {setShowUpdateForm(!showUpdateForm); setVolunteerIndex(volunteer.id!)}} className="volunteers-update-button">✎</button>
                                <button onClick={() => handleDeleteVolunteer(volunteer.id!)} className="volunteers-delete-button">X</button>
                            </div>
                            <div className="volunteers-name">
                                <p>{volunteer.name}</p>
                            </div>
                            <div>
                                <p>E-mail: {volunteer.email}</p>
                                <p>Telefone: {volunteer.tel}</p>
                            </div>
                            <div className="volunteers-message">
                                <p>{volunteer.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}