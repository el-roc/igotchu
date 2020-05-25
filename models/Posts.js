const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    itemName : String,
    itemPrice: Number,
    itemDescription: String,
    itemCategory: String,
    // itemMedium: String,
    itemLocation: String,
    // boughtBy: String,
    imagePath: String,
    email: String
})


module.exports = Post = mongoose.model('posts', PostSchema)