import React from 'react';
import HeroPage from './heropage/HeroPage';
import '../css/Main.css';
import people from '../resources/people';

function Main({ isFilmsClicked }) {
    return (
        <main>
            <HeroPage heroes={people} isFilmsClicked={isFilmsClicked} />
        </main>
    );
}

export default Main;