import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import getTodayDate from '../../utils/getTodayDate';
import Header from "../../components/Header"

function QuestionPage() {
    const dispatch = useDispatch();
    const todayDate = getTodayDate();
    const params = {
        startDate: todayDate,
        endDate: todayDate
    }

    const [question, setQuestion] = useState("");
    const [answerId, setAnswerId] = useState("");
    const [answer, setAnswer] = useState("");
    const [tag, setTag] = useState("");
    const [tagId, setTagId] = useState("");
    const [answerInput, setAnswerInput] = useState("");
    const [tagInput, setTagInput] = useState("");
    const [modify, setModify] = useState(false);

    useEffect(() => {
        // 답변을 했는지 하지 않았는지 여부를 서버에서 받아옴

        /*
            answerId	Number	답글 번호
            updatedAt	Datetime	날짜
            userId	Number	회원 번호
            answerContents	String	답글 내용
            tagId	Number	태그 번호
            tagContents	Number	태그 내용 
        */
        const res = {
            question: "코딩하는 이유",
            answerId: "1",
            answerContents: "그냥",
            tagId: "1",
            tagContents: "일상"
        }

        setQuestion(res.question);
        setAnswerId(res.answerId);
        setAnswer(res.answerContents);
        setTagId(res.tagId)
        setTag(res.tagContents);
        setModify(false);
    }, []);

    // 질문
    function Question({ todayDate, question }) {
        return (
            <div>
                <p>{todayDate}</p>
                <p>Q.{question}</p>
            </div>
        )
    }
    // 답변
    function Answer() {
        return (
            <p>A. {answer}</p>
        )
    }

    const answerInputOnChange = e => {
        setAnswerInput(e.currentTarget.value);
    }

    // 태그
    function Tag() {
        return (
            <span>#{tag}</span>
        )
    }

    const tagInputOnChange = e => {
        setTagInput(e.currentTarget.value);
    }

    // handler
    const onModify = () => {
        setModify(true);
    }

    const onConfirm = () => {
        // 서버에 전송 후 완료되었을 때
        setAnswer(answerInput);
        setTag(tagInput);
        setTagInput("");
        setAnswerInput("");
        setModify(false);
    }

    return (
        <div>
            <Header/>
            <Question todayDate={todayDate} question={question} />
            <div>
                {answerId && !modify
                    ? <div>
                        <Answer answer={answerInput} />
                        <Tag tag={tagInput} />
                        <p><button onClick={onModify}>수정</button></p>
                    </div>
                    : <div>
                        <p><input type="text" placeholder={answer ? answer : '내용을입력해주세요'} value={answerInput}
                            onChange={answerInputOnChange}
                        /></p>
                        <p> <input type="text" placeholder={tag ? tag : '내용을 입력해주세요'} value={tagInput} onChange={tagInputOnChange} />
                        </p>
                        <p> <button onClick={onConfirm}>완료</button></p>
                    </div>
                }
            </div>
        </div>
    )
}

/*
답글 내용 조회

사용자가 로그인 하고 있다면 userId 값을 redux store 에 저장
작성/수정/저장을 하기 위해 

2.1.1. GET /answers/list/{userId}

tag 테이블에서 answerId 를 foreign key 로 참조해 tag 들을 가져옴
조회한 답글이 있는 경우:  
조회한 답글이 없는 경우: 



*/

export { QuestionPage }