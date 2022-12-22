import React from 'react';
import useCounter from '../hooks/useCounter';

const Main = () => {
    const { count, add } = useCounter(5);
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => { add(3); }}>++</button>
        </div>
    );
};

export default Main;
