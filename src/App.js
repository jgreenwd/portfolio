import React from 'react';
import './App.css';
import github from './media/GitHub-Mark-Light-120px-plus.png';
import LinkedIn from './media/LI-In-Bug.png';

const app_refs = [
    {'title': 'Home', 'url': "https://jgreenwd.github.io/home"},
    {'title': 'Musician Cards', 'url': "https://jgreenwd.github.io/musician-cards"},
    {'title': 'Playing Cards', 'url': "https://jgreenwd.github.io/playing-cards"},
    {'title': 'Matching Game', 'url': "https://jgreenwd.github.io/matching-game"},
    {'title': 'About', 'url': "https://jgreenwd.github.io/about/about"}
]

function App() {
    const [selection, setSelection] = React.useState(0);

    React.useEffect( () => {
        console.log(app_refs[selection].title)
    })

    const date = new Date()

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
                            <span className="nav__link" onClick={ () => setSelection(0)}>{app_refs[0].title}</span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__link" onClick={ () => setSelection(1)}>{app_refs[1].title}</span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__link" onClick={ () => setSelection(2)}>{app_refs[2].title}</span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__link" onClick={ () => setSelection(3)}>{app_refs[3].title}</span>
                        </li>
                        <li className="nav__item">
                            <span className="nav__link" onClick={ () => setSelection(4)}>{app_refs[4].title}</span>
                        </li>
                    </ul>
                </nav>
            </header>

            <iframe title={app_refs[selection].title} className="content" height="450px" width="386px" src={app_refs[selection].url} />

            <footer className="footer">
                <a href="https://github.com/jgreenwd/" style={{}}>
                    <img src={github} alt="GitHub link" style={{opacity: '0.75', width: '50px', height: '50px', float: 'left', marginRight: '5px'}} />
                </a>
                <span style={{whiteSpace: 'nowrap'}}>Copyright © {date.getFullYear()} J. Greenwood</span>
                <a href="https://linkedin.com/in/jeremy-greenwood/">
                    <img src={LinkedIn} alt="LinkedIn link" style={{opacity: '0.75', width: '60px', height: '50px', float: 'right', marginLeft: '5px'}}/>
                </a>
            </footer>
        </div>
    );
}

export default App;
