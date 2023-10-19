
import '../styles/Footer.scss';

const Footer = ({NavLink}) => {
    return (
      <footer className="footer">
        <nav>
          <ul>
            <li className="footer__menu-item">
              <NavLink to="/jugar" className={({ isActive, isPending }) => isPending ? "pending footer__menu-link" : isActive ? "active footer__menu-link" : ""} >A jugar</NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink to="/instructions" className={({ isActive, isPending }) => isPending ? "pending footer__menu-link" : isActive ? "active footer__menu-link" : ""} >¿Cómo se juega?</NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink to="/options" className={({ isActive, isPending }) => isPending ? "pending footer__menu-link" : isActive ? "active footer__menu-link" : ""} >Más opciones</NavLink>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">&copy; Adalab</small>
      </footer>
    );
  };
  export default Footer;