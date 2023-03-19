"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    question;
    answers;
    category;
    id;
    questionId;
    constructor(question, answers, category, id, questionId) {
        this.question = question;
        this.answers = answers;
        this.category = category;
        this.id = id;
        this.questionId = questionId;
    }
}
exports.default = Question;
//# sourceMappingURL=question.js.map