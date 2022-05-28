import React from 'react'

function CreateComment({ content, onCreate,onChange }) {
    return (
        <div>
            <input 
            type="text" 
            name="content" 
            placeholder="내용을 입력해 주세요" 
            value={content} 
            onChange={onChange}/>
            <button onClick={onCreate}>댓글달기</button>
        </div>
    )
}

export default CreateComment;