// src/components/ContactForm.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example, send the data to a server or API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      email: '',
      message: '',
    });
  };

  return (
    <section className='container contact-sec'>
      <h2 className='h2'>Get in touch</h2>
    <form className="container mt-5" onSubmit={handleSubmit}>


    <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
    </section>
  );
};

export default Contact;
