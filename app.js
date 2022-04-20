 const mongoose = require("mongoose");
 const {MongoClient} = require('mongodb');
 const mysql = require("mysql");

 function mongoCon() {
 	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect('mongodb://localhost:27017/myapp', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
    }

    const userSchema = mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        number: { type: Number, required: true },
    });

    const User = mongoose.model("User", userSchema);

    const filter = {};
    const all = User.find({}, function(err, docs) {
        if(err) console.log(err);
        else console.log({users: docs});
    });
}

function mysqlCon() {
    const db = mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : '',
        database : 'User' 
    });
    
    db.connect((error,result) => {
        if(error){
            console.log('mysql connection failed');
        } else {
            console.log('mysql connected');
        };
    });
    
 
}

mongoCon();
mysqlCon();

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
