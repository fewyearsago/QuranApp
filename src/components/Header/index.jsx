import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './index.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar className="p-3" bg="white" variant="light">
      <Container>
        <NavLink className={style.rootLogo} to="/">
          QuranApp
        </NavLink>
        <Nav className="m-2">
          <NavLink className={style.rootLink} to="/">
            Главная
          </NavLink>
          <NavLink className={style.rootLink} to="/read">
            Читать
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
