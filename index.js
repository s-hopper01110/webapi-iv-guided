require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`\n*** Server Running on http:localhost ${port} ***\n`);
});


//dev > qa >functional testing > qa > production