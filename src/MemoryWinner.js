import React from 'react';

function MemoryWinner(props) {
    const style = {
        backgroundImage: 'radial-gradient(circle, white, rgba(10,220,50,0.75))',
        borderRadius: '3px',
        textAlign: 'center',
        fontSize: '3.9em',
        height: '362px',
        lineHeight: '362px',
        margin: '16px 22px',
        position: 'absolute',
        visibility: props.isDisplayed ? null : 'hidden',
        width: '362px',
        zIndex: 1,
    }

    return (
        <span style={style}>WINNER!</span>
    )
}

export default MemoryWinner;
