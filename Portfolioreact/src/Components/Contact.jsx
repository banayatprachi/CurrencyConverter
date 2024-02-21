import React from 'react';
import { FiUser, FiMapPin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="contact bg-gray-100" id="contact">
      <div className="max-w-screen-xl mx-auto p-4 sm:p-8 text-center">
        <h2 className="text-4xl  mb-6">
          <strong>Contact</strong>
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 text-left">
            <strong className="text-3xl text-black mb-4">Get in Touch</strong>
            <p className="text-lg text-gray-800">
              Adding value to you and your company would make me <br />happy.
              Regarding projects, internships, and full-time<br /> employment, kindly get in touch.
            </p>
            <div className="text-lg text-gray-800 mt-6">
              <div className="flex items-center mb-4">
                <FiUser className="mr-3 text-[rgb(138,75,175)]" size={22} />
                <strong>Name:</strong> Prachi Banayat
              </div>
              <div className="flex items-center mb-4">
                <FiMapPin className="mr-3 text-[rgb(138,75,175)]" size={22} />
                <strong>Address:</strong> Nagpur, Maharashtra
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-[rgb(138,75,175)]" size={22} />
                <strong>Email:</strong> banayatprachi@gmail.com
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-black text-left">Message Me</h3>
            <form
              action="https://formspree.io/f/mgegkjlv"
              method="POST"
              className="flex flex-col items-center sm:items-start"
            >
              <label htmlFor="name" className="text-lg text-gray-800 mb-2">Name:</label>
              <input type="text" name="name" id="name" className="bg-white border-2 border-gray-300 p-3 rounded-md mb-4 w-full" />

              <label htmlFor="email" className="text-lg text-gray-800 mb-2">Email:</label>
              <input type="text" name="email" id="email" className="bg-white border-2 border-gray-300 p-3 rounded-md mb-4 w-full" />

              <label htmlFor="message" className="text-lg text-gray-800 mb-2">Message:</label>
              <textarea name="message" id="message" className="bg-white border-2 border-gray-300 p-3 rounded-md mb-4 h-24
               w-full"></textarea>

              <button type="submit" className="bg-[rgb(138,75,175)] text-white py-3 px-8 rounded-md hover:bg-white hover:text-[rgb(138,75,175)]border border-[rgb(138,75,175)] transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white p-4 text-center">
      <span>
        Created By{' '}
        <a href="#" className="text hover:underline">
          Prachi Banayat
        </a>
      </span>
    </footer>
    </section>
    
  );
};

export default Contact;
