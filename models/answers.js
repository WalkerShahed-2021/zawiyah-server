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
answerSchema.index({'qid': 1, 'uid': 1, 'date': 1}, {unique: true});
const answer = mongoose.model("answer", answerSchema);
export default answer;