import express from 'express';
import cors from 'cors';
import {articleRouter} from "./routes/index.js";
import mongoose from 'mongoose';
import errorsMiddleware from "./middleware/error-midlevare.js";

// configure
const app = express(); //инициализация приложения
const PORT = 3000;
const DB_CONNECTION = "mongodb://localhost:27017";


app.use(cors({ //отключение cors
    credentials: true,
    origin: "*" //дает делать запрос из любого url 
}));
app.use(express.json());

app.use('/api/articles', articleRouter);
app.use(errorsMiddleware); //обработчик ошибок


const bootstrap = async () => {
    try {
        await mongoose.connect(DB_CONNECTION);
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
}

bootstrap();