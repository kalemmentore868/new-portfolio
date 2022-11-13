import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xeqdvyob"
      method="POST"
      role="form"
      className="php-email-form contact-left"
    >
      <Row>
        <Form.Group className="col-md-6">
          <Form.Label htmlFor="name">Your Name</Form.Label>
          <Form.Control type="text" name="name" id="name" required />
          <Form.Control.Feedback type="invalid">
            {" "}
            Please provide a name{" "}
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className=" col-md-6">
          <Form.Label htmlFor="name">Your Email</Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group>
        <Form.Label htmlFor="name">Subject</Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a subject.
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="name">Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows="10"
          required
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Please provide a message
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </Form>
  );
};

export default ContactForm;
