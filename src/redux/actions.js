import { CLICK_MENU_BUTTON } from './constants';

export const setMainMenuButton = name => ({
    type: CLICK_MENU_BUTTON,
    payload: name
})