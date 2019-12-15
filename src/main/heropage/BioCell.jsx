import React, { useState } from 'react';
import '../../css/HeroPage.css';

function BioCell({ content, menuButtonClicked, films }) {

    const fullBioText = content;
    const trancatedBioText = content.substring(0, 80);

    const [isCollapsed, setCollapse] = useState(true);

    function handleClick() {
        setCollapse(!isCollapsed);
    }

    if (menuButtonClicked === "films") {
        return (
            <td>
                <p>{films.map(film => {
                    return <ul>
                        <li>{film.filmName}</li>
                    </ul>
                })}
                </p>
            </td>
        );
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