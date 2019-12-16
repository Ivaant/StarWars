import React, {useState} from 'react';
import HeroCell from '../components/HeroCell';
import BioCell from '../components/BioCell';
import FilmCell from '../components/FilmCell';
import '../css/HeroPage.css';
import people from '../resources/people';

function HeroPage(props) {

    const initialFilms  = people.map(hero => {
        return hero.films[0];
    });

    const [filmsToRender, setFilmsToRender] = useState(initialFilms);


    //replace one element in the state filmsToRender with clicked hero and film
    function handleFilmClick(heroIndex, filmIndex) {
        console.log({heroIndex, filmIndex});
        setFilmsToRender(prevValue => {
            return prevValue.map((heroFilm, i) => {
                if (i === heroIndex) {
                    return props.heroes[heroIndex].films[filmIndex];
                }
                else return heroFilm;
            });
        });
        console.log(filmsToRender);
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
                    menuButtonClicked={props.menuButtonClicked}
                    onLinkClick={handleFilmClick}
                />
                <FilmCell
                    film={filmsToRender[index]}
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