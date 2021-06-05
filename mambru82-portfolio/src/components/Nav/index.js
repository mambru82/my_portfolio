import React from 'react';
import personalPhoto from '../../assets/images/CASTRO-ECHEVERRY.JPG'


function Nav() {
    const categories = [
        {
            name: "about",
            description: "a short description of me"
        },
        { name: "work", description: "works in progress"},
        { name: "contact", description: "contact info"}
    ]

    function categorySelected() {

    }

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
        {categories.map((category) => (
        <li className="mx-1" key={category.name} onClick={categorySelected}>
          
            {category.name}
          
        </li> ))}
       </ul>
      </nav>
        </header>
    )
}

export default Nav;