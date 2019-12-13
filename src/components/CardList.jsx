import React from 'react';
import Card from './Card';
import people from '../resources/people';
import './CardList.css';



function CardList({ isFilmsClicked }) {

    const mapper = (person, index) => {
        return (
            <Card key={index} content={person} isFilmsClicked={isFilmsClicked} />
        );
    }
    
    return (
        <div className="table">
        {people.map(mapper)}
        </div>
    );
}

export default CardList;