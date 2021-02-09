var express = require('express');
var testRoutes = require('./routes/test/test');
const app = express();
const port = 3000;

app.use('/test', testRoutes);

app.listen(port, () => {
    console.log("listening to port " + port);
});