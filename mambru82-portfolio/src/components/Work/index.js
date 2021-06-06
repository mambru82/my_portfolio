import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/simple-jack.png"

function Work(props) {
    const currentProject = {
        name: "simplejack",
        description: "A fun, comic-book themed blackjack game!"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
            <p>{currentProject.name}</p>
            <div>
                <img 
                    src={photo}
                    alt="SimpleJack screenshot"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
}

export default Work