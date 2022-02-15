import express from "express"
import {
    store_video,
    deleteVideo,
    get_all_videos
    } 
    from '../controllers/landing_video.js'


const router = express.Router();
router.post("/", store_video);
router.get("/", get_all_videos);
router.post("/delete", deleteVideo);
export default router;