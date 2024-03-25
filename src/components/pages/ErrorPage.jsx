import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>

            <div className="errorLink">
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>        
        
    );
};


export default ErrorPage;