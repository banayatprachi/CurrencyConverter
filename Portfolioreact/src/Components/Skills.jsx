import React from 'react';
import { motion } from 'framer-motion';

const SkillItem = ({ category, skills }) => {
  return (
    <motion.div
      className="bg-[#F3E7F9] p-6 rounded-lg shadow-md mb-8"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-[#6A0572]">{category}</h3>
      <ul className="list-disc text-lg text-[#4A154B] pl-4">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const softSkills = ['Communication', 'Teamwork', 'Problem Solving'];
  const technicalLanguages = ['HTML', 'CSS', 'JavaScript'];
  const software = ['React.js', 'Node.js', 'VS Code'];

  return (
    <section className="bg-[#F8F0FD] py-16" id="skills">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#6A0572]">
          Skills<span className="block text-[#6A0572] text-lg">What I bring to the table</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillItem category="Soft Skills" skills={softSkills} />
          <SkillItem category="Technical Languages" skills={technicalLanguages} />
          <SkillItem category="Software" skills={software} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
