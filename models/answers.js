import mongoose from "mongoose";
const answerSchema = mongoose.Schema({
    qid : Number,
    uid : Number,
    ticks : Number,
    date: Date,
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const answer = mongoose.model("answer", adminSchema);
export default answer;