


var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/example');


var bookSchema = new mongoose.Schema(  
{  
    name: String,  
    isbn:  
    {  
        type: String,  
        index: true  
    },  
    author: String,  
    pages: Number,  
    description:  
    {  
        type: String  
    },  
    added_date:  
    {  
        type: Date,  
        default: Date.now  
    }  
});

var userSchema = new mongoose.Schema({

	userEmail : String,
    userPassword : String

});





var user = mongoose.model('user', userSchema);
var book = mongoose.model('book', bookSchema);


module.exports = {  
    Book: book,
    User: user
}; 