import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
import Question from '../Question/Question';
import { Answer } from '../Answer/AnswerList';
import CreateComment from './CreateComment';
import CommentList from './CommentList';

function CommentPage() {
    //   const dispatch = useDispatch()
    const [comment, setComment] = useState({
        userId: "",
        content: "",
        answerId: "",
        commentsId: "",
        toModify: false
    });
    const { userId, content, answerId, commentsId, toModify} = comment;
    const [comments, setComments] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState({
        answerId: "",
        answerContents: "",
        like: ""
    });

    useEffect(() => {
        console.log('생성됨');
        const res = {
            question: "코딩하는 이유",
            answerId: "1",
            answerContents: "그냥",
            like: 1,
            // commentsId 를 key 로
            comments: [
                {
                    userId: 1,
                    content: "내용1",
                    answerId: 1,
                    commentsId: 1,
                    toModify: false
                },
                {
                    userId: 1,
                    content: "내용2",
                    answerId: 1,
                    commentsId: 2,
                    toModify: false
                }
            ]
        }
        setComments(res.comments);
        setAnswer({
            answerId: res.answerId,
            answerContents: res.answerContents,
            like: res.like,
            isLiked: false
        });
        setQuestion(res.question);
        return () => {
            console.log('삭제함');
        }
    },[]);

    // current 로 가져올 id 
    const nextId = useRef(3);

    const onChange = e => {
        const { value, name } = e.target;
        setComment({
            ...comment,
            [name]: value
        })
    }

    const onCreate = () => {
        const comment = {
            userId,
            content,
            answerId,
            toModify,
            commentsId: nextId.current
        }
        setComments([...comments,comment]);
        setComment({
            userId: "",
            content: "",
            answerId: "",
            commentsId: ""
        });
        nextId.current += 1;
    }
    
    const onDelete =  commentsId => {
        setComments(comments.filter(comment => {
            return commentsId !== comment.commentsId;
        } ));
    }

    const onToModify = commentsId => {
        setComments(comments.map(comment => 
            commentsId === comment.commentsId ? {...comment, toModify: true } : comment
        ));
    }

    const onModify = (content,commentsId) => {
        setComments([...comments.map(comment => {
            if(comment.commentsId === commentsId) {
                return {
                    ...comment,
                    toModify: false,
                    content
                }
            } else {
                return comment;
            }
        })]);

    }

    return (
        <div>
            <Question question={question}/>
            <Answer answer={answer} />
            <CreateComment content={content} onCreate={onCreate} onChange={onChange}/>
            <CommentList comments={comments} onDelete={onDelete} onModify={onModify} onToModify={onToModify}/>
            <Link to="/answer/">뒤로가기</Link>
        </div>
    )
}
    
export default CommentPage;
