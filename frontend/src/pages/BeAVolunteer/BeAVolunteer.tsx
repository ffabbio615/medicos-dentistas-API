import { useState, type MouseEvent } from "react";
import "./BeAVolunteer.scss";
import VolunteerForm from "../../components/VolunteerForm";
import { VolunteerFormData } from "../../types/volunteer";

export default function BeAVolunteer() {

    const volunteerTasks = [
        {
            title: "Impacto Direto",
            description: "Sua dedicação salva vidas e transforma comunidades",
        },
        {
            title: "Crescimento Pessoal",
            description: "Desenvolva habilidades e cresça profissionalmente",
        },
        {
            title: "Comunidade",
            description: "Faça parte de uma rede de profissionais comprometidos",
        },
    ];

    const [finishedRegistration, setFinishedRegistration] = useState(false);

    async function handleCreateVolunteer(data: VolunteerFormData){
        const res = await fetch("https://medicos-dentistas-api.onrender.com/api/volunteers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    tel: data.tel,
                    message: data.message}),
            });
            const newVolunteer = await res.json();
            if(newVolunteer.error){
                alert("Houve um erro ao enviar o formulário: " + newVolunteer.error);
            }else{
                setFinishedRegistration(true);
            }
    }

    return (
        <>
            <section className="be-volunteer-section">
                <div className="volunteer-title-container">
                    <h1>Seja voluntário</h1>
                    <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
                </div>
                <div className="volunteer-tasks-container">
                    {
                        volunteerTasks.map((task, index) => (
                            <div key={index} className="task-item">
                                <p className="task-title">{task.title}</p>
                                <p className="task-description">{task.description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="volunteer-registration-section">
                <div className="create-volunteer-form-container">
                    {
                        finishedRegistration ?
                            <p className="registration-success">Agradecemos pela sua inscrição! Entraremos em contato para mais informações.</p>
                        :
                            <VolunteerForm onSubmit={handleCreateVolunteer} formTitle="Inscrição para Voluntários" />
                    }
                </div>
            </section>
        </>
    );
}