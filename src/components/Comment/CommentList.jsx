import React, {useState} from 'react';

function Comment({ comment, onDelete,onModify, onToModify }) {
    const [content,setContent] = useState(comment.content);
    const onChange = e => {
        setContent(e.currentTarget.value);
    }

    return (
        <div>
            {
                comment.toModify
                ?   <div>
                    <input type="text" 
                    value={content}
                    onChange={onChange}/>
                    <button onClick={()=> onModify(content,comment.commentsId)}>저장</button>
                </div>
                : <p>{comment.content}</p>
            }
            <button onClick={() => onDelete(comment.commentsId)} >삭제</button>
            <button onClick={() => onToModify(comment.commentsId)}>수정</button>
        </div>
    )
}

function CommentList({ comments, onDelete, onModify, onToModify}) {
    return (
        <div> 
        {
            comments.map(comment=> (
                    <Comment 
                    comment={comment} 
                    onDelete={onDelete} 
                    onModify={onModify}
                    onToModify={onToModify}
                    key={comment.commentsId}
                    />
            ))
        }
        </div>
    )
}

export default CommentList;