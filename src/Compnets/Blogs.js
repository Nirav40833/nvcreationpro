import React, { useState } from 'react';
import Menu from './Menu';
import Footer from './Footer';
const styles = {
  formContainer: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    resize: 'vertical',
    fontSize: '16px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
  },
  successMessage: {
    padding: '10px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '4px',
    marginBottom: '15px',
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value, 
    });
  };

  // 3. Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    setError(null); 
    
   
    console.log('Form Data Ready for API:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
   <>
   <Menu />
   <h2></h2>
    <div style={styles.formContainer}>
      <h2>Get In Touch</h2>
      
      {/* Success Message */}
      {isSubmitted && (
        <div style={styles.successMessage}>
          Thank you for your message! We will get back to you shortly.
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div style={{...styles.successMessage, backgroundColor: '#f8d7da', color: '#721c24'}}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          name="name" // Important for handleChange
          value={formData.name} // Controlled component value
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          name="email" // Important for handleChange
          value={formData.email} // Controlled component value
          onChange={handleChange}
          required 
          style={styles.input}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message" // Important for handleChange
          value={formData.message} // Controlled component value
          onChange={handleChange}
          required
          rows="5"
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
    <Footer />
   
   </>

    
  );
};

export default ContactForm;