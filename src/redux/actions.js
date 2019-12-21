import { CLICK_MENU_BUTTON } from './constants';
import { CLICK_POSTER } from './constants';
import { CLICK_FILM_ITEM } from './constants';

export const setMainMenuButton = name => ({
    type: CLICK_MENU_BUTTON,
    payload: name
})

export const setHeroIndex = heroIndex => ({
    type: CLICK_POSTER,
    payload: heroIndex
})


export const setFilmsToRender = filmsToRender => ({
    type: CLICK_FILM_ITEM,
    payload: filmsToRender
})