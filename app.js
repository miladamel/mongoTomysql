 const mongoose = require("mongoose");
 const {MongoClient} = require('mongodb');
 const mysql = require("mysql");


//mongodb connection and fetch data
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
       else {
        for(var i = 0; i < docs.length; i++) {
            //console.log(docs[i].firstName);
            db.query('INSERT INTO User (first, last, phno, email)  VALUES (?)',[[docs[i].firstName,docs[i].lastName,docs[i].number,docs[i].email]], (error, result) => {
                if (result) {
                    console.log('db migration successfully');
                } else {
                    console.log(error);
                }
            })
        } 
       }
    });

//mysql connection
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

    for (let i = 0; i < 0 ;i++) {
        const element = array[i];
        db.query('INSERT INTO User (first) VALUES (?)', [[firstName]],(error, result) => {
            if(error) console.log(error);
            else console.log('Done')
        })
    }



