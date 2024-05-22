const app = require('./app'); 

const db = require('./config/db'); 

const PORT = process.env.PORT || 3000; 

 

db.connect(); 

 

app.listen(PORT, () => { 

    console.log(`Server running on port ${PORT}`); 

}); 