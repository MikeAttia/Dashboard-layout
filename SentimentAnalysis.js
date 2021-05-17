import React from "react"
function SentimentAnalysis(props) {
    return (
        <div className="SentimentAnalysis">
            <h3>Sentiment Analysis <br></br> {props.count1} <br></br> {props.count2} <br></br> {props.count3}</h3>
           

        </div>
    )
}
export default SentimentAnalysis;