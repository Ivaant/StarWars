import React from 'react';
import './FilmCell.css';

function FilmCell({ films }) {
    
    const filmName = films[0].filmName;
    const filmPoster = films[0].filmPoster;

    return (
        
        <section className="hero-film">
            <h1>{filmName}</h1>
            <img src={filmPoster} alt={filmName} />
        </section>
        

    );
}

export default FilmCell;