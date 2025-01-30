import React, { useEffect, useRef, useState } from 'react';
import './styles/Skills.css'; // Import the styles for the skill bars

// Skill data with skill name and level in percentage
const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 85 },
];

// SkillBar component to display each individual skill bar
const SkillBar = ({ skill }) => {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use IntersectionObserver to detect when the skill bar is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when skill bar is visible
        }
      },
      { threshold: 0.5 } // 50% of the skill bar must be visible to trigger animation
    );

    if (barRef.current) {
      observer.observe(barRef.current); // Start observing the skill bar
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current); // Stop observing on cleanup
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
