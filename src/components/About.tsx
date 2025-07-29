import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <header className="about-header">
          <h1>About Bopz SuperApp</h1>
          <p className="lead">
            We're building the future of productivity and digital experiences.
          </p>
        </header>

        <section className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To create a unified platform that simplifies your digital life by bringing together
              all the tools you need in one seamless, intuitive experience. We believe that
              technology should work for you, not against you.
            </p>
          </div>

          <div className="about-section">
            <h2>Why SuperApp?</h2>
            <p>
              In today's fast-paced world, switching between multiple apps and platforms creates
              friction and reduces productivity. Bopz SuperApp eliminates this problem by
              providing a comprehensive suite of tools that work together harmoniously.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h4>Innovation</h4>
                <p>We constantly push boundaries to deliver cutting-edge solutions</p>
              </div>
              <div className="value-item">
                <h4>Simplicity</h4>
                <p>Complex problems deserve simple, elegant solutions</p>
              </div>
              <div className="value-item">
                <h4>Security</h4>
                <p>Your privacy and data security are our top priorities</p>
              </div>
              <div className="value-item">
                <h4>Community</h4>
                <p>We build products that bring people together</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;