function QuizViewer(props) {

    // This const is filling in for data that will actually be fetched from the API
    const questions = [
        {
            number: 1,
            title: 'In which country is Paris?'
        },
        {
            number: 2,
            title: 'What is the largest mammal?'
        }
    ];

    // This const is used to hold the HTML generated to display the questions for the relevant quiz
    const questionsHtml = []

    // This foreach generates HTML for each question provided by the API for the relevant quiz
    questions.forEach((question) => {
        questionsHtml.push(
            <tr>
                <td>{question.number}</td>
                <td>{question.title}</td>
            </tr>
        )
    })

    // This return renders the HTML for the quiz to currently be displayed
    return (
        <div className="quizViewer">
            <div className="quizViewerTitle"><p>{props.title}</p></div>
            <div className="quizViewerContent">
                <table className="quizViewerContentTable">
                    <tr>
                        <th>Question Number</th>
                        <th>Question</th>
                    </tr>
                    {questionsHtml}
                </table>
            </div>
        </div>
    );
};

export default QuizViewer;