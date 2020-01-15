import React from 'react';
import './styles/app.scss';

import { Provider } from 'react-redux'
import store from './redux/store';

import Character from './Character';

function App() {
	return (
        <Provider store={store}>
            <Character />
        </Provider>
    )
}

export default App;
