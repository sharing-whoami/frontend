import  todayDate from '../utils/getTodayDate'

function Question({ question }) {
    return (
        <div>
            <p>{todayDate()}</p>
            <p>Q.{question}</p>
        </div>
    )
}

export default Question;