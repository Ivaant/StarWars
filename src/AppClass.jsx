import React, { Component } from 'react';
import Header from './common/Header';
import Scroll from './common/Scroll';
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

    render() {
        return (
            <div>
                <Header />
                <Navigation onMenuClick={this.props.menuClickHandler} />
                <Scroll>
                    {this.props.menuButtonClicked === 'films' ?
                        <FilmsPage />
                        :
                        <HeroPageClass />
                    }
                </Scroll>
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
