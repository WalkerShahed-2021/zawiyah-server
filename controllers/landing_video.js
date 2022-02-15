import landing from '../models/landing_video.js'

export const store_video = async (req, res)=>{
    const us = req.body;
    const video = landing(us);    
    try{
        await video.save();
        res.status(201).json({message: "Success"});
    } catch(err){
        res.status(409).json({message: err.message});
    }
}

export const deleteVideo = async (req, res)=>{
    const id = req.body.id;
    console.log(id)
    try{
        await landing.find({_id:id}).deleteOne();
        res.status(201).json({message: "successfully deleted"});
    } catch(err){
        res.status(409).json({message: err.message});
    }
}

export const get_all_videos = async (req, res)=>{    
    try{
        const videos = await landing.find();
        res.status(201).json(videos);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}
get_all_videos