import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import { useContext } from 'react';

const Navigation = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand>Restaurantes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Inicio</Link>
                        <Link to="/gallery" className='nav-link'>Galería</Link>
                        {
                            user && <Link to="/create" className='nav-link'>Crea Restaurante</Link>
                        }
                    </Nav>

                    <Nav className="ml-auto">
                        {user ? (
                            <>
                                <Link to="/profile" className='nav-link'>Hola {user.username}</Link>
                                <Link to="/" className='nav-link' onClick={logout}>Cerrar Sesión</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className='nav-link'>Iniciar Sesión</Link>
                                <Link to="/signup" className='nav-link'>Registro</Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
