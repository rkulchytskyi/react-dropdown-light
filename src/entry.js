import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store';
import Container from './container';

ReactDOM.render(
    <Provider store={ store }>
        <Container/>
    </Provider>,
document.getElementById('app')
);

module.hot.accept();