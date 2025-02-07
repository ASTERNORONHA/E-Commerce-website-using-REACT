import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
  
    console.log('User subscribed with email:', email);
  };

  return (
    
    <div className="home-page">
      <header>
      <img src="/images/college.jpg" alt="" />
        <h6>New horizon institute of technology and management</h6>
         <p>New Horizon Institute of Technology and Management is, the brain child of the Visionary founder Dr. Subir Kumar Banerjee who envisioned to lay the foundation of an acme of educational distinction; an institution to foster technical education par excellence for young minds ready to spread their wings to establish themselves in the technological sphere. With an idea of education from KG (Kindergarten) to PG (Post-graduation) under an unified educational assemblage, he laid the foundation of NHITM under the patronage of New Horizon Education Society, which was an already established and reputed academic institute conglomerate providing pre-primary, primary and secondary education to children from pre-nursery to class twelfth board in various parts of Mumbai and suburbs.</p>
      </header>

      <div className="title"> 
        <h1>Take a look at the cources we offer</h1>
      </div>
    `/8
      <div>
      <div>
      
        <div className="program megatronics-program">
          <Link to="https://nhitm.ac.in/mechatronics-engineering-2/">
            <img src="/images/meg.jpg" alt="Mechatronics Engineering" />
            <h3>Mechatronics Engineering</h3>
            <p>Study the fusion of mechanical engineering and electronics in Mechatronics Engineering.</p>
          </Link>
        </div>

        <div className="program computer-engineering-program">
          <Link to="https://nhitm.ac.in/computer-engineering-department/">
            <img src="/images/ce.jpg" alt="Computer Engineering" />
            <h3>Computer Engineering</h3>
            <p>Learn the design and development of computer systems and networks in Computer Engineering.</p>
          </Link>
        </div>

        <div className="program computer-science-program">
          <Link to="https://nhitm.ac.in/computer-science-and-design/">
            <img src="/images/csd1.jpg" alt="Computer Science and Design" />
            <h3>Computer Science and Design</h3>
            <p>Explore the world of software development and creative design in Computer Science and Design.</p>
          </Link>
        </div>

        <div className="program ai-program">
          <Link to="https://nhitm.ac.in/artificial-intelligence-data-science/">
            <img src="/images/ai.jpg" alt="AI and Data Science" />
            <h3>AI and Data Science</h3>
            <p>Explore the exciting world of Artificial Intelligence and Data Science.</p>
          </Link>
        </div>

        <div className="program mechanical-program">
          <Link to="https://nhitm.ac.in/mechanical-engineering-2/">
            <img src="/images/mech.jpg" alt="Mechanical Engineering" />
            <h3>Mechanical Engineering</h3>
            <p>Learn the principles of mechanical design and innovation.</p>
          </Link>
        </div>

        <div className="program civil-engineering-program">
          <Link to="https://nhitm.ac.in/civil-engineering-2/">
            <img src="/images/civil.jpg" alt="Civil Engineering" />
            <h3>Civil Engineering</h3>
            <p>Develop infrastructure and construction skills in Civil Engineering.</p>
          </Link>
        </div>
      </div>

      
    </div>

      <section className="cta-section">
        <h2>Subscribe for Updates</h2>
        <p>Stay in the loop with the latest updates on addmissions and exams.</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="about-section">
        <h2>Welcome to our institution</h2>
        <p>Explore our services and discover what you need for a succesful carrer.</p>
      </section>

      <section className="cta-buttons">
        <Link to="/services">
          <button>Explore Services</button>
        </Link>
        <Link to="/ContactUs">
          <button>Contact Us</button>
        </Link>
    
      </section>
    </div>
  );
};

export default HomePage;
