import React, { useState } from 'react';
import HeroCell from '../components/HeroCell';
import BioCell from '../components/BioCell';
import FilmCell from '../components/FilmCell';
import '../css/HeroPage.css';
import people from '../resources/people';

function HeroPage(props) {

    const initialFilms = people.map(hero => {
        return hero.films[0];
    });

    const [posterClickedIndex, setFilmCellMode] = useState(null);

    const [filmsToRender, setFilmsToRender] = useState(initialFilms);

    function handleFilmPosterClick(heroIndex) {
        console.log(heroIndex);
        setFilmCellMode(heroIndex);
        //console.log(PosterClickedIndex);
    }


    //replace one element in the state filmsToRender with clicked hero and film
    function handleFilmClick(heroIndex, filmIndex) {
        //console.log({ heroIndex, filmIndex });
        setFilmsToRender(prevValue => {
            return prevValue.map((heroFilm, i) => {
                if (i === heroIndex) {
                    return people[heroIndex].films[filmIndex];
                }
                else return heroFilm;
            });
        });
        setFilmCellMode(null);
    }

    const mapper = (person, index) => {
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
                    onLinkClick={handleFilmClick}
                />
                <FilmCell
                    id={index}
                    films={person.films}
                    film={filmsToRender[index]}
                    onPosterClick={handleFilmPosterClick}
                    posterClickedIndex={posterClickedIndex}
                    onLinkClick={handleFilmClick}
                />
            </tr>
        );
    }

    return (
        <table className="table">
            {people.map(mapper)}
        </table>
    );
}

export default HeroPage;