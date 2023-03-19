import { Option } from "../interfaces";

type Props = {
  option: Option;
  setChosenAnswers: Function;
  chosenAnswers: string[];
  setUnansweredQuestionsIds: Function;
  unansweredQuestionsIds: number[] | undefined;
  quizItemId: number;
};

const QuestionBlock = ({
  option,
  setChosenAnswers,
  chosenAnswers,
  setUnansweredQuestionsIds,
  unansweredQuestionsIds,
  quizItemId,
}: Props) => {
  const handleClick = () => {
    setChosenAnswers((prevState: string[]) => [...prevState, option.text]);
    setUnansweredQuestionsIds(
      unansweredQuestionsIds?.filter((id) => id !== quizItemId)
    );
  };

  const validPick =
    !chosenAnswers?.includes(option?.text) &&
    !unansweredQuestionsIds?.includes(quizItemId);

  return (
    <button className="answer-block" onClick={handleClick} disabled={validPick}>
      <img src={option.image} alt={option.alt} />
      <h3>{option.text}</h3>
      <p>
        <a href={option.image}>Source: </a>
        <span>{option.credit}</span>
      </p>
    </button>
  );
};

export default QuestionBlock;
