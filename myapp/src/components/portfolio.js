import React from 'react';
import './style.css';

const Portfolio = () => {
  const alumnaeData = [
    {
      id: 1,
      name: 'Alice Johnson',
      description: 'Alice Johnson graduated with honors in Electrical Engineering. During her time at our college, she actively participated in robotics competitions and led the development of a solar-powered charging station. Alice is currently working as an Electrical Engineer at Tech Innovations, where she contributes to the design of sustainable energy solutions.',
      imageUrl: '/images/1.jpg',
      job: 'Electrical Engineer',
    },
    {
      id: 2,
      name: 'Bob Smith',
      description: 'Bob Smith is a Mechanical Engineering graduate known for his innovative approaches to problem-solving. His senior project, a smart irrigation system, received recognition at a national engineering conference. Bob currently works as a Mechanical Design Engineer at Global Tech Solutions, where he contributes to the design and optimization of cutting-edge products.',
      imageUrl: '/images/2.jpg',
      job: 'Mechanical Design Engineer',
    },
    {
      id: 3,
      name: 'Eve Davis',
      description: 'Eve Davis excelled in Computer Science and Engineering, specializing in artificial intelligence. She was part of a team that developed a language translation app using machine learning. Eve is now a Software Engineer at DataTech Solutions, where she works on developing algorithms for natural language processing.',
      imageUrl: '/images/3.jpg',
      job: 'Software Engineer',
    },
  ];

  return (
  <div className="portfolio-container">
      <h1>College Portfolio</h1>
      {alumnaeData.map(alumna => (
        <div key={alumna.id} className="alumna">
          <img src={alumna.imageUrl} alt={alumna.name} />
          <h2>{alumna.name}</h2>
          <p>{alumna.description}</p>
          <p><strong>Current Job:</strong> {alumna.job}</p>
        </div>
        
      ))}
       <div className="service-item">
          <h2>OUR ALUMINE</h2>
          <p>we are deeply proud of our alumine</p>
          <img src="/images/alumine.jpg" alt="" />
        </div>
    </div>
  );
};

export default Portfolio;
