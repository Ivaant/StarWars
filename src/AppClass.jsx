import React, { Component } from 'react';
import Header from './common/Header';
import HeroPage from './heropage/containers/HeroPage';
import Navigation from './common/Navigation';
import Footer from './common/Footer';


class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuButtonClicked: ""
        }
        this.menuClickHandler  = this.menuClickHandler.bind(this);
    }

    menuClickHandler(menuButtonName) {
        this.setState({menuButtonClicked: menuButtonName});
        console.log(this.state.menuButtonClicked);
    }

    render() {
        return (
             <div>
            <Header />
            <Navigation onMenuClick={this.menuClickHandler} />
            <HeroPage menuButtonClicked={this.state.menuButtonClicked} />
            <Footer />
        </div>
        );
    }
}

export default AppClass;
