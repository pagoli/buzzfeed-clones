"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizzesRouter = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
// Global Config
exports.quizzesRouter = express_1.default.Router();
exports.quizzesRouter.use(express_1.default.json()); // tells router to use the JSON Parser Middleware
// GET
exports.quizzesRouter.get("/", async (_req, res) => {
    try {
        const quizzes = (await database_service_1.collections.quizzes?.find({}).toArray());
        res.status(200).send(quizzes);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
// GET Quiz via ID
exports.quizzesRouter.get("/:id", async (req, res) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const quiz = (await database_service_1.collections.quizzes?.findOne(query));
        if (quiz) {
            res.status(200).send(quiz);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
// Get Questions:
exports.quizzesRouter.get("/:id/questions", async (req, res) => {
    const id = req?.params?.id;
    try {
        const quizzes = (await database_service_1.collections.quizzes?.find({}).toArray());
        const filteredQuestions = quizzes[0].questions.filter((item) => item != null);
        if (quizzes) {
            res.status(200).send(filteredQuestions);
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
// Get answers:
exports.quizzesRouter.get("/:id/answers", async (req, res) => {
    const id = req?.params?.id;
    try {
        const quizzes = (await database_service_1.collections.quizzes?.find({}).toArray());
        const filteredAnswers = quizzes[0].results.filter((item) => item != null);
        if (quizzes) {
            res.status(200).send(filteredAnswers);
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
//# sourceMappingURL=buzzfeed.router.js.map