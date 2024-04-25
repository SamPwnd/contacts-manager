import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { patchContact } from "../Api";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const EditContact = ({updateContacts}) => {
    const location = useLocation();
    const id = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState(location.state);

    const handleChange = (e) => {
        if (!e.target) return
        const {name, value} = e.target
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editContact();
        navigate('/')
    };

    const editContact = () => {
      patchContact(id, contact).then((res) => {
        updateContacts(res);
      }).catch((error) => {
        console.error(error);
      });
    }

    return (
        <Container className="mt-4">
          <h1>Modifica</h1>
          <Row>
            <Form onSubmit={handleSubmit}>
              <Col xs={12} md={6} className="mb-2">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" className="form-control" name="name" value={contact.name} placeholder="Nome"
                  onChange={handleChange} required
                />
              </Col>
              <Col xs={12} md={6} className="mb-2">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" className="form-control" name="phone" value={contact.phone} placeholder="Telefono"
                  onChange={handleChange} required
                />
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className="form-control" name="email" value={contact.email} placeholder="Email"
                  onChange={handleChange} required
                />
              </Col>
              <Button type="submit">Modifica contatto</Button>
            </Form>
          </Row>
        </Container>
    )
}

export default EditContact;