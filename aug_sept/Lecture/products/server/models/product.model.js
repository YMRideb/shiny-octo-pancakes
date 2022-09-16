const {default: mongoose} = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Your product needs a name"]
        },

        price: {
            type: Number,
            required: [true, "Your product needs a price, player"],
            min: [1, "Dollar store prices"]
        },

        description: {
            type: String,
            required: [true, "I need a little more than that"]
        }
    },
    {timestamps: true}
);

const Product = mongoose.model('product', ProductSchema);
module.exports = {Product: Product};