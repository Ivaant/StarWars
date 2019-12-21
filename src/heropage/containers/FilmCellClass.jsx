import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilmCell from '../components/FilmCell';
import { setHeroIndex } from '../../redux/actions';
import { setFilmsToRender } from '../../redux/actions';
import people from '../../resources/people';

// const mapDispatchToProps = dispatch => {
//     return {
//         sendClickedHeroIndex: (heroIndex) => dispatch(setHeroIndex(heroIndex)),
//         sendFilmsToRender: (filmsToRender) => dispatch(setFilmsToRender(filmsToRender))
//     }
// }

// const mapStateToProps = state => ({
//     posterClickedIndex: state.posterClickedIndex,
//     filmsToRender: state.filmsToRender
// })

class FilmCellClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPosterClicked: false,
            filmClickedIndex: 0
        }
        this.handleFilmPosterClick = this.handleFilmPosterClick.bind(this);
        this.handleFilmClick = this.handleFilmClick.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.films = people[this.props.id].films;
    }

    handleFilmPosterClick(heroIndex) {
        this.setState({ isPosterClicked: true });
    }

    //replace one element in the state filmsToRender with clicked hero and film
    handleFilmClick(index) {
        this.setState({
            filmClickedIndex: index,
            isPosterClicked: false
        });
    }

    render() {
        return (<FilmCell
            id={this.props.id}
            films={this.films}
            film={this.films[this.state.filmClickedIndex]}
            onPosterClick={this.handleFilmPosterClick}
            isPosterClicked={this.state.isPosterClicked}
            onLinkClick={this.handleFilmClick}
        />
        )
    }
}
export default FilmCellClass;

//connect(mapStateToProps, mapDispatchToProps)(
