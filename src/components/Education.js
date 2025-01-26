import React from 'react';
import './Education.css';
import gsuLogo from '../assets/gsu-logo.png';
import hufsLogo from '../assets/hufs-logo.png';

function Education() {
  const education = {
    law: {
      school: "Georgia State University College of Law",
      location: "Atlanta, GA",
      degree: "Juris Doctor",
      period: "May 2019",
      logo: gsuLogo,
      achievements: [
        "Graduate research assistant position with a full tuition award and stipend",
        "Assisted Professor Michael Landau researching on entertainment and IP law issues",
        "Achieved the ALERT Program credential for advanced legal research and technology skills",
        "Earned Certificate in Intellectual Property Law"
      ]
    },
    undergrad: {
      school: "Hankuk University of Foreign Studies",
      location: "Seoul, South Korea",
      degree: "B.A. English Interpretation and Translation",
      minor: "Economics",
      period: "Aug. 2015",
      logo: hufsLogo
    }
  };

  const certificates = [
    "CIPP/US certification (Certified Information Privacy Professional, U.S., July 2024)",
    "LexisNexis Professional Research Certification"
  ];

  const interests = [
    "Crypto research and investment: focusing on gaming, DeFi, and AI",
    "Playing video games: currently playing Ghost of Tsushima on PlayStation 5",
    "Achieved a Kung Fu black belt"
  ];

  const volunteer = [
    {
      organization: "Asian American Bar Association of New York",
      role: "Pro bono legal clinic",
      period: "Sept. 2019 – Dec. 2020"
    },
    {
      organization: "Women in Film, Television Atlanta",
      role: "Volunteer",
      period: "Oct. 2018 – Aug. 2019"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h3>Education</h3>
      <div className="education-grid">
        <div className="education-card">
          <div className="education-header">
            <div className="school-info">
              <img src={education.law.logo} alt="GSU Law Logo" className="school-logo" />
              <div>
                <h4>{education.law.school}</h4>
                <span className="period">{education.law.period}</span>
              </div>
            </div>
          </div>
          <p className="location">{education.law.location}</p>
          <p className="degree">{education.law.degree}</p>
          <ul className="achievements">
            {education.law.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="education-card">
          <div className="education-header">
            <div className="school-info">
              <img src={education.undergrad.logo} alt="HUFS Logo" className="school-logo" />
              <div>
                <h4>{education.undergrad.school}</h4>
                <span className="period">{education.undergrad.period}</span>
              </div>
            </div>
          </div>
          <p className="location">{education.undergrad.location}</p>
          <p className="degree">{education.undergrad.degree}</p>
          <p className="minor">Minor: {education.undergrad.minor}</p>
        </div>
      </div>

      <div className="additional-info">
        <div className="certificates">
          <h4>Certificates & Professional Development</h4>
          <ul>
            {certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        <div className="interests">
          <h4>Interests & Activities</h4>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>

        <div className="volunteer">
          <h4>Volunteer Experience</h4>
          {volunteer.map((exp, index) => (
            <div key={index} className="volunteer-item">
              <h5>{exp.organization}</h5>
              <p>{exp.role}</p>
              <span className="period">{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education; 