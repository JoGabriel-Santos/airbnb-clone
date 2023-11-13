import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hostName:{
        type: String,
        required: true,
    },
    hostPicture:{
        type: String,
        required: true,
    },
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
    location: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;