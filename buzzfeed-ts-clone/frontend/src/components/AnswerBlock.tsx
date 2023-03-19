import React, { useEffect, useState, forwardRef } from "react";
import { Answer } from "../interfaces";

type Props = {
  answerOptions: Answer[] | undefined;
  chosenAnswers: string[];
};

const AnswerBlock = (
  { answerOptions, chosenAnswers }: Props,
  ref: HTMLDivElement | any
) => {
  const [result, setResult] = useState<Answer | null>();
  useEffect(() => {
    console.log(chosenAnswers);
    answerOptions?.forEach((answer: Answer) => {
      if (
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])
      ) {
        setResult(answer);
      }
      if (!result) {
        setResult(answerOptions[0]);
      }
    });
  }, [chosenAnswers]);

  return (
    <>
      {
        <section ref={ref} className="result-block">
          <h2>Your Answer:</h2>
          <p>{result?.text}</p>
          <img src={result?.image} alt={result?.credit} />
        </section>
      }
    </>
  );
};

export default forwardRef(AnswerBlock);
