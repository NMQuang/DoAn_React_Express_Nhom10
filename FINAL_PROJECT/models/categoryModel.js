var mongoose = require('mongoose');

var schema = mongoose.Schema;

//create schema
var categorySchema = new schema({
    categoryId: { type: String, required: true, unique: true },
    categoryName: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true }
});

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;