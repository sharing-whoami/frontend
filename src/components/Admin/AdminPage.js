import axios from 'axios'
import React, { useState } from 'react'
// import axios from 'axios';

function AdminPage() {
    // let enddate = new Date()

    // const getQuestion = (startdate, enddate)=> {
    //     axios.get('/question/{startdate}/{enddate}')
    // }
    /*
    렌더링 시:
    현재 날짜 받아옴.
    enddate: 현재 날짜
    startdate: 현재 날짜 10일 전
    질문 목록 요청해서 10개 보여줌

    아래 버튼 세 개
    질문 검색

    질문 추가
    - 

    질문 삭제
    - 체크 박스 추가
    */
    const [startForSearch, setstartForSearch] = useState("")
    const [endForSearch, setendForSearch] = useState("")
    const [content, setcontent] = useState("")
    const [dateForCreate, setdateForCreate] = useState("")

    const onDateHandler = (e)=>{
        if (e.currentTarget.name === 'start') {
            setstartForSearch(e.currentTarget.value)
        } else {
            setendForSearch(e.currentTarget.value)
        }
    }

    const onSearchHandler = ()=> {
        if (startForSearch==="" || endForSearch===""){
            alert('날짜를 선택해주세요.')
        } else {
            axios.get('/question/${startForSearch}/${endForSearch}')
        }
    }

    const onDeleteHandler = ()=>{
        // const questionId = e.currentTarget.value 
        // axios.delete("/question/${questionId}")

    }

    const onContentHandler = (e)=>{
        setcontent(e.currentTarget.value)
    }

    const onCreateDateHandler = (e)=>{
        setdateForCreate(e.currentTarget.value)
    }

    const onCreateHandler=()=>{
        if (content==="") {
            alert("질문 내용을 입력해주세요.")
        } else if (dateForCreate===""){
            alert("질문 날짜를 선택해주세요.")
        } else {
            let body = {
                date: dateForCreate,
                contents: content
            }
            axios.post('/question', body)
        }
    }


    // 조회 response
    let enddate = '2022-05-13'
    let startdate = '2022-05-11'
    let questionlist = [
        {articleId: 1, contents: '질문1', date: '2022-05-11'},
        {articleId: 2, contents: '질문2', date: '2022-05-12'},
        {articleId: 3, contents: '질문3', date: '2022-05-13'},
    ]

    let questiondiv = questionlist.map((question)=>(
        <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', width: '20vw', marginBottom: '20px'}} key={question.articleId}>
            <div>{question.articleId}</div>
            <div>{question.contents}</div>
            <div>{question.date}</div>
            <button value={question.articleId} onClick={onDeleteHandler}>삭제</button>
        </div>
    ))

    return (
        <div>
            <h1>관리자 페이지</h1>
            <h3>질문 조회</h3>
            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', width: '50vw', marginBottom: '40px'}}>
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
            <h3>조회 결과</h3>
            <div>
                <p>{startdate} ~ {enddate}</p>
            </div>
            {questiondiv}
            <h3 style={{marginTop:'40px'}}>질문 생성</h3>
            <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center', width: '40vw',}}>
                <input type="date" onChange={onCreateDateHandler}></input>
                <input type="text" onChange={onContentHandler}></input>
                <button onClick={onCreateHandler}>추가</button>
            </div>
        </div>
    )
}

export default AdminPage;