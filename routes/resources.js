import express from "express"
import {
    addResource,
    updateResource,
    deleteResource,
    getResources
    } 
    from '../controllers/resources.js'


const router = express.Router();
router.post("/", addResource);
router.get("/", getResources);
router.post("/update", updateResource);
router.post("/delete", deleteResource);

export default router;