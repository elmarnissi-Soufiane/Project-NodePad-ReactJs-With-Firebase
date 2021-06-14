import React from 'react';

import Form from './widgets/form.js';

import Navbar from './includes/navbar.js';

import './includes/navbar.css';

const AddNode = () => {
    return (
        <div>
            <Navbar />
            <h1 className="add">AddNode</h1>
            <Form  type="add"/>
        </div>
    )
}

export default AddNode;