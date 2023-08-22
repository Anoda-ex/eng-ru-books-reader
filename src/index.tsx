import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { createReduxStore } from './store/store';
import { Provider, useDispatch } from 'react-redux';
import { initFirebaseConfig } from './configs/FirebaseConfig';
initFirebaseConfig()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = createReduxStore();
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

