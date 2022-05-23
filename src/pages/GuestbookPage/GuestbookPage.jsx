import React, { useState } from 'react'
import axios from 'axios'

function GuestbookPage () {
    const ownerId = "다람쥐"
    const guestId = "토끼"

    // 초기 날짜 설정
    const today = new Date()
    let year = today.getFullYear(); 
    let month = today.getMonth() + 1;
    let date = today.getDate();
    const initialEnd = year + '-' + month + '-' + date
    const before = new Date(today.setDate(date-7))
    year = before.getFullYear(); 
    month = before.getMonth() + 1;
    date = before.getDate();
    const initialStart = year + '-' + month + '-' + date

    const [startdate, setstartdate] = useState(initialEnd)
    const [enddate, setenddate] = useState(initialStart)
    const [_start, set_start] = useState("")
    const [_end, set_end] = useState("")
    const [_content, set_content] = useState("")

    const onDateHandler = (e)=>{
        if (e.currentTarget.name === 'start') {
            set_start(e.currentTarget.value)
        } else {
            set_end(e.currentTarget.value)
        }
    }
    const onSearchHandler = ()=> {
        if (_start==="" || _end===""){
            alert('날짜를 선택해주세요.')
        } else if (_start > _end) {
            alert('종료일을 시작일 이후로 선택해주세요.')
        } else {
            setstartdate(_start)
            setenddate(_end)
            axios.get('/question/${startForSearch}/${endForSearch}')
        }
    }

    const onContentHandler = (e)=>{
        set_content(e.currentTarget.value)
    }
    const onSubmitHandler = ()=>{
        if (_content ==="") {
            alert('내용을 입력하세요.')
        } else {
            let body = {
                userId: ownerId,
                contents: _content
            }
            axios.post('/guestbook/', body)
            // 성공하면 게시글 목록 다시 로딩
        }
    }

    // 방명록 조회 요청 응답 예시 
    const dummyList = [
        {guestbookId: 4, contents:'방명록4의 내용', date:'2022-05-01', guestId:'user_abc'},
        {guestbookId: 3, contents:'방명록3의 내용', date:'2022-04-01', guestId:'user_aah'},
        {guestbookId: 2, contents:'방명록2의 내용', date:'2022-03-01', guestId:'user_a2f'},
        {guestbookId: 1, contents:'방명록1의 내용', date:'2022-02-01', guestId:'user_sd2'}
    ]

    return (
        <div>
            <h2 style={{marginBottom:"40px"}}>{ownerId}님의 방명록</h2>
            <h3>방명록 작성</h3>
            <p>작성자: {guestId}</p>
            <div style={{display: 'flex', width: '25vw', justifyContent:'space-between', marginBottom:'40px'}}>
                <textarea onChange={onContentHandler}></textarea>
                <div>
                    <button onClick={onSubmitHandler}>등록</button>
                </div>
            </div>
            <h3>방명록 조회</h3>
            <div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', width: '50vw', marginBottom: '20px'}}>
                    <div>
                        <label style={{marginRight:'10px'}}>시작일</label>
                        <input type="date" name='start' onChange={onDateHandler}></input>
                    </div>
                    <div>
                        <label style={{marginRight:'10px'}}>종료일</label>
                        <input type="date" name='end' onChange={onDateHandler}></input>
                    </div>
                    <button onClick={onSearchHandler}>검색</button>
                </div>
                <p>{startdate}부터 {enddate}까지 검색된 결과입니다.</p>
                <div>
                    { dummyList.map(function(item){
                        return (
                            <div key={item.guestbookId} style={{marginBottom:'10px', border:'solid 1px black', width: '40vw', padding:'5px'}}>
                                <div style={{display:'flex', marginBottom:'10px', width: '90%', justifyContent:'space-between'}}>
                                    <div>작성자: {item.guestId}</div>
                                    <div>{item.date}</div>
                                </div>
                                <div>{item.contents}</div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
}

export {GuestbookPage}