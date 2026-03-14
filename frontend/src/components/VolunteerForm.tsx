import "./VolunteerForm.scss";
import {useState} from "react";
import type { VolunteerFormData } from "../types/volunteer";

export default function VolunteerForm({onSubmit, formTitle}: {onSubmit: (data: VolunteerFormData) => Promise<void>, formTitle: string}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        if (!name || !email || !tel || !message) return alert("Todos os campos obrigatórios devem ser preenchidos.");
        
        await onSubmit({name, email, tel, message});   
    }

    function telMask(value: string){
        const v = value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2");
        setTel(v);
    }

    return (
        <form onSubmit={handleSubmit} className="volunteer-form">
                    <p className="form-title">{formTitle}</p>
                    <label htmlFor="txtName">Dados Pessoais</label>
                    <input onChange={(e) => setName(e.target.value)} id="txtName" type="text" placeholder="Seu Nome *"></input>
                    <input onChange={(e) => setEmail(e.target.value)} id="txtEmail" type="email" placeholder="Seu E-mail *"></input>
                    <input onChange={(e) => telMask(e.target.value)} value={tel} id="txtTel" type="text" placeholder="Seu Telefone *" inputMode="numeric" maxLength={15}></input>
                    <label htmlFor="txtMessage">Mensagem Adicional</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} id="txtMessage" placeholder="Conte-nos porque você que ser voluntário..."></textarea>
                    <p className="form-advise-text">Entraremos em contato para mais informações</p>
                    <button>Enviar Inscrição</button>
        </form>
    );
}