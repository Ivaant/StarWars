import React from 'react';
import Card from './Card';
import people from '../resources/people';

const mapper = person => {
    return (
        <Card content={person} />
    );
}

function CardList() {

    
    return (
        <div>
        {people.map(mapper)}
        </div>
    );
}

export default CardList;