const mongoose = require('mongoose');
const app = require('./config/express');
const config = require('./config/env');

// connect to mongo db
mongoose.connect(`mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`, {useNewUrlParser: true});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.database}`);
});

// print mongoose logs in dev env
mongoose.set('debug', config.mongoose_debug);

const port = parseInt(process.env.PORT, 10) || config.express_port;

app.listen(port, () => {
  console.log(`The server is running at localhost: ${port}`);
});
