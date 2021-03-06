const app = require('./app')
const connectDatabase = require('./config/database')

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down due to uncaught exception');
  process.exit(1)
})




 const dotenv= require('dotenv');

 // setting up config file
  dotenv.config({path:'Backend/config/config.env'})

  // Connecting to database
connectDatabase();
// Route
app.use("/user", require("./routes/user"));

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});
// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => {
      process.exit(1)
  })
})