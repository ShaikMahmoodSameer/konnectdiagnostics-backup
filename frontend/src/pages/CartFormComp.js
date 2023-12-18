import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const cartListItems = {
    listStyleType: "none",
    display: "inline",
    background: "rgba(0,0,0,0.05)",
    borderRadius: "20px",
    padding: "5px 15px",
    margin: "5px",
    fontWeight: "700",
    fontSize: "14px"
}

function CartFormComp({cart}) {
    const selectests = cart.map(item => item.name);
    const testsString = selectests.join(', ');
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      selectedTests: testsString,
      message: "",
    });
    const [submitted, setSubmitted] = useState(false); // Add this state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3210/sendemail', formData);
        console.log(response.data);
        setSubmitted(true);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    // console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <section className="pt-5 gradient-custom">
      <h2 className="mb-4">Submit Form</h2>
      <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="px-2 py-2 m-2"
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="px-2 py-2 m-2"
              />
            </Form.Group>

            <Form.Group controlId="mobileNumber">
              <Form.Control
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="px-2 py-2 m-2"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-2 py-2 m-2"
              />
            </Form.Group>

        <Form.Group controlId="selectedTests">
          <div className="px-3 py-2">
            <h6>Selected Items:</h6>
            <ul className="my-2">
              {
                  cart.map((item) => (
                      <li style={cartListItems}> {item.name} </li>
                  ))
              }
            </ul>
          </div>
        </Form.Group>

        {/* <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="px-2 py-2 m-2"
          />
        </Form.Group> */}

        {submitted && <div className="alert alert-success mt-3">Form has been submitted!</div>}
        <Button variant="primary" type="submit" className="px-4 py-1 mx-2">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default CartFormComp;
