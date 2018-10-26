
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema(
    {
        _id: String,
        id:Number,
        UserId:String,
        Name: String,
        Price: Number,
        Images: String
    }
);

var cartDetails = mongoose.model('cartDetails', cartSchema);

module.exports = cartDetails;
