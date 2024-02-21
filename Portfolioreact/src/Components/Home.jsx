import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('.typing', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="home min-h-screen flex items-center justify-center bg-gray-100 text-white"
    >
      <div className="max-width">
        <div className="home-content text-center">
          <div className="text-3xl text-gray-400">Hello, I am Prachi Banayat</div>
          <div className="text-3 text-3xl text-gray-400">
            And I'm a <span className="typing text-[rgb(175,122,197)] text-6xl"></span>
          </div>
          <a
            href="https://www.linkedin.com/in/prachi-banayat-56b0b926a/"
            className="hire-button bg-[rgb(138,75,175)] text-white px-6 py-3 ml-4 rounded-full mt-16 mb-6 inline-block text-xl transition-all duration-300 hover:bg-[rgb(203,59,216)] hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
