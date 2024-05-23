/**these lines of code mainly deal with importing modules and setting up environment variables */
const app = require('./app'); 
const db = require('./config/db'); 
const PORT = process.env.PORT || 3000; 

/**This line invokes a function 'connect' from the db module,to establish a connection to the database. */
db.connect(); 

 
/**this line involves starting the server */
app.listen(PORT, () => { 

    console.log(`Server running on port ${PORT}`); 

}); 