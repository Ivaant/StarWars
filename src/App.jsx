import React, { useState } from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation';
import Main from './main/Main';
import Footer from './common/Footer';



function App() {

    const [menuButtonClicked, setMenuButtonClicked] = useState("");

    function menuClickHandler(menuButtonName) {
        setMenuButtonClicked(menuButtonName);
    }


    return (
        <div>
            <Header />
            <Navigation onMenuClick={menuClickHandler} />
            <Main menuButtonClicked={menuButtonClicked} />
            <Footer />
        </div>
    );
}

export default App;