import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import {mongoconnection} from './db';
mongoconnection();
app.use(cors({origin:"*"}));
// import router from "./router/machineRoute";
const router = require('./router/user');


app.use(bodyParser.urlencoded(
    {
        extended:true
    }));
app.use(bodyParser.json());

// app.use("/user",router);

// app.use((err, req, res, next) => {
//     if (err.name === 'ValidationError') {
//       const errors = {};
//       for (const field in err.errors) {
//         errors[field] = err.errors[field].message;
//       }
//       return res.status(400).json({ errors });
//     }
//     next(err);
//   });
app.use("/user",router)

export default app;