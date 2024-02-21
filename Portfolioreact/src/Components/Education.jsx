import React from 'react';
import { FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const EducationItem = ({ title, degree, completionYear }) => {
  return (
    <motion.div
      className="education-item mb-8 p-6 rounded-lg bg-[rgb(163,109,199)] shadow-md flex items-center justify-between cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center">
        <FiBook className="text-[rgb(138,75,175)] text-4xl mr-4" />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg">Degree: {degree}</p>
          <p className="text-lg">Year of Completion: {completionYear}</p>
        </div>
      </div>
      <div className="text-[rgb(138,75,175)]">
        <span className="text-6xl">🎓</span>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div>
      <section id="education" className="text-black py-10 bg-[rgb(240, 239, 245)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">Education</h2>

          <EducationItem title="University" degree="Your Degree" completionYear="Year" />
          <EducationItem title="College Name" degree="Your Degree" completionYear="Year" />

          {/* Add more education items as needed */}
        </div>
      </section>
    </div>
  );
};

export default Education;
