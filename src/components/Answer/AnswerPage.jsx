import React, { useState, useEffect } from 'react'
import Question from '../Question/Question';
import { AnswerList } from './AnswerList';
import Header from '../Header';

function AnswerPage(props) {
    //   const dispatch = useDispatch()
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const res = {
            question: "코딩하는 이유",
            answers: [
                {
                    answerId: "1",
                    answerContents: "답변1",
                    like: 7,
                    isLiked: false
                },
                {
                    answerId: "2",
                    answerContents: "답변2",
                    like: 6,
                    isLiked: false
                },
                {
                    answerId: "3",
                    answerContents: "답변3",
                    like: 6,
                    isLiked: false
                },
            ]
        };
        setAnswers(res.answers);
        setQuestion(res.question)
    },[])


    const onLike = answerId => {
        setAnswers(answers.map(answer => {
            if(answer.answerId === answerId){
                if(answer.isLiked) {
                    return {
                        ...answer,
                        like: answer.like -1,
                        isLiked: false 
                    }
                } else {
                    return {
                        ...answer,
                        like: answer.like +1,
                        isLiked: true 
                    }
                }
            } else {
                return answer;
            }
        }))
    }

   
    return (
        <div>
            <Header/>
            <Question question={question}/>
            <AnswerList answers = {answers} onLike={onLike}/>
        </div>
    )
}

export { AnswerPage };