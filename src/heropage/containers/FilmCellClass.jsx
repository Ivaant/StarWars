import React, { Component } from 'react';
import FilmCell from '../components/FilmCell';
import people from '../../resources/people';

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

