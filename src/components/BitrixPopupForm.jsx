// File: src/components/BitrixPopupForm.jsx

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./BitrixPopupForm.css";

const BitrixPopupForm = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sectionName, setSectionName] = useState(null);

  useImperativeHandle(ref, () => ({
    open: (fromSection = null) => {
      setSectionName(fromSection);
      setVisible(true);
    },
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leadTitle = sectionName ? `Website Lead (${sectionName})` : "Website Lead";

    const payload = {
      fields: {
        TITLE: leadTitle,
        NAME: formData.name,
        COMPANY_TITLE: formData.company,
        EMAIL: [{ VALUE: formData.email, TYPE: "WORK" }],
        PHONE: [{ VALUE: formData.phone, TYPE: "WORK" }],
        COMMENTS: formData.message,
        SOURCE_ID: "WEB",
      },
    };

    try {
      await axios.post(
        "https://udc.bitrix24.in/rest/25/olly4p1j9d1isgld/crm.lead.add.json", // Replace with your Bitrix24 Webhook URL
        payload
      );
      setSubmitted(true);
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Bitrix24 submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal show={visible} onHide={() => setVisible(false)} centered className="popup-modal">
      <div className="dark-mode-form">
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center gap-2">
            Book a Free Consultation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <div className="text-success fw-bold text-center py-4">
              ✅ Thank you! Your message has been sent.
            </div>
          ) : (
            <Form className="form-styled" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                 </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="text-end">
                <Button variant="success" type="submit">
                  Submit →
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </div>
    </Modal>
  );
});

export default BitrixPopupForm;