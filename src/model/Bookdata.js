const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/library?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;

const BookSchema= new Schema({
    bookid:Number,
    title:String,
    author:String,
    genre:String,
    imageUrl:String
});


//Model creation
const Bookdata=mongoose.model('book',BookSchema);

module.exports=Bookdata;