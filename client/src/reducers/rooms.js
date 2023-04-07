const roomsReducer = (rooms = [], action) => {
    switch (action.type) {
        case "FETCH_ROOMS":
            return action.payload;

        case "CREATE_ROOM":
            return [...rooms, action.payload];

        default:
            return rooms;
    }
}

export default roomsReducer;