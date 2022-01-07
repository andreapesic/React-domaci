import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            LOTUS
            <i class="fas fa-spa"></i>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/appointments'
                className='nav-links'
              >
                Appointments
              </Link>
            </li> 
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
