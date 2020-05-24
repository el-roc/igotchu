const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _id: String,
    userId: String,
    itemName : String,
    itemPrice: Number,
    itemDescription: String,
    itemCategory: String,
    itemMedium: String,
    itemLocation: String,
    boughtBy: String,
    imageURL: String,
    imageName: String,
    imagedata: String,
    email: String
})


module.exports = Post = mongoose.model('posts', PostSchema)