import express from "express";
import { PORT } from "./config.js";
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cors from 'cors'
import {dirname, join} from 'path'
import { fileURLToPath } from "url";

const app = express()

const whitelist = [
    "http://localhost:5173/",
    "http://localhost:4000/",
    "https://mern-con-mysql.vercel.app",
    "https://mern-con-mysql-bsrghwbt9-fbonilla02.vercel.app"
]

const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else{
            callback(new Error("Not allowed by CORS"))
        }
    }
}

app.use(cors(corsOptions));

app.use(express.json())
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(indexRoutes)
app.use(taskRoutes)

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT)

console.log(`server is running on port ${PORT}`);