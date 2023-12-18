import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="formName" label="Name">
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formEmail" label="Email" className="my-2">
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formPhone" label="Phone Number">
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formSubject" label="Subject" className="my-2">
                    <Form.Control
                        type="text"
                        placeholder="Enter the subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formMessage" label="Message">
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-control-sm"
                    />
                </FloatingLabel>

                <Button variant="primary" type="submit" className='w-100 my-2 btn-lg'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
