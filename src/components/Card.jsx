import React from 'react';
import './Card.css';

function Card({ content }) {
    return (
        <article className="hero-item">
            <section>
                <h1>{content.name}</h1>
                <img src={content.pic} alt={content.name} />
            </section>
            <section>
                <p>{content.bio}</p>
            </section>
            <section className="hero-film">
                <h1>{content.filmName}</h1>
                <img src={content.filmPoster} alt={content.filmName} />
            </section>
        </article>
    );
}

export default Card;