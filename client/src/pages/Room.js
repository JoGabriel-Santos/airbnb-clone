import React from "react";

function Room() {

    return (
        <section className="section-room">
            <h1 className="room-title">The Valley Lodge: Stunning view and cosiness!</h1>

            <div className="room--info-share-save">
                <div className="room-info">
                    <div className="card-room--rating">
                        <img src={require("../util/images/star.png")} alt=""/>
                        <h4 className="rating">5.0</h4>
                    </div>

                    <img src={require("../util/images/dot.png")} alt=""/>
                    <h2 className="room-info--reviews">40 reviews</h2>
                    <img src={require("../util/images/dot.png")} alt=""/>
                    <h2 className="room-info--location">Alfredo Chaves, State of Espírito Santo, Brazil</h2>
                </div>

                <div className="share-save">
                    <div className="share">
                        <img src={require("../util/images/share.png")} alt=""/>
                        <h2 className="room-info--share">Share</h2>
                    </div>

                    <div className="save">
                        <img src={require("../util/images/save.png")} alt=""/>
                        <h2 className="room-info--save">Save</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Room;