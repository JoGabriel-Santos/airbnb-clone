import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";

function OAuth() {

    function handleCallbackResponse(response) {
        const result = jwtDecode(response.credential);

        try {
            localStorage.setItem("user_info", JSON.stringify(result));

        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: "618793263467-re75oee2vlltounou0tuejus4ripr9a9.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        })

        window.google.accounts.id.renderButton(document.getElementById("googleButton"), {
            theme: "outline",
            size: "large",
        })
    })

    return (
        <div id="googleButton">
            <p className="social-network--link">
                <img src={require("../util/images/google.png")} alt=""/>
                Continue with Google
            </p>
        </div>
    )
}

export default React.memo(OAuth);