import level_request from "../models/level_request.js"
import user from "../models/user.js"
export const requestLevelChange = async (req, res)=>{    
    const level = level_request(req.body);
    
    try{
        await level.save();
        res.status(200).json({message: "success"});
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}
export const getLevelChangeRequests = async (req, res)=>{    
    try{
        const requests = await level_request.find({completed:false});
        res.status(409).json(requests);
        } catch(err){
        res.status(409).json({message: err.message});
    }
}
export const processLevelChangeRequest = async (req, res)=>{    
    const stat = req.body.status;
    console.log(stat)
    try{
        if (stat == true) {
            // update user status
            const requ = await level_request.find({'_id': req.body.request_id})
            await user.findOneAndUpdate({'_id' : requ[0].uid},
            {"level":requ[0].d_level}, {upsert: true}
            );

        }
        await level_request.findOneAndUpdate({'_id' : req.body.request_id},
        {'completed':true}, {upsert: true}
        )        
        res.status(409).json({message: "Successfull"});
        } catch(err){
        res.status(409).json({message: err.message});
    }
}
