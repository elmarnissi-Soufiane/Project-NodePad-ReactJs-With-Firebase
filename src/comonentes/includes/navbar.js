import React from 'react';

import {Link} from 'react-router-dom';

const navbar = () => {

    const showNavbar = () => {
        let temp = null
        temp = <div className="header">
            <div className="logo">
                <h3>Reacte Node App</h3>
            </div>
            
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/add">Ajouter</Link>
                <Link to="/edit">Modifier</Link>
                <Link to="/delete">Supprimer</Link>
            </nav>
        </div>
        return temp;
    }

    return (
        <div>
            {showNavbar()}
        </div>
    )
}

export default navbar;