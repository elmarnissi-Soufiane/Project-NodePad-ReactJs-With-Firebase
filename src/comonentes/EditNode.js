import React from 'react';

import Form from './widgets/form.js';

import Navbar from './includes/navbar.js';

import './includes/navbar.css';

const EditNode = (props) => {
    // {props.match.params.id} : recupere le id . 
    return (
        <div>
            <Navbar />
            <h1 className="add">EditNode</h1>
            <Form  type="edit" id={props.match.params.id}/>
        </div>
    )
}

export default EditNode;