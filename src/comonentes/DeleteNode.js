import React from 'react';


import Navbar from './includes/navbar.js';

import './includes/navbar.css';

import {firebaseDB} from '../firebase.js';

const DeleteNode = (props) => {

    const removeNote = () => {
        firebaseDB.ref(`notes/${props.match.params.id}`)
            .remove()
            .then(() => {
                props.history.push('/');
            }).catch((e) => {
                alert(e)
            })
    }

    return (
        <div>
            <Navbar />
            <h1 className="add">DeleteNode</h1>
            {removeNote()}
        </div>
    )
}

export default DeleteNode;