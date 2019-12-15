import React from 'react';
import '../css/Navigation.css';

function Navigation({ showFilmsList }) {
    return (
        <nav>
            <ul>
                <li><button name="news" >NEWS + BLOG</button></li>
                <li><button name="video" >VIDEO</button></li>
                <li><button name="films" onClick={showFilmsList}>FILMS</button></li>
                <li><button name="series" >SERIES</button></li>
                <li><button name="interactive" >INTERACTIVE</button></li>
                <li><button name="community" >COMMUNITY</button></li>
                <li><button name="databank" >DATABANK</button></li>
            </ul>
        </nav>);
}

export default Navigation;