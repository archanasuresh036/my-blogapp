import express from "express";
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
.connect(
    "mongodb+srv://archanasuresh036:U7gojt5e4ZxbWTHk@cluster0.0ctkgxi.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected To Database and Listening To Localhos 5000")
)
.catch((err) => console.log(err));


