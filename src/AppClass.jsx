import React, { Component } from 'react';
import Header from './common/Header';
import HeroPageClass from './heropage/containers/HeroPageClass';
import FilmsPage from './filmspage/FilmsPage';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import { connect } from 'react-redux';
import { setMainMenuButton } from './redux/actions';

const mapStateToProps = state => ({
    menuButtonClicked: state.menuButtonClicked
})

const mapDispatchToProps = dispatch => {
    return {
        menuClickHandler: (e) => dispatch(setMainMenuButton(e.target.name))
    }
}

class AppClass extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     menuButtonClicked: "heroes"
    }
    // this.menuClickHandler = this.menuClickHandler.bind(this);



    // menuClickHandler(menuButtonName) {
    //     this.setState({ menuButtonClicked: menuButtonName });
    //     console.log(this.state.menuButtonClicked);
    // }

    render() {
        return (
            <div>
                <Header />
                <Navigation onMenuClick={this.props.menuClickHandler} />
                {this.props.menuButtonClicked === 'films' ?
                    <FilmsPage />
                    :
                    <HeroPageClass />
                }
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
