"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuizData {
    id;
    quizId;
    title;
    subtitle;
    questions;
    results;
    constructor(id, quizId, title, subtitle, questions, results) {
        this.id = id;
        this.quizId = quizId;
        this.title = title;
        this.subtitle = subtitle;
        this.questions = questions;
        this.results = results;
    }
}
exports.default = QuizData;
//# sourceMappingURL=quiz.js.map