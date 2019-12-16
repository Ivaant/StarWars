import React, { useState } from 'react';
import Header from './common/Header';
import HeroPage from './heropage/containers/HeroPage';
import Navigation from './common/Navigation';
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
            <HeroPage menuButtonClicked={menuButtonClicked} />
            <Footer />
        </div>
    );
}

export default App;