import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
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
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="container skills__container reveal">

        <div className="skills__langs reveal">
          <h3> Programming Languages</h3>
          <div className="skills__content">
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>HTML5</h4>
                 
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS3</h4>
                 
              </div>
            </article>
          </div>
        </div>

        <div className="skills__database reveal">
          <h3> Databases</h3>
          <div className="skills__content">
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>MSSQL</h4>       
              </div>
            </article>
            <article className="skills__details ">
              <BsPatchCheckFill className="skills__details-icon  " />
              <div>
                <h4>FireBase</h4>       
              </div>
            </article>
          </div>
        </div>

        <div className="skills__framworks reveal">
          <h3> Frameworks</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>ReactJs</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React Native</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Vuejs</h4>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Nodejs</h4>
                 
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>SASS</h4>
                 
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Threejs</h4>
                 
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;