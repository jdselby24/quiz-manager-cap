function QuizViewer(props) {

    // This function is responsible for fetching quiz data from the API server
    // NOTE: in this prototype it is simply accessing a const which is storing the data
    function fetchQuiz(quizName) {
        const quizes = {
            "Geography": [
                {
                    number: 1,
                    title: 'In which country is Paris?'
                },
                {
                    number: 2,
                    title: 'What is the largest continent?'
                }
            ],
            "Computer Science": [
                {
                    number: 1,
                    title: 'What is binary?'
                },
                {
                    number: 2,
                    title: 'What is the function of the CPU?'
                }
            ]
        };

        return quizes[quizName];
    }
    // This const is used to hold the HTML generated to display the questions for the relevant quiz
    const questionsHtml = []

    // This foreach generates HTML for each question provided by the API for the relevant quiz
    fetchQuiz(props.quizName).forEach((question) => {
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
            <div className="quizViewerTitle"><p>{props.quizName}</p></div>
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