import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import arrowUp from "../../assets/images/chevron-up-solid.svg";

const Collapse = ({title, content, collapseGenericName}) => {
    // gestion de l'état d'ouverture et fermeture des sections
    const [openSections, setOpenSections] = useState ({});

    const toggleSection = () => {
        setOpenSections(prevState => ({
            ...prevState, // spread operator pour copier le state
            [title]: !prevState[title]
        }));
    };

    return (
        <div className={collapseGenericName}>            
                <div className="collapse_Section" key={title}>
                    <div className="collapse_Header" onClick={toggleSection}>
                        <h3>{title}</h3>
                        <img src={arrowUp} alt="arrow" className={`arrowUp ${openSections[title] ? "open rotate" :""}`} />
                    </div>    
                    {content && openSections[title] && <div className="collapse_Content">{content}</div>}
                </div>
        </div>
    );
};

Collapse.propTypes = {    
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired    
};

export default Collapse;
