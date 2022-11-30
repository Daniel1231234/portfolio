import React from 'react'
import './projects.css'
import IMG1 from '../../assets/Tavenli.png'
import IMG2 from '../../assets/Bmyguest.png'

// import {motion} from 'framer-motion';

const data = [
  {
    id:1,
    image:IMG1,
    title: 'VeganizeIt',
    desc: 'A single-page, full stack web application (SPA) that allows you to scan barcodes search product\'s by name and quickly discover whether it\'s suitable for vegans or not',
    github:"https://github.com/Daniel1231234/veganizeIt",
    demo:"https://veganizeit.onrender.com/home"
  },
  {
    id:2,
    image:IMG2,
    title: 'BmyGuest',
    desc: 'A single-page, full stack web application (SPA) inspired by Airbnb where users can view, book, and search for listings by location.' ,
    github:"https://github.com/Daniel1231234/Bmyguest",
    demo:"https://moviedaniel.netlify.app/"
  }
  
]
const Projects = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  // const transition = {duration: 2 , type: 'spring'}
    return (
      <section id="projects">
      <section className="reveal">
        <h2> My Recent Work </h2>
        </section>
        <div className="container projects__container reveal">
          {
            data.map(({id, image, title, github, demo, desc}) => {
              return(
                <article key={id} className="projects__item reveal">
              <div className="projects__item-image">
                <img 
                  // initial={{left: '-36%'}}
                  // whileInView={{left: '-24%'}}
                  // transition={transition}
                src={image} alt={title}/>
                  </div>
                  <div className='card-body'>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    
                  </div>
              <div className="projects__item-cta">
                <a href={github} className='btn' target="_blank" rel="noreferrer">Source code</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
            </article>
              )
            })
          }
        

          

        </div>
      </section>
    )
  }

export default Projects