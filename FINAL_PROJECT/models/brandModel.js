var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

var schema = mongoose.Schema;

//create schema
var brandSchema = new schema({
    brandId: { type: String, required: true, unique: true },
    brandName: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String },
    foundedYear: { type: String },
    createdAt: { type: Date, required: true }
});

var Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;