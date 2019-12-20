import React from 'react';
import '../css/Navigation.css';

function Navigation(props) {

    const butNames = ['heroes', 'video', 'films', 
    'series', 'interactive', 'community', 'databank'];

    const mapper = (name, index) => {
        return (
            <li key={index}><button
                onClick={props.onMenuClick}
                name={name}
            >{name.toUpperCase()}</button>
            </li>
        )
    }

    return (
        <nav>
            <ul>
                {butNames.map(mapper)}
            </ul>
        </nav>);
}

export default Navigation;