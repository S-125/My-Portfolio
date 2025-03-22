import React, { useEffect, useRef, useState } from 'react';
import './styles/Skills.css'; 

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 85 },
];

const SkillBar = ({ skill }) => {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      { threshold: 0.5 } 
    );

    if (barRef.current) {
      observer.observe(barRef.current); 
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current); 
      }
    };
  }, []);

  return (
    <div className="skill-bar" ref={barRef}>
      <div className="skill-name outlined-text">{skill.name}</div>
      <div className="bar-container">
        <div
          className={`skill-progress ${isVisible ? 'filled' : ''}`}
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
      <div className="skill-level">{skill.level}%</div>
    </div>
  );
};

// Skills component to render all skill bars
const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="outlined-text">My Skills</h2>
      {skillsData.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
