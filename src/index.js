import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './assets/css/style.css'



import {BrowserRouter,Route} from 'react-router-dom'
import store from './store/store';
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

