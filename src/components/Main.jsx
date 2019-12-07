import React from 'react';
import './Main.css';

import skyWalkerImg from '../resources/1-the-rise-of-skywalker.jpeg';

function Main() {
    return (
        <main>
            <article className="film-item">
                <section className="film-info">
                    <h3 className="film-name">
                        STAR WARS: THE RISE OF SKYWALKER
            </h3>
                    <p className="film-lead">
                        No one's ever really gone...
                        Rey's journey continues and
                        the Skywalker saga concludes in Star Wars:
                        The Rise of Skywalker, coming December 2019.
            </p>
                </section>
                <img className="film-img" src={skyWalkerImg} alt="rise of skywalker" />
            </article>

        </main>
    );
}

export default Main;