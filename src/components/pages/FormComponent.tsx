// Filename: FormComponent.js
import React, { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission and page reload

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Send a POST request to your PHP script
      const response = await fetch('../../assets/process-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicate that the body is JSON
        },
        body: JSON.stringify(formData), // Convert the form data to a JSON string
      });

      const data = await response.json(); // Assuming the PHP script returns JSON
      setResponseMessage(data.message);
      
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');

    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Error processing the request.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default FormComponent;
