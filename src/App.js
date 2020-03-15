import React from 'react';
import './App.css';
import logo from './media/logo75.png';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="logo"/>
                <nav className="nav">
                    <button className="nav__toggle" onClick={ () => {
                        document.body.classList.toggle('nav-open'); }}>
                        <span className="menu"></span>
                    </button>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link" href="https://jgreenwd.github.io/musician-cards">Musician Cards Project</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="https://jgreenwd.github.io/playing-cards">Playing Cards Project</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="https://jgreenwd.github.io/pixel-art-maker">Pixel Art Maker</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="https://jgreenwd.github.io/matching-game">Memory Matching Game</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="content">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </main>

            <aside className="content">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </aside>

            <footer className="content">
                Copyright © 2020 J. Greenwood
            </footer>
        </div>
    );
}

export default App;
