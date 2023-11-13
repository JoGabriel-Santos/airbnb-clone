import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    propertyTypes: {
        type: [String],
        default: [],
        required: false,
    },
    images: {
        type: [String],
        default: [],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model("Product", productSchema);

export default Product;