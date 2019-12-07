import React from 'react';
import './Header.css';

import logo from '../resources/sw_logo.png';

function Header() {
    return (<header>
        <form>
            <input type="search" name="q" placeholder="Search Star Wars" />
                <input type="submit" value="Go!" />
                    <div id="login-buttons">
                        <button name="logIn" type="button">Log In</button>
                        <button name="signUp" type="button">Sign Up</button>
                    </div>
        </form>
                <a href="#">
                    <img src={logo} alt="Star Wars" />
        </a>
    </header>);
}

export default Header;