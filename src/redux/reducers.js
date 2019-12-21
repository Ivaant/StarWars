import { CLICK_MENU_BUTTON } from './constants';
import { CLICK_POSTER } from './constants';
import { CLICK_FILM_ITEM } from './constants';


const initialState = {
    menuButtonClicked: "heroes",
    posterClickedIndex: null,
    filmsToRender: []
};

export const mainMenuSwitcher = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_MENU_BUTTON:
            return {
                ...state,
                menuButtonClicked: action.payload
            }

        case CLICK_POSTER:
            return {
                ...state,
                posterClickedIndex: action.payload
            }

        case CLICK_FILM_ITEM:
            return {
                ...state,
                filmsToRender: action.payload
            }
        default:
            return state
    }
}