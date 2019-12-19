import React, { Component } from 'react';
import HeroCell from '../components/HeroCell';
import BioCell from '../components/BioCell';
import FilmCell from '../components/FilmCell';
import '../css/HeroPage.css';
import people from '../resources/people';

const initialFilms = people.map(hero => {
    return hero.films[0];
});

class HeroPageClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posterClickedIndex: null,
            filmsToRender: initialFilms
        }

        this.handleFilmPosterClick = this.handleFilmPosterClick.bind(this);
        this.handleFilmClick = this.handleFilmClick.bind(this);
    }

    handleFilmPosterClick(heroIndex) {
        this.setState({ posterClickedIndex: heroIndex });
    }

    //replace one element in the state filmsToRender with clicked hero and film
    handleFilmClick(heroIndex, filmIndex) {
        this.setState(prevValue => {
            const newFilms = prevValue.filmsToRender.map((heroFilm, i) => {
                if (i === heroIndex) {
                    return people[heroIndex].films[filmIndex];
                }
                else return heroFilm;
            });
            return {
                posterClickedIndex: null,
                filmsToRender: newFilms
            }
        });
    }

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
                    films={person.films}
                />
                <FilmCell
                    id={index}
                    films={person.films}
                    film={this.state.filmsToRender[index]}
                    onPosterClick={this.handleFilmPosterClick}
                    posterClickedIndex={this.state.posterClickedIndex}
                    onLinkClick={this.handleFilmClick}
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