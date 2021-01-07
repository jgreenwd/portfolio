import React from 'react';
import MemoryTile from './MemoryTile';
import MemoryTimer from './MemoryTimer';
import MemoryMoves from './MemoryMoves';
import MemoryControls from './MemoryControls';
import MemoryWinner from './MemoryWinner';
import './MemoryBoard.css';

/* ---- playing surface container ---- */
function MemoryBoard(props) {
    // game state
    const [tiles, setTiles] = React.useState([]);
    const [matches, setMatches] = React.useState(0);
    const [active_timer, start_timer] = React.useState(true);
    const [counter, addMove] = React.useState(0);
    const [win_notification, notify_winner] = React.useState(false);

    // setup the board
    React.useEffect(() => {
        //shuffle
        props.icons.forEach( () => {
            const seed = Math.floor((Math.random() * (props.icons.length-1)) + 0);
            props.icons.push(props.icons.splice(seed, 1).toString());
        })

        // place tiles
        setTiles(props.icons.map( (x, index) => {
            return <MemoryTile key={index} status={'memory_closed'} icon={x} />
        }))

    }, [props.icons])

    // win condition
    React.useEffect(() => {
        if (matches === props.icons.length / 2) {
            start_timer(false);
            notify_winner(true)
        }
    }, [matches, start_timer, props.icons])


    // game play
    const stack = [];

    const pause_button = () => {
        // flush the stack on pause
        stack.forEach((tile) => {tile.className = 'memory_closed'})
        stack.length = 0

        start_timer(!active_timer)
    }

    const reset_button = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    const click_tile = (tile) => {
        // ensure clicking on tile (and not surrounding board space)
        if (tile.target.innerText.length === 1) {
            tile.persist()

            // if tile not in stack & not already matched, add to stack & make visible
            if (!stack.includes(tile.target) && (!tile.target.className.includes('matched'))) {
                stack.push(tile.target)
                tile.target.className = 'memory_opened'
            }

            // if 2 tiles, compare
            if (stack.length === 2) {
                addMove(counter + 1)
                let match = false;

                if (stack[0].innerText === stack[1].innerText) {
                    stack.forEach( (tile) => tile.className = 'memory_matched');
                    match = true;
                } else {
                    stack.forEach( (tile) => setTimeout( () => tile.className = 'memory_closed', 1000));
                }

                if (match) { setMatches(matches + 1)}

                // flush the stack
                stack.length = 0
            }
        }
    }

    return (
            <div onClick={active_timer === false ? pause_button : null} >
                <MemoryWinner isDisplayed={win_notification}/>
                <div className="memory_board" onClick={click_tile}> {tiles} </div>
                <div style={{display: 'flex', alignItems: 'center', flexFlow: 'row nowrap',
                            margin: '10px', width: '380px'}}>
                    <MemoryTimer status={active_timer}/>
                    <MemoryMoves count={counter} />
                    <MemoryControls status={active_timer}
                                    pause={pause_button}
                                    reset={reset_button}/>
                </div>
        </div>
    )
}

export default MemoryBoard;
