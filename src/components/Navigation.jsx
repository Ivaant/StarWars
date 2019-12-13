import React from 'react';
import './Navigation.css';

function Navigation({ showFilmsList }) {
    return (
        <nav>
            <ul>
                <li><button>NEWS + BLOG</button></li>
                <li><button>VIDEO</button></li>
                <li><button onClick={showFilmsList}>FILMS</button></li>
                <li><button>SERIES</button></li>
                <li><button>INTERACTIVE</button></li>
                <li><button>COMMUNITY</button></li>
                <li><button>DATABANK</button></li>
            </ul>
        </nav>);
}

export default Navigation;