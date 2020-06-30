const server = require('./app');

const mongoose = require('mongoose');
console.log(mongoose.connection.readyState);

const port = process.env.PORT || 8085;
server.listen(port, () => console.log(`Running on port ${port}`))
