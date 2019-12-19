import React, { Component } from 'react';
import Header from './common/Header';
import HeroPageClass from './heropage/containers/HeroPageClass';
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
            <HeroPageClass menuButtonClicked={this.state.menuButtonClicked} />
            <Footer />
        </div>
        );
    }
}

export default AppClass;
