import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';
import '../Styles/navbar.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const { state, toggleTheme } = useContextGlobal();

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-links">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/favs">
          <h4>Favs</h4>
        </Link>
      </div>

      <div className="navbar-actions">
        <button onClick={toggleTheme}>Change theme</button>
        {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      </div>

    </nav>
  )
}

export default Navbar