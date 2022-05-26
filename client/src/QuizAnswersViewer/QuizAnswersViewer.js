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
    }

    const questionsHtml = [];

    const generateQuizAnswerViewerHtml = (quizName) => {
        const quiz = quizes[quizName];
        
        quiz.forEach(question => {

            const answersHtml = [];
            const answers = question.answers;

            question.answers.sort(answerSorter);

            answers.forEach(answer => {
                answersHtml.push(
                    <div className="answer">
                        <p>{answer.index}</p>
                        <p>{answer.text}</p>
                    </div>
                );
            });

            questionsHtml.push(
                <div className="question">
                    <p>{question.title}</p>
                    <div className="question-answers">
                            {answersHtml}
                    </div>
                </div>
            )
        });
    };

    const answerSorter = (a,b) => {
        if (a.index < b.index) {
            return -1;
        }
        if (a.index > b.index) {
            return 1;
        }
        return 0;
    }

    generateQuizAnswerViewerHtml(props.quiz);

    return(
        <div className="quizAnswersViewer">
            <h3>Quiz: {props.quiz}</h3>
            {questionsHtml}
        </div>
    )

}

export default QuizAnswersViewer