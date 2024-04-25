import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { Form, Col, Button, Container } from "react-bootstrap";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }))

        navigate('/');
    };

    return (
        <section className="login mt-4">
            <Container>
                <Form onSubmit={handleSubmit} className="login__form">
                    <h1>Accedi</h1>
                    <Col xs={12} md={6} className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text" 
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </Col>
                    <Button type="submit" className="login__btn">INVIA</Button>
                </Form>
            </Container>
        </section>
    )
}

export default Login;