function Question({ todayDate, question }) {
    return (
        <div>
            <p>{todayDate}</p>
            <p>Q.{question}</p>
        </div>
    )
}

export default Question;