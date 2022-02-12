import express from "express"
import {
    createQuestion, 
    getQuestionsByLevel,
    getAllQuestions,
    deleteQuestion
    } 
    from '../controllers/question.js'


const router = express.Router();
router.get("/", getAllQuestions);
router.post("/get_by_level", getQuestionsByLevel);
router.post("/add", createQuestion);
router.post("/delete", deleteQuestion);


export default router;