"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const buzzfeed_router_1 = require("./routes/buzzfeed.router");
const app = (0, express_1.default)();
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((_, res, next) => {
        res.set("Access-Control-Allow-Origin", "*"); // or 'localhost:8888'
        res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return next();
    });
    app.use("/quizzes", buzzfeed_router_1.quizzesRouter);
    app.listen(process.env.PORT, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map