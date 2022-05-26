import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import Question from '../../components/Question';
import getTodayDate from '../../utils/getTodayDate';
import Answer from '../../components/Answer';

function AnswerPage(props) {
    //   const dispatch = useDispatch()
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const todayDate = getTodayDate();

    useEffect(() => {
        const res = {
            question: "코딩하는 이유",
            answers: [
                {
                    answerId: "1",
                    answerContents: "답변1"
                },
                {
                    answerId: "2",
                    answerContents: "답변2"
                },
                {
                    answerId: "3",
                    answerContents: "답변3"
                },
            ]
        };
        setAnswers(res.answers);
        setQuestion(res.question)
    },[])

    function AnswerList({answers}) {
        return (
            <div>
                {
                    answers.map(answer => (
                        <Answer answer={answer} key={answer.answerId} />
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <Question todayDate={todayDate} question={question}/>
            <AnswerList answers = {answers}/>
        </div>
    )
}

export { AnswerPage };