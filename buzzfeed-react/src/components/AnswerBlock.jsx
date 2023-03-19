import React, { useEffect, useState, forwardRef } from "react";

const AnswerBlock = ({ answerOptions, chosenAnswers }, ref) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // console.log("THE ANSWER BLOCK", answerOptions[0]);
    answerOptions.forEach((answer) => {
      if (
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])
      ) {
        setResult(answer);
      } else if (!result) {
        setResult(answerOptions[0]);
      }
    });
  }, [result]);

  return (
    <>
      {
        <section ref={ref} className="result-block">
          <h2>Your Answer:</h2>
          <p>{result?.text}</p>
          <img src={result?.image} alt={result?.source} />
        </section>
      }
    </>
  );
};

export default forwardRef(AnswerBlock);
