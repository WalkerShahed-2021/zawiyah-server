import express from "express"
import {
    getUserAnswer,
    addUserAnswer
    } 
    from '../controllers/answer.js'


const router = express.Router();
router.post("/", getUserAnswer);
router.post("/add", addUserAnswer);


export default router;