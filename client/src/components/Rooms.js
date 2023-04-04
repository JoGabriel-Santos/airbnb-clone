import React from "react";

function Rooms(props) {

    return (
        <div className="card-room">
            <img className="card-room--photo" src={props.image} alt=""/>

            <div className="card-room--info-rating">
                <div className="card-room--info">
                    <h2 className="info-city">Icapuí, Brazil</h2>
                    <h4 className="info-location">157 kilometers away</h4>
                    <h4 className="info-duration">5 nights &middot; Apr 10 - 15</h4>

                    <div className="room-price">
                        <h1 className="info-price">$75 USD</h1>
                        <h6 className="info-price--description">night</h6>
                    </div>
                </div>

                <div className="card-room--rating">
                    <img src={require("../util/images/star.png")} alt=""/>
                    <h4 className="rating">5.0</h4>
                </div>
            </div>
        </div>
    )
}

export default Rooms;