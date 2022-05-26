import AnswerViewer from "./AnswerViewer/AnswerViewer";

const generateQuizAnswerViewerHtml = (quizes, quizName) => {
    const questionsHtml = [];
    const quiz = quizes[quizName];
    
    quiz.forEach(question => {

        const answersHtml = [];

        answersHtml.push(<AnswerViewer answers={question.answers}></AnswerViewer>)

        questionsHtml.push(
            <div className="question">
                <p>{question.title}</p>
                <div className="question-answers">
                        {answersHtml}
                </div>
            </div>
        )
    });

    return questionsHtml;
};

const QuizAnswersViewer = (props) => {

    const quizes = {
        "Geography": [
            {
                title: "In what country is Paris?",
                answers: [
                    {
                        index: "A",
                        text: "Belgium",
                    },
                    {
                        index: "C",
                        text: "Germany",
                    },
                    {
                        index: "B",
                        text: "France",
                    }
                ]
            },
            {
                title: "What is the largest country in the world?",
                answers: [
                    {
                        index: "C",
                        text: "Canada",
                    },
                    {
                        index: "A",
                        text: "United States",
                    },
                    {
                        index: "B",
                        text: "Russia",
                    }
                ]
            }
        ]
    };

    const questionsHtml = generateQuizAnswerViewerHtml(quizes, props.quiz);

    return(
        <div className="quizAnswersViewer">
            <h3>Quiz: {props.quiz}</h3>
            {questionsHtml}
        </div>
    )

}

export default QuizAnswersViewer