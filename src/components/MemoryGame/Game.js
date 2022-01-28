
import './Game.css';
import Board from "./Board";
import React, { useEffect, useState } from "react";
import HTML from './images/icon1.png';
import CSS from './images/icon2.png'
import JS from './images/icon3.png'
import ANGULAR from './images/icon4.png'
import NODE from './images/icon5.png'
import VUE from './images/icon6.png'
import JAVA from './images/icon7.png'
import PITON from './images/icon8.png'
let  stepCount;
const arr = [
    { id:1,idx: HTML, name: "HTML" },
    { id:2,idx: CSS, name: "CSS" },
    { id:3,idx: JS, name: "JS" },
    { id:4,idx: ANGULAR, name: "ANGULAR" },
    { id:5,idx: NODE, name: "NODE" },
    { id:6,idx: VUE, name: "VUE" },
    { id:7,idx: JAVA, name: "JAVA" },
    { id:8,idx: PITON, name: "PITON" },
    { id:9,idx: HTML, name: "HTML" },
    { id:10,idx: CSS, name: "CSS" },
    { id:11,idx: JS, name: "JS" },
    { id:12,idx: ANGULAR, name: "ANGULAR" },
    { id:13,idx: NODE, name: "NODE" },
    { id:14,idx: VUE, name: "VUE" },
    { id:15,idx: JAVA, name: "JAVA" },
    { id:16,idx: PITON, name: "PITON" },
];

export default function Game() {
    const [clickCount, setClickCount] = useState(0);
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const [blockButtons, setBlockButtons] = useState(false);
    const [win, setWin] = useState(false);
    const [languages, setLanguage] = useState(arr);


    function flipCard(index) {
        setOpenedCard((opened) => [index, ...opened]);
        setClickCount(clickCount+1)
    }

    function shuffle (arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    function reset() {
        setOpenedCard([]);
        setTimeout( ()=>setLanguage(shuffle(languages)),100)
        setMatched([]);
        setBlockButtons(false);
        setWin(false);
        setClickCount(0)
    }

    useEffect(() => {
        if (openedCard.length < 2){
            return;
        }
        const firstMatched = languages[openedCard[0]];
        const secondMatched = languages[openedCard[1]];
        if (secondMatched && firstMatched.idx === secondMatched.idx && firstMatched.id !== secondMatched.id ) {
            setMatched([...matched, firstMatched.idx]);
        }
        if (openedCard.length === 2) {
            setBlockButtons(true);
            setTimeout(() => {
                setBlockButtons(false);
                setOpenedCard([]);
            },500);
        }
    }, [openedCard]);

    useEffect(() => {
        if(matched.length === 8) {
            stepCount = clickCount;
            if(!Number(localStorage.getItem('record'))){
                localStorage.setItem('record', stepCount)
            }
            if(Number(localStorage.getItem('record')) > stepCount && Number(localStorage.getItem('record'))) {
                localStorage.setItem('record', stepCount);
            }
            setWin(true);

        }
    }, [matched])

    return (
        <div className="game">
          <div className="status">
              { localStorage.getItem('record') && <p> Your record is {<strong>{localStorage.getItem('record')} </strong>} step:</p>}
              {win && <p>You win in {<strong> {stepCount} </strong>}step:</p>}
          </div>
            <div className="cards">
                {languages.map((language, index) => {
                    let isFlipped = false;
                    if (openedCard.includes(index)) isFlipped = true;
                    if (matched.includes(language.idx)) isFlipped = true;
                    return (
                       <Board
                           isFlipped={isFlipped}
                           index={index}
                           flipCard={flipCard}
                           language={language}
                           key={index}
                       />
                    )
                })
                }
            </div>
            <button
                onClick={reset}
                id='btnNewGame'
                >
                NEW GAME</button>
        </div>
    );
}
