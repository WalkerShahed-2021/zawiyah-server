import express from "express"
import {getUser, 
    getUsers, 
    createUser, 
    deleteUser, 
    updateUser, 
    loginUser} 
    from '../controllers/user.js'

const router = express.Router();
router.post("/login", loginUser);
router.get("/", getUsers);
router.post("/get", getUser);
router.post("/", createUser);
router.post("/delete", deleteUser);
router.post("/update", updateUser)

export default router;