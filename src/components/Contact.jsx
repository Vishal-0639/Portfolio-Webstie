import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Instagram, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../portfolioData';

const Contact = () => {
  const { email, linkedin, location, emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = portfolioData.contact;
  const { instagram } = portfolioData.socialLinks;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear errors when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // If EmailJS credentials are not configured, simulate success and warn in console
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.warn("EmailJS credentials are not set in src/portfolioData.js. Simulating success state.");
      
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1000);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Inquiry',
      message: formData.message,
      to_email: email
    };

    emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey)
      .then((res) => {
        console.log('EmailJS Success:', res.status, res.text);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert("Failed to deliver message via EmailJS. Please verify Service IDs, Template keys, and Public Keys in src/portfolioData.js.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <div className="section-title-container">
        <span className="section-subtitle">GET IN TOUCH</span>
        <h2>CONTACT ME</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div>
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              I'm always interested in learning, building, and connecting with people working on interesting software problems. Feel free to reach out via email, social links, or the form.
            </p>
          </div>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-detail-icon-wrapper">
                <Mail size={18} />
              </div>
              <div className="contact-detail-content">
                <span className="contact-detail-label">Email</span>
                <a href={`mailto:${email}`} className="contact-detail-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {email}
                </a>
              </div>
            </div>

            {linkedin && (
              <div className="contact-detail-item">
                <div className="contact-detail-icon-wrapper">
                  <Linkedin size={18} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">LinkedIn</span>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                    View Profile
                  </a>
                </div>
              </div>
            )}

            {instagram && (
              <div className="contact-detail-item">
                <div className="contact-detail-icon-wrapper">
                  <Instagram size={18} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Instagram</span>
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="contact-detail-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                    _vishal76_
                  </a>
                </div>
              </div>
            )}

            <div className="contact-detail-item">
              <div className="contact-detail-icon-wrapper">
                <MapPin size={18} />
              </div>
              <div className="contact-detail-content">
                <span className="contact-detail-label">Location</span>
                <span className="contact-detail-value">{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div>
          {isSuccess ? (
            <div className="contact-form form-success-state">
              <div className="form-success-icon-wrapper">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="form-success-title" style={{ color: '#ef4444' }}>Message Sent!</h3>
              <p className="form-success-text" style={{ color: 'var(--text-main)' }}>
                Thank you for reaching out. Your message has been sent successfully. I'll get back to you as soon as possible.
              </p>
              <button onClick={() => setIsSuccess(false)} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Name"
                    style={errors.name ? { borderColor: '#ef4444' } : {}}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    style={errors.email ? { borderColor: '#ef4444' } : {}}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Your Message..."
                  style={errors.message ? { borderColor: '#ef4444' } : {}}
                ></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary form-submit-btn"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
