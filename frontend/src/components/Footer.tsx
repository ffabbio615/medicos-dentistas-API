import './Footer.scss';

export default function Footer (){
    return(
        <footer id='contact'>

            <div className="footer-links-container">
                <div className="social-media-container">
                    <img className='footer-logo' src="/img/MedicosDentistasLogo.svg" alt="Médicos e Dentistas Logo" />
                    <p>Médicos & Dentistas</p>
                    <div className='social-media-buttons-container'>
                        <button>
                            <img src="/img/facebookIcon.svg" alt="Botão para a página do Facebook" />
                        </button>
                        <button>
                            <img src="/img/instagramIcon.svg" alt="Botão para a página do Instagram" />
                        </button>
                        <button>
                            <img src="/img/whatsappIcon.svg" alt="Botão para falar conosco no Whatsapp" />
                        </button>
                    </div>
                </div>
                <div className="map-links-container">
                    <div className='links-container'>
                        <p className='title'>Departamentos</p>
                        <a href='#' className='links-item'>Olhos</a>
                        <a href='#' className='links-item'>Pele</a>
                        <a href='#' className='links-item'>Patologias</a>
                        <a href='#' className='links-item'>Medicina</a>
                        <a href='#' className='links-item'>Dental</a>
                    </div>
                    <div className='links-container'>
                        <p className='title'>Links Úteis</p>
                        <a href='#' className='links-item'>Sobre</a>
                        <a href='#' className='links-item'>Blog</a>
                        <a href='#' className='links-item'>Contato</a>
                        <a href='#' className='links-item'>Oficinas</a>
                        <a href='#' className='links-item'>Encontros</a>
                    </div>
                    <div className='links-container'>
                        <p className='title'>Endereço</p>
                        <a href='#' className='links-item'>Rua do Mercado Livre, 850, <br></br> Bispo - Salvador BA</a>
                        <a href='#' className='links-item'>medicosedentistas@outlook.com</a>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                Copyright ©2025 Todos os Direitos Reservados | Este template foi feito por Fábio Marques
            </div>
        </footer>
    );
}