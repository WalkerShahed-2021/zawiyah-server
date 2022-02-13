import mongoose from "mongoose";
const landingSchema = mongoose.Schema({    
    title : String,
    link : String,
    order : { type: Number, unique: true },        
});

const landing = mongoose.model("landingVideos", landingSchema);
export default landing;