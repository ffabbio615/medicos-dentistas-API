import "./Home.scss";
import { NavLink } from 'react-router-dom';

type Cards = {
    title: string,
    desription: string,
    image?: string;
};

export default function Home (){

    const servicesCards: Cards[] = [
        {
            title: "Hospitalidade",
            desription: "A excelência clínica deve ser a prioridade de qualquer prestador de serviços de saúde."
        },
        {
            title: "Atendimento de emergência",
            desription: "A excelência clínica deve ser a prioridade de qualquer prestador de serviços de saúde."
        },
        {
            title: "Serviço de Câmara",
            desription: "A excelência clínica deve ser a prioridade de qualquer prestador de serviços de saúde."
        },
    ]

    const departmentsCards: Cards[] = [
        {
            title: "Cuidados com os Olhos",
            desription: "A autoestima, o espírito e o temperamento também se despedem daqueles que dirigem a autoestima.",
            image: "/img/eyeCare.webp",
        },
        {
            title: "Fisioterapia",
            desription: "A autoestima, o espírito e o temperamento também se despedem daqueles que dirigem a autoestima.",
            image: "/img/physicalTherapy.webp",
        },
        {
            title: "Teste Diagnóstico",
            desription: "A autoestima, o espírito e o temperamento também se despedem daqueles que dirigem a autoestima.",
            image: "/img/diagnosticTest.webp",
        },
        {
            title: "Cirurgia de Pele",
            desription: "A autoestima, o espírito e o temperamento também se despedem daqueles que dirigem a autoestima.",
            image: "/img/skinSurgery.webp",
        },
        {
            title: "Serviços Cirúrgicos",
            desription: "A autoestima, o espírito e o temperamento também se despedem daqueles que dirigem a autoestima.",
            image: "/img/surgeryService.webp",
        },
        {
            title: "Cuidados Dentários",
            desription: "A autoestima, o espírito e o temperamento também se despedem daqueles que dirigem a autoestima.",
            image: "/img/dentalCare.webp",
        },
    ]

    function scrollTop(){
        window.scrollTo(0, 0);
    }

    return(
        <>
        <section id="top" className="health-care-section">
            <div className="health-text-container">
                <div>
                    <h1>Cuidados de Saúde <br></br> <span>Para Toda Família</span></h1>
                    <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>
                    <NavLink to="/be-a-volunteer">
                        <button onClick={scrollTop}>Seja um Voluntário</button>
                    </NavLink>
                </div>
            </div>

            <div className="health-care-image-container">
                <img src="/img/doctor.png" alt="Imagem de médico voluntário" />
            </div>
        </section>

        <section id="ourServices" className="our-services-section">
            <div className="services-cards-container">
                {servicesCards.map((card, index) => (
                    <div key={index} className="card-container">
                        <p className="card-title">{card.title}</p>
                        <p className="card-description">{card.desription}</p>
                    </div>
                ))}
            </div>
        </section>

        <section id="ourDepartments" className="our-departments-section">
            <div className="department-header-container">
                <h2>Nossos Departamentos</h2>
                <p>O espírito estimado também diz adeus àqueles que direcionam a estima. <br></br> Estima-se com sorte ou coloca a imagem no desenho.</p>
            </div>
            <div className="department-cards-container">
                {departmentsCards.map((card, index) => (
                    <div key={index} className="card-container">
                        <img src={card.image} alt={card.title} />
                        <p className="card-title">{card.title}</p>
                        <p className="card-description">{card.desription}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}