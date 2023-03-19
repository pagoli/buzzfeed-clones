import React, { forwardRef } from "react";
import { Questions, Option } from "../interfaces";
import QuestionBlock from "./QuestionBlock";

type Props = {
  quizItem: Questions;
  setChosenAnswers: Function;
  chosenAnswers: string[];
  setUnansweredQuestionsIds: Function;
  unansweredQuestionsIds: number[] | undefined;
};

const QuestionsBlock = (
  {
    quizItem,
    setChosenAnswers,
    chosenAnswers,
    setUnansweredQuestionsIds,
    unansweredQuestionsIds,
  }: Props,
  ref: React.LegacyRef<HTMLHeadingElement> | undefined
) => {
  return (
    <>
      <h2 ref={ref} className="title-block">
        {quizItem.title}
      </h2>
      <div className="answer-options">
        {quizItem.options.map((option: Option, _index: number) => (
          <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            option={option}
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
