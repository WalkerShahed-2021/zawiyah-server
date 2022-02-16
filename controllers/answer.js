import answer from "../models/answers.js"

export const getUserAnswer = async (req, res)=>{    
    const uid = req.body.uid
    const date = req.body.date
    console.log("getting answer of user")
    try{
        const answers = await answer.find({uid:uid, date:date, isDeleted:false});
        res.status(200).json(answers);
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}
export const addUserAnswer = async (req, res)=>{  
    const dt = req.body
    // var arr = JSON.parse(dt);
    for(var i = 0; i < dt.length; i++)
    {
        const newAns = answer(dt[i]);
        try{
            try{
                await answer.find({uid:newAns.uid, qid:newAns.qid, date:newAns.date}).deleteOne();
            }
            finally{
                await newAns.save();
                // console.log("successfully saved")                
            }
        } catch(err){
            res.status(409).json({message: err.message});
            return;
        }
    } 
    res.status(201).json({message: "Successfully added"});
}
