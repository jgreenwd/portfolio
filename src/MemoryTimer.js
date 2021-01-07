import React from 'react';

function MemoryTimer (props) {
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        if (props.status) {
            const timer = setInterval( () => {
                setTime(time + 1);
            }, 1000);
        return () => clearInterval(timer);
        }
    });

    return ( <span style={{color: 'white', marginLeft: '20px', width: '100px'}}>Time: {Math.floor(time)}</span> );
}

export default MemoryTimer;
