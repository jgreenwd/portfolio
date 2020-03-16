import React from 'react';
import './App.css';
import logo from './media/logo2b.png';
import sprite from './media/sprite.png';

const imageStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(255,255,255,0.2), rgba(10,10,10,0.85)), url(${logo})`,
    backgroundRepeat: 'no-repeat',
    width: '640px',
    height: '120px'
};

function App() {
    return (
        <div className="App">
            <header className="header">
                <button className="nav__toggle" onClick={ () => {
                        document.body.classList.toggle('nav-open'); }}>
                        <span className="nav__icon"></span>
                </button>
                <nav className="nav__menu">
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

            <footer className="footer">
                <img style={imageStyle} className="logo" src={sprite} alt="logo"/>
                <p>Copyright © 2020 J. Greenwood</p>
            </footer>
        </div>
    );
}

export default App;
