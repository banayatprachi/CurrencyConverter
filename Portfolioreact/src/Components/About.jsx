import React, { useEffect } from 'react';
import Typed from 'typed.js';

const About = () => {

    useEffect(() => {
        const options = {
          strings: ['Full Stack Web Developer'],
          typeSpeed: 100,
          backSpeed: 20,
          loop: true,
        };
    
    
        const typed = new Typed('.typing-2', options);
    
        return () => {
          typed.destroy();
        };
      }, []);


  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="photuu.jpg" alt="Profile" />
          </div>
          <div className="column right">
            <div className="text ">
              I'm Prachi Banayat and I'm a <span className="typing-2"></span>
            </div>
            <p>
              I am a 3rd year student, currently pursuing B-tech in electronics
              and telecommunication at G H Raisoni College of Engineering
              Nagpur. I'm aiming to become a Full Stack Web Developer. I am also
              looking forward to learn Java for my upcoming projects. I am
              excited to acquire new skills and put them into practice. I am a
              detail-oriented person, and I believe in perfecting my skills.
            </p>
            <a href="RESUMMMME.pdf" download="Prachi_Banayat_Resume.pdf" rel="noopener noreferrer" target="_blank">
  Download CV
</a>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



