import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='errorPage'>

            <h1>404</h1>
            <p>Oups ! La page que <span className='returnLine'></span>vous demandez n'existe pas.</p>

            <div className="errorLink">
                <NavLink to="/">Retourner sur la page d'accueil</NavLink>
            </div>
        </div>        
        
    );
};


export default ErrorPage;