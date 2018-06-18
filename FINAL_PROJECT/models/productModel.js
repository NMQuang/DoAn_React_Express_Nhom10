var mongoose = require('mongoose');

var schema = mongoose.Schema;

//create schema
var productSchema = new schema({
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: schema.Types.ObjectId, ref: 'Brand' },
    category: { type: schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, required: true },
    view: { type: Number, default: 0 },
    purchases: { type: Number, default: 0 }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;