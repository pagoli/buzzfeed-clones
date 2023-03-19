import express from "express";
import { connectToDatabase } from "./services/database.service";
import { quizzesRouter } from "./routes/buzzfeed.router";

const app = express();

connectToDatabase()
    .then(() => {
        app.use(express.urlencoded({ extended: true }));
        app.use((_, res, next) => {
            res.set("Access-Control-Allow-Origin", "*"); // or 'localhost:8888'
            res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            return next();
        });
        app.use("/quizzes", quizzesRouter);

        app.listen(process.env.PORT, () => {
            console.log(`Server started at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
