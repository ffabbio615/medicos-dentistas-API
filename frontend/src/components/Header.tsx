import { NavLink, useLocation } from 'react-router-dom'
import './Header.scss'

export default function Header() {

  const location = useLocation();
  const path = {
    isHome: location.pathname === "/",
    isBeVolunteer: location.pathname === "/be-a-volunteer",
    isVolunteerList: location.pathname === "/volunteer-list",
  };

  function scrollTop(){
    window.scrollTo(0, 0);
  }

  return (
    <header>
      <div className="header-logo-container">
        <img src="/img/MedicosDentistasLogo.svg" alt="Médicos e Dentistas Logo" />
        <p>Médicos & Dentistas</p>
      </div>

      <nav className="header-links-container">
        {path.isHome ? (
          <>
            <a href="#top">Topo</a>
            <a href="#ourServices">Nossos Serviços</a>
            <a href="#ourDepartments">Nossos Departamentos</a>
            <a href="#contact">Contato</a>

            <NavLink to="/be-a-volunteer">
              <button onClick={scrollTop}>Seja um Voluntário</button>
            </NavLink>
          </>
        ) : path.isBeVolunteer ? (
          <>
            <NavLink onClick={scrollTop} to="/">Voltar</NavLink>
            <NavLink onClick={scrollTop} to="/login">
              <button onClick={scrollTop}>Lista de Voluntários</button>
            </NavLink>
          </>
        ) : (
            <NavLink onClick={scrollTop} to="/">Voltar</NavLink>
        )}
      </nav>
    </header>
  )
}