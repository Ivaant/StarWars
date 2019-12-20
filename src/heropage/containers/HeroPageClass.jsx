import React, { Component } from 'react';
import HeroCell from '../components/HeroCell';
import BioCell from '../components/BioCell';
import FilmCellClass from './FilmCellClass';
import '../css/HeroPage.css';
import people from '../../resources/people';

// const initialFilms = people.map(hero => {
//     return hero.films[0];
// });

class HeroPageClass extends Component {
    
    mapper = (person, index) => {
        return (
            <tr key={index} className="hero-item">
                <HeroCell
                    id={index}
                    name={person.name}
                    img={person.pic}
                />
                <BioCell
                    id={index}
                    content={person.bio}
                />
                <FilmCellClass
                    id={index}
                />
            </tr>
        );
    }

    render() {
        return (
            <table className="table">
                {people.map(this.mapper)}
            </table>
        );
    }
}

export default HeroPageClass;