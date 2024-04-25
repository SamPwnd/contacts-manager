import { Button, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout())
	}

    return (
        <header className="header">
            <Container>
                <Row className="header__wrapper">
                    <h1 className="header__title">GESTIONE CONTATTI</h1>
                    <div style={{ maxWidth: 'fit-content' }}>
                    {
                        user ? <Button variant="light" onClick={(e) => handleLogout(e)}>LOGOUT</Button> : ''
                    }
                    </div>

                </Row>
            </Container>
        </header>
    )
}

export default Header;