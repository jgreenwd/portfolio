import React from 'react';
import './MemoryTile.css';

function MemoryTile(props) {
    const styles = {
        tile: {
            border: '1px solid rgb(10,10,10)',
            borderRadius: '5px',
            boxShadow: '3px 3px 10px rgba(20,20,20,0.3)',
            color: 'black',
            fontWeight: 'bolder',
            margin: '2px',
            height: '90px',
            textAlign: 'center',
            width: '90px'
        }
    }

    return <span style={styles.tile} className={props.status}>{props.icon}</span>
}

export default MemoryTile;
