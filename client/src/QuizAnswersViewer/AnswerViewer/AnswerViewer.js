import React, { useState } from 'react';

const answerSorter = (a,b) => {
    if (a.index < b.index) {
        return -1;
    }
    if (a.index > b.index) {
        return 1;
    }
    return 0;
}

const AnswerViewer = (props) => {

    const [viewButtonState, setViewButtonState] = useState("View Answers");
    const [showAnswers, setShowAnswers] = useState(false);

    const answers = props.answers;
    let answersHtml = [];

    answers.sort(answerSorter);

    const viewAnswersToggle = (event) => {
        event.preventDefault();

        if (showAnswers) {
            setViewButtonState("View Answers");
            setShowAnswers(false);
        } else {
            setViewButtonState("Hide Answers");
            setShowAnswers(true);
        }
    };

    answers.forEach(answer => {
        answersHtml.push(
            <div className="answer">
                <p>{answer.index}</p>
                <p>{answer.text}</p>
            </div>
        );
    });

    return(
        <div className="answerViewer">
                <button onClick={viewAnswersToggle}>{viewButtonState}</button>
                { showAnswers ? answersHtml : null }
            </div>
    );
}

export default AnswerViewer