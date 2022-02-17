import express from "express"
import {
    requestLevelChange,
    getLevelChangeRequests,
    processLevelChangeRequest
    } 
    from '../controllers/level_request.js'


const router = express.Router();
router.post("/", requestLevelChange);
router.get("/", getLevelChangeRequests);
router.post("/process", processLevelChangeRequest);
export default router;