import admin from '../models/admin.js'

export const isAdmin =  async (req)=>{    
    const allUser = await admin.find({where: {username: req.username, password: req.password}});
    if (allUser.length > 0){
        return true;
    }
    else{
        return false;
    }
}
