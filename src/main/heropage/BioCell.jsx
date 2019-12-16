import React, { useState } from 'react';
import '../../css/HeroPage.css';

function BioCell({ id, content, menuButtonClicked, films, onLinkClick }) {

    const fullBioText = content;
    const trancatedBioText = content.substring(0, 80);

    const [isCollapsed, setCollapse] = useState(true);

    function handleClick() {
        setCollapse(!isCollapsed);
    }

    if (menuButtonClicked === "films") {
        return (
            <td>
                <p id={id}>{films.map((film, index) => {
                    return <button
                        className="film-button"
                        key={index}
                        onClick={( (e) => onLinkClick(+e.target.parentNode.id, index))}
                    >{film.filmName}</button>
                })}
                </p>
            </td >
        );
    }
    else return (
        <td>
            <p id={id}>{isCollapsed ? trancatedBioText : fullBioText}</p>
            <button
                onClick={handleClick}>
                {isCollapsed ? "Read more..." : "Collapse"}
            </button>
        </td>
    );
}

export default BioCell;