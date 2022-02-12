import mongoose from "mongoose";
const answerSchema = mongoose.Schema({
    qid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "question"
    },
    uid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    ticks : Number,
    date: String,
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const answer = mongoose.model("answer", answerSchema);
export default answer;