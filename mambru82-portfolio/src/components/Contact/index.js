import React from 'react'
import portrait from '../../assets/images/CASTRO-ECHEVERRY.JPG'

function Contact() {
    return (
        <section id="contact-info" class="content">
        <div class= "section-wrapper">
          <div class= "section-title">
            <h2>Contact Me</h2>
          </div>
          <div class= "section-content">
            <img src={portrait} alt="formal portrait of balding silly person"/>    
            <ul>
               <li>
                 <a href="tel:555.55.55">555.55.55</a>
               </li>
               <li>
                 <a href="mailto:ecastro82@gmail.com">ecastro82@gmail.com</a>
               </li>
               <li>
                 <a href="https://github.com/mambru82/mambru82.github.io">GitHub</a>
                </li>
              </ul>
          </div>
        </div>
      </section>
    )
}

export default Contact