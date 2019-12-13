import React from 'react';

function HeroCell({ name, img }) {
    return (
        <section>
            <h1>{name}</h1>
            <img src={img} alt={name} />
        </section>
    );
}

export default HeroCell;