import React from 'react';

function MemoryControls (props) {
    return (
        <span style={{width: '95px', marginLeft: '110px', color: 'white'}}>
            <i onClick={props.pause} style={{fontSize: '35px'}} className="material-icons">
                    {props.status ? `pause_circle_filled` : `play_circle_filled`}
            </i>
            <i onClick={props.reset} style={{fontSize: '35px'}} className="material-icons">replay</i>
        </span>
    );
}

export default MemoryControls;
