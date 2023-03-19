import React from "react";
import { QuizData } from "../interfaces";

type Props = {
  title: QuizData["title"];
  subtitle: QuizData["subtitle"];
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export { Title };
