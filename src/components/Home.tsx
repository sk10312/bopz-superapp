import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Bopz SuperApp</h1>
          <p className="hero-subtitle">
            Your all-in-one platform for productivity, entertainment, and everything in between.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features-preview">
        <div className="container">
          <h2>What Makes Us Super?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Experience blazing fast performance with our optimized platform</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>All-in-One Tools</h3>
              <p>Everything you need in one place - no more switching between apps</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your data is protected with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;