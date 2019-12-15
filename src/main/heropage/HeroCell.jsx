import React from 'react';

function HeroCell({ name, img }) {
    return (
        <td>
            <h1>{name}</h1>
            <img src={img} alt={name} />
        </td>
    );
}

export default HeroCell;