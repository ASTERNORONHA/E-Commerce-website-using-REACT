import React from 'react';
import './AboutUsPage.css';
// Replace with the actual path to your teacher image

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <header>
        <h1>New Horizon Institute of Technology and Management</h1>
        <p>Committed to Excellence in Technical Education</p>
      </header>

      <section className="vision">
        <h3 className="section-heading">Our Vision</h3>
        <div className="section-content">
          <p>
            To create compassionate, humane visionaries and creative technical professionals, promoting and conserving our cultural heritage as well as contributing to global development, leading society to new horizons.
          </p>
        </div>
      </section>

      <section className="mission">
        <h3 className="section-heading">Our Mission</h3>
        <div className="section-content">
          <p>
            Dissemination of technical skills and the imbuing of moral, ethical, and socio-cultural value systems to meet international standards and competition.
          </p>
        </div>
      </section>

      <section className="approach">
        <h3 className="section-heading">Our Approach</h3>
        <div className="section-content">
          <p>
            Engage, encourage, explore, experiment, innovate, and invent, setting new benchmarks to promote sustainability and become global leaders in the field of engineering.
          </p>
        </div>
      </section>

      <section className="community">
        <h3 className="section-heading">Our Community</h3>
        <div className="section-content">
          <p>
            Provide opportunities to prosper and thrive in the community.
          </p>
        </div>
      </section>

      <section className="team">
      <img src="/images/pri1.jpg"alt="Our Team" />
      <img src="/images/pri2.jpg"alt="Our Team" />
        <h2 className="section-heading">Our Team of Excellent Teachers</h2>
        <div className="team-content">
          <img src="/images/team.jpg"alt="Our Team" />
          <p>
            Meet our dedicated team of teachers who are committed to providing quality education and guidance to our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
