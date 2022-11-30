import React from "react";
import './about.css'

const About = () => {
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
        <div id="about">
            <div className="container reveal about-me">
                    <h2>About me</h2>
                <div className="about-container">
                    <ul>
                        <li> Full-Stack / Frontend Web Developer, passionate about solving challenges, with experience in writing single-page-applications using the latest WEB technologies such as Node.js, Vue.js, Vuex, React, Redux, React native and MongoDb. </li>
                        <li>A Team player & hard worker</li>
                        <li>Self-learner responsible</li>
                        <li>Passionate about technology & Adapt quickly to new environments.</li>
                        <li>Graduate of Haifa University – M.A with Honor in international relations.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About