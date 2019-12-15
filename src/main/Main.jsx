import React from 'react';
import HeroPage from './heropage/HeroPage';
import '../css/Main.css';
import people from '../resources/people';

function Main(props) {
    return (
        <main>
            <HeroPage
                heroes={people}
                menuButtonClicked={props.menuButtonClicked}
            />
        </main>
    );
}

export default Main;