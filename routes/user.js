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
router.get("/get:id", getUser);
router.post("/", createUser);
router.get("/delete/:email", deleteUser);
router.post("/update/:id", updateUser)

export default router;