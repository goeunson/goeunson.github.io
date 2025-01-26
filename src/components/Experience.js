import React from 'react';
import './Experience.css';

import lawfullyLogo from '../assets/lawfully.png';
import abcLogo from '../assets/abc.png';
import glaLogo from '../assets/gla.png';
import appleLogo from '../assets/apple.png'; 
import androidLogo from '../assets/android.png';
function Experience() {
  const experiences = [
    {
      company: "Lawfully, Inc.",
      position: "Product Counsel",
      period: "April 2021 – Present",
      location: "New York, NY",
      logo: lawfullyLogo,
      link: "https://lawfully.com",
      appLinks: {
        ios: "https://apps.apple.com/us/app/my-uscis-case-status-tracker/id1435063223",
        android: "https://play.google.com/store/apps/details?id=com.lawfully.lawfully_ai_tracker"
      },
      description: [
        "Collaborate with product, engineering, and marketing teams to integrate regulatory compliance into product development",
        "Conduct risk assessments and develop compliance protocols focused on intellectual property, privacy, and competition law",
        "Monitor and track Apple and Android app policy changes to keep Lawfully's app aligned with platform requirements",
        "Lead participation in Utah Sandbox and Arizona ABS programs",
        "Oversee updates to privacy policies and terms of service"
      ],
      technologies: ["Privacy Law", "IP Law", "Regulatory Compliance", "Contract Negotiation"]
    },
    {
      company: "ABC News",
      position: "Legal Intern",
      period: "Sept 2019 – Apr 2020",
      location: "New York, NY",
      logo: abcLogo,
      link: "https://abcnews.go.com",
      description: [
        "Drafted and negotiated terms of licensing agreements with vendors",
        "Prepared compliance guidelines for licensing materials",
        "Analyzed license agreements to resolve legal disputes",
        "Updated Rights & Clearances files for ABC News programs"
      ],
      technologies: ["Licensing", "Compliance", "Rights Management"]
    },
    {
      company: "Georgia Lawyers For The Arts",
      position: "Legal Fellow",
      period: "Jan 2018 – Apr 2018; Aug 2019 - Sept 2019",
      location: "Atlanta, GA",
      logo: glaLogo,
      link: "https://glarts.org",
      description: [
        "Conducted intake interviews with artists and summarized cases",
        "Utilized Salesforce to manage client cases and attorney assignments",
        "Performed presentations on copyright issues for independent filmmakers"
      ],
      technologies: ["Copyright Law", "Salesforce", "Client Relations"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h3>Work Experience</h3>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <div className="company-info">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
                <div>
                  <h3>{exp.position}</h3>
                  <div className="company-title">
                    <h4>{exp.company}</h4>
                    <div className="company-links">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="website-link"
                      >
                        🔗 Website
                      </a>
                      {exp.appLinks && (
                        <>
                          <a 
                            href={exp.appLinks.ios} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="app-link"
                          >
                            <img src={appleLogo} alt="iOS" /> iOS
                          </a>
                          <a 
                            href={exp.appLinks.android} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="app-link"
                          >
                            <img src={androidLogo} alt="Android" /> Android
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="meta-info">
                    <span className="period">{exp.period}</span>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="responsibilities">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="experience-footer">
              <div className="tech-used">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
         
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;