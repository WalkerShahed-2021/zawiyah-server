import question from "../models/question.js";

export const createQuestion = async (req, res)=>{    
    const newQuestion = question(req.body);
    try{
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}
export const getQuestionsByLevel = async (req, res)=>{    
    const level = req.params.id;
    console.log(level)
    try{
        const ques = await question.find({"level":level});
        res.status(200).json(ques);
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}
export const getAllQuestions = async (req, res)=>{  
    console.log("called all questions")  
    try{
        const ques = await question.find();
        res.status(200).json(ques);
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}

