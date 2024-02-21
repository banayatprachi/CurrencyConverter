import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './YourProjectStyles.css'; // Import your existing styles

const projectsData = [
  {
    title: 'E-commerce',
    image: 'ecom.png',
    link: 'simple calc/calces.html',
  },
  {
    title: 'Dice Game',
    image: 'dice.jpg',
    link: 'landingpage.html',
  },
  {
    title: 'To-Do List',
    image: 'todo.jpg',
    link: 'simple calc/todo list/todo.html',
  },
  {
    title: 'Qloron UI clone',
    image: 'qlo.png',
    link: 'simple calc/todo list/todo.html',
  },
  {
    title: 'Currency Converter',
    image: 'currency.png',
    link: 'simple calc/todo list/todo.html',
  },
];

const ProjectCard = ({ title, image, link }) => (
  <div className="card">
    <div className="box">
      <img src={image} alt={title} />
      <div className="text">{title}</div>
      <a href={link}>{title}</a>
    </div>
  </div>
);

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
