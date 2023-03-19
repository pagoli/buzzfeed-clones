import { useState, useEffect, createRef } from "react";
import { Title } from "./components/Title";
import QuestionsBlock from "./components/QuestionsBlock";
import AnswerBlock from "./components/AnswerBlock";

const App = () => {
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [unansweredQuestionsIds, setUnansweredQuestionsIds] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const refs = unansweredQuestionsIds?.reduce((acc, id) => {
    acc[id] = createRef();
    return acc;
  }, {});

  const answerRef = createRef();

  console.log("REFS", refs);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/quiz`);
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({ id }) => id);
    setUnansweredQuestionsIds(unansweredIds);
  }, [quiz]);

  useEffect(() => {
    if (chosenAnswers.length > 0) {
      if (showAnswer) {
        // scroll to answer block;
        const answerBlock = document.getElementById("#answer");
        answerBlock?.scrollIntoView({ behavior: "smooth" });
        answerRef?.current.scrollIntoView({ behavior: "smooth" });

        // $ Old scroll w/o answerRef:
        // const answerBlock = document.querySelector("#answer");
        // answerBlock?.scrollIntoView({ behavior: "smooth" });
      }
      if (unansweredQuestionsIds?.length <= 0 && chosenAnswers?.length >= 1) {
        // scroll to answer block;
        setShowAnswer(true);
      }
      const highestId = Math.min(...unansweredQuestionsIds);
      refs[highestId]?.current.scrollIntoView({ behavior: "smooth" });

      // $ Old scroll w/o refs:
      // const highestElement = document.getElementById(highestId);
      // highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unansweredQuestionsIds, showAnswer, chosenAnswers, answerRef, refs]);

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {refs &&
        quiz &&
        quiz?.content?.map((contentItem) => (
          <QuestionsBlock
            key={contentItem.id}
            quizItem={contentItem}
            setChosenAnswers={setChosenAnswers}
            chosenAnswers={chosenAnswers}
            unansweredQuestionsIds={unansweredQuestionsIds}
            setUnansweredQuestionsIds={setUnansweredQuestionsIds}
            ref={refs[contentItem.id]}
          />
        ))}
      {answerRef && showAnswer && (
        <AnswerBlock
          answerOptions={quiz?.answers}
          chosenAnswers={chosenAnswers}
          ref={answerRef}
        />
      )}
    </div>
  );
};

export { App };
