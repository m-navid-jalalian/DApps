var express = require('express');
var app = express (); //we can access the property of express by app variable

//make these paths as ano known path that all files in there can be called directly
app.use(express.static('src'));
app.use(express.static('../contract/build/contracts'));

app.get('/',function(req,res){ // set the express that when clients enter the domain
    res.render('index.html');  // which file will response to them
});

//set a port for our website
app.listen(3000, function(){
    console.log('Your DApp listennig on port 3000!'); //use console.log for test the listennig and port 
});