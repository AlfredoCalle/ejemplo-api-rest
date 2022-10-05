import express from 'express';
import appRouter from './routes/app.route.js'

const PORT = 3000;
const app = express();

// Motor de vista
app.set('view engine', 'ejs');

app.use('/', appRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});