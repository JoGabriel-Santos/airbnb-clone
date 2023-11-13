import Room from "../../models/room.js";

export const getRooms = async (request, response) => {
    try {
        const roomList = await Room.find();

        response.status(200).json(roomList);

    } catch (error) {
        handleError(response, error);
    }
};

export const getRoomById = async (request, response) => {
    const { id_room } = request.params;

    try {
        const room = await Room.findOne({ _id: id_room });

        if (!room) {
            return response.status(404).json({ message: "Room not found" });
        }

        response.status(200).json(room);

    } catch (error) {
        handleError(response, error);
    }
};

export const publishRoom = async (request, response) => {
    try {
        const roomInfo = request.body;

        const newRoom = new Room(roomInfo);
        await newRoom.save();

        response.status(200).json({ message: "Room published successfully" });

    } catch (error) {
        handleError(response, error);
    }
};

function handleError(response, error) {
    console.error(error); // Log the error for debugging purposes
    response.status(500).json({ message: "An error occurred" });
}