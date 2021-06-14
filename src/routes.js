import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from './comonentes/Home.js';

import AddNode from './comonentes/AddNode.js';

import EditNode from './comonentes/EditNode.js';

import DeleteNode from './comonentes/DeleteNode.js';

const routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={AddNode} />
            <Route exact path='/edit/:id' component={EditNode} />
            <Route exact path='/delete/:id' component={DeleteNode} />
        </Switch>
    )
}

export default routes;
