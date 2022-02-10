import user from '../models/user.js'
import {isAdmin} from './admin.js'
/*
NOTE: 
-> use newUser.generateHash(newUser.password) to encrypt the user password
    This function returns the encrypted password
-> use newUser.validPassword(req.body.password) to validate user password
    This function return either true or false
*/


export const createUser = async (req, res)=>{
    const us = req.body;
    const newUser = user(us);
    newUser.password = newUser.generateHash(us.password)
    
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}

export const updateUser = async (req, res)=>{
    console.log("yes")
    
    const us = req.body;
    const newUser = user(us);
    newUser.password = newUser.generateHash(us.password)
    
    try{
        await newUser.updateOne();
        res.status(201).json(newUser);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}


export const getUsers =  async (req, res)=>{
    try{
        const allUser = await user.find();
        res.status(200).json(allUser);
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}
export const loginUser =  async (req, res)=>{
    // console.log(res.body);
    if ('username' in req.body){
        if (await isAdmin(req.body)){
            res.status(200).json({message: "admin logged in"});
        }
        else{
            res.status(404).json({message: "admin not found"});
        }
    }
    else{
        user.findOne({email: req.body.email}, (err, us) => {
            if (us){
                if (!us.validPassword(req.body.password)) {
                    res.status(404).json({message: "failed"});
                } else {
                    res.status(200).json({message: "success"});
                }
            }
            else{
                res.status(404).json({message: "failed"});
            }       
          });
    }   
}
export const getUser =  async (req, res)=>{
    const id = req.params.id;
    try{
        const us = await user.findById(id);
        res.status(200).json(us);
    }
    catch (error){
        res.status(404).json({message : error.message})
    }
}

export const deleteUser = async (req, res)=>{
    const id = req.params.email;
    console.log(id)
    try{
        await user.find({email:id}).remove().exec();
        res.status(201).json({message: "successfully deleted"});
    } catch(err){
        res.status(409).json({message: err.message});
    }
}