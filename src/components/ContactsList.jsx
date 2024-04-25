import { Link } from "react-router-dom";
import CreateContact from "./CreateContact";
import { postContacts } from "../Api";
import { Button, Col, Container, Row } from "react-bootstrap";

const ContactsList = ({contacts, deleteContact, updateContacts}) => {

	function handleClick(id) {
		deleteContact(id)
	}

	const addContact = (contact) => {
		postContacts(contact).then((res) => {
			updateContacts(res)
		}).catch((error) => {
		console.error(error);
		});
	}
	
    return (
		<Container className="mt-4">
			<Row>
				<CreateContact addContact={addContact} />
				<Col>
					<div className="divider"></div>
				</Col>
				<div>
					{contacts.map((contact) => {
					return (
						<div className="contact-card" key={contact.id}>
							<h2 className="contact-card__name">{contact.name}</h2>
							<p>{contact.phone}</p>
							<p>{contact.email}</p>
							<div className="button-wrapper">
								<Link to={`/edit-contact/${contact.id}`} state={contact} className="button-wrapper__btn" style={{ textDecoration: 'none' }}>
									<Button variant="dark" className="button-wrapper__btn w-100">Edit ✏️</Button>
								</Link>
								<Button variant="outline-danger" className="button-wrapper__btn" onClick={() => handleClick(contact.id)}>
									Delete
								</Button>
							</div>
							
						</div>
					);
					})}
				</div>
			</Row>
		</Container>
    )
}

export default ContactsList;