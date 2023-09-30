import { useState } from 'react';

// Components :D
import CartWidget from '../CartWidget/CartWidget';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// React router DOM
import { Link } from 'react-router-dom'

// Custom Hook 
import { useCollection } from '../../hooks/useCollection';

// Styles
import styles from './NavBar.module.css';

// ImgLOGO
import logomax from '../../img/logomax.png';


function NavBar() {

  const {data, loading} = useCollection("categories");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className={styles.title}>
            <Link to='/'><img className={styles.logo}src={logomax} alt="logo-max" /></Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navlink}>
            <Nav.Link>
                <Link className={styles.homeH1} to='/'>Home</Link>
            </Nav.Link>
            {
              loading ? null : <NavDropdown className={styles.dropdownTitle} title='Categorias' id='basic-nav-dropdown' show={isDropdownOpen} onClick={toggleDropdown}>
                {data[0].categories.map((category, index) => {
                  return <NavDropdown.Item className={styles.dropdown} key={index}>
                    <Link style={{ marginLeft: "0.2rem" }} className={styles.dropdown} to={`/category/${category}`}>{category}</Link>
                  </NavDropdown.Item>;
                })}
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;