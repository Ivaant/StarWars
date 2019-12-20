import React, { Component } from 'react';
import FilmCell from '../components/FilmCell';
import people from '../../resources/people';

const initialFilms = [];

class FilmCellClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posterClickedIndex: null,
            filmsToRender: initialFilms
        }
        this.handleFilmPosterClick = this.handleFilmPosterClick.bind(this);
        this.handleFilmClick = this.handleFilmClick.bind(this);
    }

    componentWillMount() {
        const newFilms = people.map(hero => {
            return hero.films[0];
        });
        this.setState({filmsToRender: newFilms});
    }

    handleFilmPosterClick(heroIndex) {
        this.setState({ posterClickedIndex: heroIndex });
    }

    //replace one element in the state filmsToRender with clicked hero and film
    handleFilmClick(heroIndex, filmIndex) {
        this.setState(prevValue => {
            const newFilms = prevValue.filmsToRender.map((heroFilm, i) => {
                if (i === heroIndex) {
                    return people[heroIndex].films[filmIndex];
                }
                else return heroFilm;
            });
            return {
                posterClickedIndex: null,
                filmsToRender: newFilms
            }
        });
    }

    render() {
       return (<FilmCell
            id={this.props.id}
            films={people[this.props.id].films}
            film={this.state.filmsToRender[this.props.id]}
            onPosterClick={this.handleFilmPosterClick}
            posterClickedIndex={this.state.posterClickedIndex}
            onLinkClick={this.handleFilmClick}
        />
       )
    }
}

export default FilmCellClass;
