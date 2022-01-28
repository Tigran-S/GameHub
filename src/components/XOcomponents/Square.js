import React from 'react';

function Square(props) {
    return (
        <div>
            <button className="btnXO" onClick={() => props.onClick()}>{props.value}</button>
        </div>
    )
}

export default Square;