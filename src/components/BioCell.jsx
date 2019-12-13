import React, { useState } from 'react';
import './BioCell.css';

function BioCell({ content, isFilmsClicked }) {

    console.log("BioCell" + isFilmsClicked);

    const fullBioText = content;
    const trancatedBioText = content.substring(0, 80);

    const [isCollapsed, setCollapse] = useState(true);
    //const [isFilmsBtnClicked, setContent] = useState(isFilmsClicked);

    function handleClick() {
        setCollapse(!isCollapsed);
    }

    return (
        <section>
            <p>{isCollapsed ? trancatedBioText : fullBioText}</p>
            <button
                onClick={handleClick}>
                {isCollapsed ? "Read more..." : "Collapse"}
            </button>
        </section>
    );
}

export default BioCell;