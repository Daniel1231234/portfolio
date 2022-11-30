import React from 'react'
import './header.css'
import CTA from './header-download.jsx'
import Typical from 'react-typical';


const Header = () => {
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
    <header>
        <div className=".container header__container">
          <Typical
              steps={[
                "Hi!",2500,
                "My name is" , 2500,
                ]}
              loop={Infinity}
              wrapper="h3"
            />
            <h1 className="text-myName">Daniel Shalem</h1>

            <Typical className="text-light"
              steps={[
                "Full Stack & Front End Web Developer",
                2500,]}
              loop={Infinity}
              wrapper="h3"
            />
        <p style={{ fontSize: '1.3rem' }} className='text-light'>
          <span>ReactJs |  </span>
          <span>VueJs | </span>
          <span>React Native | </span>
          <span>Nodejs</span>
        </p>  
            <CTA/>
            <div className="me">
          <p style={{fontSize:'1.3rem'}} className='text-light'>
            A Team player, hard worker, focusing on problem solving and detailed orientation, self-learner responsible, and adapt quickly to new environments.
                </p>
              
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header;