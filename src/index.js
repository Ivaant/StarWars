import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Container with films


ReactDOM.render(<body>

    <header>
        <form>
            <input type="search" name="q" placeholder="Search Star Wars" />
                <input type="submit" value="Go!" />
                    <div id="login-buttons">
                        <button name="logIn" type="button">Log In</button>
                        <button name="signUp" type="button">Sign Up</button>
                    </div>
        </form>
                <a href="#">
                    <img src="../resources/sw_logo.png" alt="Star Wars" />
        </a>
    </header>

                <nav>
                    <ul>
                        <li><a href="#">NEWS + BLOG</a></li>
                        <li><a href="#">VIDEO</a></li>
                        <li><a href="#">FILMS</a></li>
                        <li><a href="#">SERIES</a></li>
                        <li><a href="#">INTERACTIVE</a></li>
                        <li><a href="#">COMMUNITY</a></li>
                        <li><a href="#">DATABANK</a></li>
                    </ul>
                </nav>
                <main>
                    <article className="film-item">
                        <section className="film-info">
                            <h3 classNameName="film-name">
                                STAR WARS: THE RISE OF SKYWALKER
                </h3>
                            <p className="film-lead">
                                No one's ever really gone...
                                Rey's journey continues and
                                the Skywalker saga concludes in Star Wars:
                                The Rise of Skywalker, coming December 2019.
                </p>
                        </section>
                        <img className="film-img" src="../resources/1-the-rise-of-skywalker.jpeg" alt="rise of skywalker" />
        </article>

    </main>

                    <footer>

                    </footer>

</body>, 
                document.getElementById('root'));
                
