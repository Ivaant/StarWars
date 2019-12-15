import React from 'react';
import '../css/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            Copyright © {currentYear}
        </footer>
    );
}

export default Footer;