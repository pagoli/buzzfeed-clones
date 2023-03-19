import { useState, useEffect, createRef } from "react";
import AnswerBlock from "./components/AnswerBlock";
import QuestionsBlock from "./components/QuestionsBlock";
import { QuizData, Questions } from "./interfaces";
import { Title } from "./components/Title";

const App = () => {
  const [quiz, setQuiz] = useState<QuizData | null>();
  const [chosenAnswers, setChosenAnswers] = useState<string[]>([]);
  const [unansweredQuestionsIds, setUnansweredQuestionsIds] = useState<
    number[] | undefined
  >([]);
  const [showAnswer, setShowAnswer] = useState(false);

  type ReduceType = {
    id?: {};
  };

  const refs = unansweredQuestionsIds?.reduce<ReduceType | any>((acc, id) => {
    acc[id as unknown as keyof ReduceType] = createRef<HTMLDivElement | null>();
    return acc;
  }, {});

  const answerRef = createRef<HTMLDivElement | null>();

  // const searchParams = new URLSearchParams(document.location.pathname);
  // console.log("searchParams", searchParams);
  const id = "6412e03447932bad99b9f37b";

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/quizzes/${id}`);
      const json = await response.json();
      setQuiz(json);
    } catch (error) {
      console.log("ERROR =>", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredIds = quiz?.questions?.map(({ id }: Questions) => id);
    setUnansweredQuestionsIds(unansweredIds);
  }, [quiz]);

  useEffect(() => {
    if (chosenAnswers.length > 0 && unansweredQuestionsIds) {
      if (showAnswer && answerRef.current) {
        answerRef.current.scrollIntoView({ behavior: "smooth" });
      }

      if (unansweredQuestionsIds.length <= 0 && chosenAnswers.length >= 1) {
        setShowAnswer(true);
      } else {
        const highestId = Math.min(...unansweredQuestionsIds);
        refs[highestId].current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [
    unansweredQuestionsIds,
    chosenAnswers.length,
    showAnswer,
    answerRef.current,
    refs,
  ]);

  return (
    <div className="App">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {refs &&
        quiz?.questions?.map((contentItem) => (
          <QuestionsBlock
            key={contentItem.id}
            quizItem={contentItem}
            setChosenAnswers={setChosenAnswers}
            chosenAnswers={chosenAnswers}
            setUnansweredQuestionsIds={setUnansweredQuestionsIds}
            unansweredQuestionsIds={unansweredQuestionsIds}
            ref={refs[contentItem.id]}
          />
        ))}
      {showAnswer && answerRef && (
        <AnswerBlock
          answerOptions={quiz?.results}
          chosenAnswers={chosenAnswers}
          ref={answerRef}
        />
      )}
    </div>
  );
};

export default App;
