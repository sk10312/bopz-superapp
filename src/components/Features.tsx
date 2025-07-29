import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Organize your work with powerful task management tools',
      icon: '📋',
    },
    {
      title: 'Communication Hub',
      description: 'Stay connected with integrated chat and video calls',
      icon: '💬',
    },
    {
      title: 'File Storage',
      description: 'Store and share files securely in the cloud',
      icon: '☁️',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track your productivity with detailed analytics',
      icon: '📊',
    },
    {
      title: 'Team Collaboration',
      description: 'Work together seamlessly with your team',
      icon: '👥',
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with your favorite tools and services',
      icon: '🔗',
    },
  ];

  return (
    <div className="features">
      <div className="container">
        <header className="features-header">
          <h1>Powerful Features</h1>
          <p>Discover all the amazing tools that make Bopz SuperApp your go-to platform</p>
        </header>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon-large">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;