import { ObjectId } from "mongodb";
import { Questions } from "./questions";
import { Answers } from "./answers";

export default class QuizData {
    constructor(
        public id?: ObjectId,
        public quizId?: string,
        public title?: string,
        public subtitle?: string,
        public questions?: Questions[],
        public results?: Answers[],
    ) {}
}
