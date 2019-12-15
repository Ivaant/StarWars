import React from 'react';
import '../../css/HeroPage.css';

function FilmCell({ film }) {
    
    const filmName = film.filmName;
    const filmPoster = film.filmPoster;

    return (
        
        <td className="hero-film">
            <h1>{filmName}</h1>
            <img src={filmPoster} alt={filmName} />
        </td>
        

    );
}

export default FilmCell;