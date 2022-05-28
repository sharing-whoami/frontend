import React from 'react' 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Answer({ answer,onLike }) {
    return (
        <div>
            <div>{answer.answerId}</div>
            <p>A. {answer.answerContents}</p>
            <div>{answer.like} 명이 좋아합니다</div>
            <FontAwesomeIcon icon={faHeart} style={{
                cursor: 'pointer',
                color: answer.isLiked ? 'red' : 'black'
            }}
            onClick={()=> onLike(answer.answerId)}/>
        </div>
    )
}

export function AnswerList({answers, onLike}) {
    return (
        <div>
            {
                answers.map(answer => (
                    <div key={answer.answerId} > 
                    <Answer answer={answer} onLike={onLike}  />
                    <Link to={`/answer/${answer.answerId}/comments`}>댓글 보기</Link>
                    </div>
                    ))
            }
        </div>
    )
}
