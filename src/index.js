import ReactDOM from 'react-dom';

//import React from 'react';
import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Routes from './routes.js'

const App = () => {

    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}



ReactDOM.render(<App/>, document.getElementById('root'));
