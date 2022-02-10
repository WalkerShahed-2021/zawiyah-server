import express from "express"
import {
    createQuestion, 
    getQuestionsByLevel,
    getAllQuestions
    } 
    from '../controllers/question.js'


const router = express.Router();
router.get("/", getAllQuestions);
router.get("/:id", getQuestionsByLevel);
router.post("/add", createQuestion);


export default router;