import { QuestionBlock } from "./QuestionBlock";
import { forwardRef } from "react";

const QuestionsBlock = (
  {
    quizItem,
    setChosenAnswers,
    chosenAnswers,
    unansweredQuestionsIds,
    setUnansweredQuestionsIds,
  },
  ref
) => {
  return (
    <>
      <h2 ref={ref} className="title-block">
        {quizItem.title}
      </h2>
      <div className="answer-options">
        {quizItem.questions.map((question, _index) => (
          <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            questionOption={question}
            setChosenAnswers={setChosenAnswers}
            chosenAnswers={chosenAnswers}
            unansweredQuestionsIds={unansweredQuestionsIds}
            setUnansweredQuestionsIds={setUnansweredQuestionsIds}
          />
        ))}
      </div>
    </>
  );
};

export default forwardRef(QuestionsBlock);
