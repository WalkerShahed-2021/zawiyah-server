import mongoose from "mongoose";
const questionSchema = mongoose.Schema({    
    question_english : String,
    question_urdu : String,
    ticks : Number,
    level : Number,
    score : {
        type: Number,
        default: 5
    },
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const question = mongoose.model("question", questionSchema);
export default question;