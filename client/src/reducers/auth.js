const authReducer = (authData = null, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))

            return { authData: action.data }

        default:
            return authData;
    }
}

export default authReducer;