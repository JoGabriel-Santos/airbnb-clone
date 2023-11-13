import React from "react";

function Rooms({ roomInfo }) {

    const randomLocation = () => Math.floor(Math.random() * 500) + 1;
    const randomRating   = () => (Math.random() * 5).toFixed(1);

    return (
        <div className="card-room">
            <img className="card-room--photo" src={roomInfo.images[0]} alt=""/>

            <div className="card-room--info-rating">
                <div className="card-room--info">
                    <h2 className="info-city">{roomInfo.location}</h2>
                    <h4 className="info-location">{`${randomLocation()} kilometers away`}</h4>
                    <h4 className="info-duration">5 nights &middot; Apr 10 - 15</h4>

                    <div className="room-price">
                        <h1 className="info-price">${roomInfo.price} USD</h1>
                        <h6 className="info-price--description">night</h6>
                    </div>
                </div>

                <div className="card-room--rating">
                    <img src={require("../util/images/star.png")} alt=""/>
                    <h4 className="rating">{`${randomRating()}`}</h4>
                </div>
            </div>
        </div>
    )
}

export default Rooms;