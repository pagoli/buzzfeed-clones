const QuestionBlock = ({
  questionOption,
  quizItemId,
  setChosenAnswers,
  chosenAnswers,
  unansweredQuestionsIds,
  setUnansweredQuestionsIds,
}) => {
  const handleClick = () => {
    setChosenAnswers((prevState) => [...prevState, questionOption.text]);
    setUnansweredQuestionsIds(
      unansweredQuestionsIds.filter((id) => id !== quizItemId)
    );
  };

  const validPick =
    !chosenAnswers?.includes(questionOption?.text) &&
    !unansweredQuestionsIds?.includes(quizItemId);

  return (
    <button className="answer-block" onClick={handleClick} disabled={validPick}>
      <img src={questionOption.image} alt={questionOption.alt} />
      <h3>{questionOption.text}</h3>
      <p>
        <a href={questionOption.image}>Source: </a>
        <span>{questionOption.credit}</span>
      </p>
    </button>
  );
};

export { QuestionBlock };
