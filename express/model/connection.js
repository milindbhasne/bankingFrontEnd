mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/banking",{ useMongoClient: true }).
then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err);
})
con = mongoose.connection

module.exports = con