import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Carrousel from './Carrousel';
import Tags from './Tags';
import Collapse from './Collapse';
import Ratings from './Ratings';
import ErrorPage from './ErrorPage';

const LogementSheet = () => {
    // Pour obtenir l'ID du logement à partir de l'URL
    const {id} = useParams();

    // Recherche du logement par son id
    const logement = logements.find((logement) => logement.id === id);

    // Condition si le logement n'existe pas pour rediriger vers la page d'erreur 404
    if (!logement)
        return <ErrorPage/>;

    // Variable contenant les valeurs description et equipments
    const notices = [
        {title: 'Description', content: logement.description},
        {title: 'Équipements', content: logement.equipments.join(',')}
    ];

    return (
        <div className='container'>            
            <Carrousel pictures={logement.pictures}/>
            
            <div className="descriptionCard">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>

            <Tags logementId={id}/>
            
            <div className='container_Ratings_Host'>
                <Ratings logementId={id}/>
                <div className="hostInfo">
                    <h3>{logement.host.name}</h3>
                    <img src={logement.host.picture} alt={logement.host.name} className='hostImage' />
                </div>
            </div>

            <Collapse notices={notices}/>


        </div>
    


    );
};

export default LogementSheet;