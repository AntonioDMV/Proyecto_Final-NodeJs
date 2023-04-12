const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');
const errorHandlerRouter = require('./routes/errorHandler.routes')


initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 8000;

db.authenticate()
    .then(() => {
    console.log('Base de datos Conectada')
 }) 
    .catch((error) => console.log(error))


db.sync({alter: true})
    .then(() => console.log('Base de datos Sync'))
    .catch((error) => console.log(error))


app.use(userRoutes);
app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.get('/', ( req, res ) => {
    res.send('welcome to my API');
});


errorHandlerRouter(app);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})