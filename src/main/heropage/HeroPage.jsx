import React from 'react';
import HeroCell from './HeroCell';
import BioCell from './BioCell';
import FilmCell from './FilmCell';
import '../../css/HeroPage.css';

function HeroPage(props) {

    const mapper = (person, index) => {
        return (
            <tr key={index} className="hero-item">
                <HeroCell
                    name={person.name}
                    img={person.pic}
                />
                <BioCell
                    content={person.bio}
                    films={person.films}
                    menuButtonClicked={props.menuButtonClicked}
                />
                <FilmCell
                    film={person.films[0]}
                />
            </tr>
        );
    }
    return (
        <table className="table">
            {props.heroes.map(mapper)}
        </table>
    );
}

export default HeroPage;