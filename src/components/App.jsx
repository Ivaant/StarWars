import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
import './App.css';



function App() {

    const [isFilmsClicked, setFilmsClicked] = useState(false);

function filmsClickHandler() {
    setFilmsClicked(!isFilmsClicked);
    console.log(isFilmsClicked);
}


    return (
        <div>
            <Header />
            <Navigation showFilmsList={filmsClickHandler}/>
            <Main isfilmsClicked={isFilmsClicked}/>
            <Footer />
        </div>
    );
}

export default App;