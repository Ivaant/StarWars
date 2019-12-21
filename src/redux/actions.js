import { CLICK_MENU_BUTTON } from './constants';
import { CLICK_POSTER } from './constants';


export const setMainMenuButton = name => ({
    type: CLICK_MENU_BUTTON,
    payload: name
})

export const setHeroIndex = heroIndex => ({
    type: CLICK_POSTER,
    payload: heroIndex
})

