const express = require('express');
const path = require('path');

const httpPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// === API List ===============================================================================

const accountApi = require('./router/account');
app.use('/account', accountApi);

const categoryApi = require('./router/category');
app.use('/category', categoryApi);

const orderApi = require('./router/order');
app.use('/order', orderApi);

// === Start Web Server =======================================================================

// HTTP Server listen API
app.listen(httpPort, (req, res) => {
    console.log("HTTPS Server Started : Port " + httpPort);
});
