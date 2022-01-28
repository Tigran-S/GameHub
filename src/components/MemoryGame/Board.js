import './Game.css';
import React from "react";
export default function Board({isFlipped,index,flipCard,language}){
    return (
        <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            onClick={() => flipCard(index)}
        >
            <div className="inner">
                <div className="front">
                    <img
                        src={language.idx}
                        alt={'Name'}
                        width="100"
                    />
                </div>
                <div className="back"> </div>
            </div>
        </div>
    )
}

