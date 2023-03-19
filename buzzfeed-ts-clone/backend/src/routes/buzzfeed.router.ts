// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import QuizData from "../models/quiz";
import { Questions } from "../models/questions";
import { Answers } from "../models/answers";

// Global Config
export const quizzesRouter = express.Router();

quizzesRouter.use(express.json()); // tells router to use the JSON Parser Middleware

// GET
quizzesRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const quizzes = (await collections.quizzes?.find({}).toArray()) as QuizData[];
        res.status(200).send(quizzes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET Quiz via ID
quizzesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const quiz = (await collections.quizzes?.findOne(query)) as QuizData;

        if (quiz) {
            res.status(200).send(quiz);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

// Get Questions:
quizzesRouter.get("/:id/questions", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const quizzes = (await collections.quizzes?.find({}).toArray()) as QuizData[];
        const filteredQuestions = quizzes[0].questions.filter((item: any) => item != null) as Questions[];
        if (quizzes) {
            res.status(200).send(filteredQuestions);
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

// Get answers:
quizzesRouter.get("/:id/answers", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const quizzes = (await collections.quizzes?.find({}).toArray()) as QuizData[];
        const filteredAnswers = quizzes[0].results.filter((item: any) => item != null) as Answers[];
        if (quizzes) {
            res.status(200).send(filteredAnswers);
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
