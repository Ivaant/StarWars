import React from 'react';
import '../css/Navigation.css';

function Navigation(props) {
    return (
        <nav>
            <ul>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="news" >NEWS + BLOG</button></li>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="video" >VIDEO</button></li>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="films" >FILMS</button></li>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="series" >SERIES</button></li>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="interactive" >INTERACTIVE</button></li>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="community" >COMMUNITY</button></li>
                <li><button onClick={(e) => props.onMenuClick(e.target.name)} name="databank" >DATABANK</button></li>
            </ul>
        </nav>);
}

export default Navigation;