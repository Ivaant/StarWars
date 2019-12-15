import React, { useState } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import Main from './main/Main';
import Footer from './common/Footer';



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