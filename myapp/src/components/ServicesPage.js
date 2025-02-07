import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header>
        <h1>Our Educational Services</h1>
        <p>Discover your Potential Through Our Services</p>
      </header>

      <section className="service-list">
        <div className="service-item">
          <h2>Infrastructure</h2>
        
          <Carousel className="infrastructure-carousel">
            <Carousel.Item interval={10000}>
              <div className="carousel-image">
                <img src="/images/lib.jpg" className="d-block w-100" alt="LIBRARY" />
                <div>
                  <h4>LIBRARY</h4>
                  <p>
                    <h5>State-of-the-art library facilities with a vast collection of books, journals, and digital resources.</h5>
                    <h5>Comfortable reading spaces and study areas for individual and group study.</h5>
                    <h5>Access to online databases, e-books, and academic journals.</h5>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="carousel-image">
                <img src="/images/lab.jpg" className="d-block w-100" alt="LABORATORIES" />
                <div >
                  <h4>LABORATORIES</h4>
                  <p>
                    <h5>Specialized laboratories for different disciplines (e.g., physics, chemistry, biology, computer science).</h5>
                    <h5>Advanced equipment and technology to facilitate hands-on learning and research.</h5>
                    <h5>Adequate safety measures and protocols in place.</h5>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/playground.jpg" className="d-block w-100" alt="PLAYGROUND" />
                <div >
                  <h4>PLAYGROUND</h4>
                  <p>
                    <h5>Beautifully landscaped green spaces for relaxation and outdoor activities.</h5>
                    <h5>Playground facilities for sports and recreational activities.</h5>
                    <h5>Organized sports events and facilities for various sports.</h5>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/class.jpg" className="d-block w-100" alt="PLAYGROUND" />
                <div>
                  <h4>Technologically Advanced Classrooms</h4>
                  <div>
                    <h5>Smart classrooms equipped with audio-visual aids, projectors, and interactive whiteboards.</h5>
                    <h5>Integration of technology to enhance the teaching and learning process.</h5>
                    <h5>High-speed internet connectivity for research and online collaboration.</h5>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="service-item">
          <h2>college Festivals</h2>
          <Carousel>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/fest2.webp" className="d-block w-100" alt="Festival 1" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/fest1.webp" className="d-block w-100" alt="Festival 2" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/fest3.webp" className="d-block w-100" alt="Festival 3" />
              </div>
            </Carousel.Item>
          </Carousel>
          <div>
            <h4>Festival </h4>
            <p>
              <h5>Exciting performances, cultural events, and workshops.</h5>
              <h5>Engagement with renowned artists and speakers.</h5>
            </p>
          </div>
        </div>


        <div className="service-item">
          <h2>Sports Facilities</h2>
          <Carousel>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/sp1.webp" className="d-block w-100" alt="Sports 1" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/sp2.webp" className="d-block w-100" alt="Sports 2" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image">
                <img src="/images/sp3.webp" className="d-block w-100" alt="Sports 3" />
              </div>
            </Carousel.Item>
        
          </Carousel>
          <div>
            <h4>Sports </h4>
            <p>
              <h5>State-of-the-art sports facilities for various disciplines.</h5>
              <h5>Regular sports events and competitions to foster a competitive spirit.</h5>
            </p>
          </div>


        </div>

        <div className="placement">
          <h2>PLACEMENT AND TRAINING DEPARTMENT</h2>
          <p>The Department of Training and placement works with a firm motto to nurture and refine the technical and aptitude skills of students and make them placement ready for the corporate world. The students are provided with ample opportunities to work with the reputed companies through on-campus and pool campus recruitment drives across for various branches. Placement opportunities start pouring in from the third year of engineering studies and job opportunities are made available even after their graduation.Placement is an integral part of our institution and is constantly striving to place students in their exact altitudinal areas.We have signed MOUs with various leading Industries to provide refined engineering talent.

            In the initial two years, we work upon to improve employability, value addition skills, internships, and placements through our exhaustive training calendar. The Department works in close coordination with the industry to counsel and train the students for their successful career placement, either as corporate professionals, entrepreneurs, or pursuing further education in the country or even overseas. The Training and Placement arrange various technical and soft skills programs that augments the skills and increase the confidence of the students when facing the various tests and interviews conducted by the corporate to meet the employer’s expectations. Industry experts are invited to interact with the students facilitating career counseling and planning, in multiple aspects. Seminars on career guidance, Entrepreneurial thinking, Next Generation Job Skills, overseas education symposiums, and many more are conducted to guide the students in various spheres of their career.</p>
          <img src="/images/PLACEMENT2.jpg" className="placement" alt="" />
          <h2>Our Esteemed recruiters</h2>
          <img src="/images/placement.jpg" className="placement" alt="" />

        </div>


      </section>
    </div>
  );
};

export default ServicesPage;
