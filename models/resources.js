import mongoose from "mongoose";
const resourceSchema = mongoose.Schema({    
    title: String,

    type : {
        type: String,
        enum: ['pdf', 'video']
    },
    url : String,
    order : {
        type: Number
    },    
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const resources = mongoose.model("resources", resourceSchema);
export default resources;