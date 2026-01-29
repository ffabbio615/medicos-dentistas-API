
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home/Home'
import BeAVolunteer from './pages/BeAVolunteer/BeAVolunteer'
import Login from './pages/Login/Login'
import { PrivateRoute } from "./routes/PrivateRoute";
import VolunteerList from './pages/VolunteerList/VolunteerList'

function App() {

  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/be-a-volunteer" element={<BeAVolunteer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/volunteer-list" element={<PrivateRoute><VolunteerList /></PrivateRoute>} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  )
}

export default App
