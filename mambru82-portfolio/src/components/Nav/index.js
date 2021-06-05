import React from 'react';
import personalPhoto from '../../assets/images/CASTRO-ECHEVERRY.JPG'


function Nav() {

    return (
        <header>
            <img src={personalPhoto}></img>
            <h1>
        <a href="./index.html">Eduardo Castro</a>
      </h1>
      <nav>
       <ul>
   
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#work">Work / Active Projects</a>
        </li>
        <li>
          <a href="#contact-info">Contact Me</a>
         </li>
       </ul>
      </nav>
        </header>
    )
}

export default Nav;