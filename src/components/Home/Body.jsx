import React, { useState } from 'react';

const Body = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>DIPLOMADO FULL STACK - FRONTEND CON REACT JS</h2>
            <h4 >Oscar Herbas Velasco</h4>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </div>
    );
};

export default Body;