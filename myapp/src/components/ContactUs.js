// ContactUs.js
import React, { useState } from 'react';
import MapComponent from './MapComponent';
import './ContactUs.css';

const ContactUs = () => {
  const [inquiry, setInquiry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    
    console.log('Inquiry submitted:', inquiry);
  };

  const handleChatInput = (e) => {
    setChatInput(e.target.value);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    
    const newChatHistory = [...chatHistory, { type: 'user', message: chatInput }];
    setChatHistory(newChatHistory);
    
    setTimeout(() => {
      setChatHistory([...newChatHistory, { type: 'bot', message: 'I am a helpful chatbot!' }]);
    }, 500);
    setChatInput('');


};
  return (
    <div>
        <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or ready to get started? Reach out to us!</p>
        <form onSubmit={handleInquirySubmit} className="inquiry-form">
          <div className="form-group">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Contact Number"
              required
            />
          </div>
          <textarea
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            placeholder="Your Message"
            required
          />
          <button type="submit">Submit Inquiry</button>
        </form>

        <div className="chatbot-section">
          <h2>Chat with Us</h2>
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className={chat.type === 'user' ? 'user-message' : 'bot-message'}>
                {chat.message}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="chat-input-form">
            <input
              type="text"
              value={chatInput}
              onChange={handleChatInput}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Our Location</h2>
        <p>New Horizon Education Society's Complex,<br></br>
           Anand Nagar,<br></br> Kavesar,<br></br>
            Off Ghodbunder Road, <br></br>
            Thane (W)- 400615.</p>
        <MapComponent />
      </section>

      
    </div>
  );
};

export default ContactUs;
