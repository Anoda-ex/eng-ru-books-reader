import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { createReduxStore } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = createReduxStore();
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

