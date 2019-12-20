import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainMenuSwitcher } from './redux/reducers';
import AppClass from './AppClass';

const store = createStore(mainMenuSwitcher);


ReactDOM.render(<Provider store={store}><AppClass /></Provider>,
    document.getElementById('root'));