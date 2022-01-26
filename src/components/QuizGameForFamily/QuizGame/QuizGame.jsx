import React,{useState,useEffect} from 'react';
import questionBank from '../QuestionBank/questionBank';
import QuestionBox from '../questionBox/questionBox';
import Result from '../Results/results';
import './QuizGame.css'

function QuizGame(){
    const [question,setQuestion]= useState([]);
    const [score,setScore]= useState(0);
    const [responses,setResponses]= useState(0);
    

    const getQuestions=()=>{
        questionBank().then(data=>{
            setQuestion(data)
            console.log(data);
        })

    }

    const computeAnswer=(answer,correctAnswer)=>{
        if(answer === correctAnswer){
            setScore(score+1)
        }
        setResponses(responses<5?responses+1:5)
            
        }
        

    const playAgain=()=>{
        getQuestions();
        setResponses(0);
        setScore(0);
    }
    


    useEffect(()=>{
        getQuestions(question)

    },[])
    return(
        <section className='main'>
        <div className='background'>
        <div className='container'>
            <div className='header'> <p className='title'>Quiz Game for Family</p></div>
            <div className='bodyPart'>{question.length>0 &&
            responses<5 &&
            question.map(({question,answers,correct,questionId})=>{
            return <QuestionBox 
            key = {questionId} 
            question = {question} 
            options = {answers}
            selected = {answer=>computeAnswer(answer,correct) }/>})}
            {console.log(score,responses)}
            
            
            </div>
            {responses===5?<Result score = {score} playAgain={playAgain}></Result>:null}
        </div>
        </div>
        </section>
    )
}

export default QuizGame