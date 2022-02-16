import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import key  from "./config/keys.js";
import userRouter from './routes/user.js'
import questionRouter from './routes/question.js'
import answerRouter from './routes/answer.js'
import videoRouter from './routes/landing_video.js'
import levelRequestRouter from './routes/level_request.js'

// import { deleteUser } from "./controllers/user.js";

const app = express();
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

app.use(cors());

// app.delete("/:email", deleteUser);

app.use("/user", userRouter);
app.use("/question", questionRouter);
app.use("/answer", answerRouter);
app.use("/video", videoRouter);
app.use("/request", levelRequestRouter);

const port = process.env.PORT || 5000


mongoose.connect(key.mongoURI) 
.then(() => app.listen(port, () => console.log(`Server started at port ${port}...`)))
.catch(err => console.log(err))
