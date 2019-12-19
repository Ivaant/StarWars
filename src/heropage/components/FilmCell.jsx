import React from 'react';
import '../css/HeroPage.css';

function FilmCell({ id, films, film, onPosterClick, posterClickedIndex, onLinkClick }) {

    const filmName = film.filmName;
    const filmPoster = film.filmPoster;

    if (id === posterClickedIndex) {
        return (
            <td>
                <p id={id}>{films.map((film, index) => {
                    return <button
                        className="film-button"
                        key={index}
                        onClick={((e) => onLinkClick(+e.target.parentNode.id, index))}
                    >{film.filmName}</button>
                })}
                </p>
            </td >
        );
    } else return (
        <td className="hero-film">
            <h1>{filmName}</h1>
            <button onClick={((e) => onPosterClick(id))} >
                <img src={filmPoster} alt={filmName} />
            </button>

        </td>
    )


}

export default FilmCell;