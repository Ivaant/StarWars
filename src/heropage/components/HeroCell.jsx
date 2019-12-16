import React from 'react';

function HeroCell({ id, name, img }) {
    return (
        <td>
            <h1 id={id}>{name}</h1>
            <img src={img} alt={name} />
        </td>
    );
}

export default HeroCell;