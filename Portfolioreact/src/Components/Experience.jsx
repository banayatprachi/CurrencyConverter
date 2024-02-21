import React from 'react';
import './Experience.css'; // Import your Experience Section styles

const Experience = () => {
  return (
    
    <div className="Experience">
        <section id="experience">
        <h2 className="title">Experience</h2>
      <div className="box-container">
        <div className="box">
          <div className="content">

            <span>Qloron Technologies</span>
            <h3>Software Developer Intern</h3>
            <p>Currently I am working at Qloron as a MERN stack developer Intern</p>
          </div>
        </div>
       
        <div className="box">
          <div className="content">
            <span>TXON</span>
            <h3>Web Developer Intern</h3>
            <p> I completed my 1 month web development internship at TXON.I learned many new things during the internship and worked on various technologies.</p>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <span>Radha Budhisiya Sanstha</span>
            <h3>NGO Internship</h3>
            <p> I worked as a volunteer at Radha sanstha which empowers and helps women and children.</p>
          </div>
        </div>
       
      </div>


        </section>
      
    </div>
  );
};

export default Experience;
