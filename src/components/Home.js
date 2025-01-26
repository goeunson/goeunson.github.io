import React from 'react';
import './Home.css';
import profilePhoto from '../assets/profile.png';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

function Home() {
  const skills = {
    legal: [
      "Privacy Law",
      "IP Law",
      "Tech Law",
      "Compliance",
      "Contract Negotiation",
      "Regulatory Affairs"
    ],
    software: [
      "Jira",
      "Confluence",
      "Docusign",
      "Google Workspace",
      "Salesforce",
      "Intercom"
    ],
    languages: [
      "Korean (Native)",
      "English (Fluent)",
      "French (Conversational)"
    ]
  };

  const titles = [
    "a Product Counsel & Privacy Professional",
    "a Legal Tech Innovator",
    "a Crypto Research Enthusiast",
    "a Gaming Aficionado",
  ];

  return (
    <div className="home">
      <section id="home" className="hero-section">
        <div className="hero">
          <div className="profile-photo">
            <img src={profilePhoto} alt="Goeun Son" />
          </div>
          <h1>Hi, I'm Goeun Son</h1>
          <h2>
             <span className="rotating-text">
              {titles.map((title, index) => (
                <span key={index} className="rotating-text-item">
                  {title}
                </span>
              ))}
            </span>
          </h2>
          <p>Specializing in technology law, privacy compliance, and commercial transactions.</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">Get in Touch</a>
            <a href="#experience" className="cta-secondary">View Experience</a>
          </div>
        </div>
      </section>

      <Experience />
      <Education />

      <div className="skills">
        <h3>Areas of Expertise</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Legal</h4>
            <div className="skill-tags">
              {skills.legal.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Software</h4>
            <div className="skill-tags">
              {skills.software.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Languages</h4>
            <div className="skill-tags">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Home;