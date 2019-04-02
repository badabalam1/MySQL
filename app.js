import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config/config';

import routes from './routes';

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', routes);

app.listen(config.PORT, () => {
    console.log(`Server listen to port ${config.PORT}`)
})