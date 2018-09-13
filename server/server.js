const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

require('./config/config.js');

//Configuracion global de rutas
app.use(require('./routes/index.js'));
app.use(express.static(path.resolve(__dirname, '../public')));




mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw new err;
    console.log('MongoDB Online');

});


app.listen(process.env.PORT, () => {
    console.log(`Listening port ${process.env.PORT}`);
});