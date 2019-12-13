import React from 'react';
import CardList from './CardList';
import './Main.css';

function Main({ isFilmsClicked }) {
    return (
        <main>
            <CardList isFilmsClicked={isFilmsClicked} />
        </main>
    );
}

export default Main;