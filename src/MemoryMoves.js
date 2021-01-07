import React from 'react';

function MemoryMoves(props) {
    return <span style={{color: 'white', marginLeft: '20px', width: '100px'}}>Moves: {props.count}</span>
}

export default MemoryMoves;