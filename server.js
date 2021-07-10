const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
// Returns to us an object that we can use to put routes/middlewares on
const app = express();
// Listening to requests on a specific PORT on our machine that we opened up
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/', htmlRoutes);
app.use('/api',apiRoutes);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))


