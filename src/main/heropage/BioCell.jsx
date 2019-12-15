import React, { useState } from 'react';
import '../../css/HeroPage.css';

function BioCell({ content, isFilmsClicked }) {

    const fullBioText = content;
    const trancatedBioText = content.substring(0, 80);

    const [isCollapsed, setCollapse] = useState(true);

    function handleClick() {
        setCollapse(!isCollapsed);
    }

    return (
        <td>
            <p>{isCollapsed ? trancatedBioText : fullBioText}</p>
            <button
                onClick={handleClick}>
                {isCollapsed ? "Read more..." : "Collapse"}
            </button>
        </td>
    );
}

export default BioCell;