const server = require('./api/server');
//eslint-disable-next-line no-unused-vars
const colors = require('colors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`***server listening on port ${PORT}***`.america);
})
