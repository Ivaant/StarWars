import React from 'react';
import HeroCell from './HeroCell';
import BioCell from './BioCell';
import FilmCell from './FilmCell';
import './Card.css';

function Card({ key, content, isFilmsClicked }) {


    console.dir('Card' + isFilmsClicked);

    return (
        <article className="hero-item">
            <HeroCell
                name={content.name}
                img={content.pic}
            />
            <BioCell
                content={content.bio}
                isFilmsClicked={isFilmsClicked}
            />
            <FilmCell
                films={content.films}
            />
        </article>
    );
}

export default Card;