import React from 'react';
import './FilmsPage.css';
import people from '../resources/people';

function FilmsPage() {

    const mapper = (person) => {
        return (
            <tr>
                <td>
                    <h2>{person.name}</h2>
                </td>
                <td>
                    {person.films.map(film => {
                        return <p>{film.filmName}</p>
                    })}
                </td>
            </tr>
        );
    }

    return (
        <table className="table">
            {people.map(mapper)}
        </table>
    );
}

export default FilmsPage;