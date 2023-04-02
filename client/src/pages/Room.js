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

            <div className="room--images">
                <div className="images-grid-2">
                    <img className="image-big" src={require("../util/images/room-example-2.webp")} alt=""/>

                    <div className="images-grid-4">
                        <img className="image-small" src={require("../util/images/room-example-2.webp")} alt=""/>
                        <img className="image-small" src={require("../util/images/room-example-2.webp")} alt=""/>
                        <img className="image-small" src={require("../util/images/room-example-2.webp")} alt=""/>
                        <img className="image-small" src={require("../util/images/room-example-2.webp")} alt=""/>
                    </div>
                </div>
            </div>

            <div className="room-reserve">
                <div className="reserve">
                    <div className="reserve--host">
                        <div className="host-info">
                            <h2 className="host-title">Entire chalet hosted by Alfredo Chaves</h2>

                            <div className="host-benefits">
                                <h2 className="benefits">6 guests</h2>
                                <img src={require("../util/images/dot.png")} alt=""/>
                                <h2 className="benefits">3 bedrooms</h2>
                                <img src={require("../util/images/dot.png")} alt=""/>
                                <h2 className="benefits">3 beds</h2>
                                <img src={require("../util/images/dot.png")} alt=""/>
                                <h2 className="benefits">3 baths</h2>
                            </div>
                        </div>

                        <img className="host-image" src={require("../util/images/host-example.jpg")} alt=""/>
                    </div>

                    <div className="reserve--info">
                        <div className="info--aircover">
                            <img src={require("../util/images/aircover.webp")} alt=""/>

                            <p className="aircover-paragraph">
                                Every booking includes free protection from Host cancellations,
                                listing inaccuracies, and other issues like trouble checking in.
                            </p>

                            <div className="aircover-more">
                                <p>Learn more</p>
                            </div>
                        </div>

                        <div className="info--detailed">
                            <p>
                                The Chalet of the Valley is surrounded by nature, becoming the ideal refuge for those
                                looking for the fresh air of the mountains, pleasant climate, singing of birds and tranquility.
                                Our space has the best view of the surroundings, 3 STIs, lawn area, barbecue, wood stove,
                                sauna and beautiful garden. Located in a gated community in the middle of the Alfredo Chaves Atlantic Forest,
                                our wooden chalet is very cozy and boasts an unforgettable breathtaking view.
                            </p>

                            <div className="show-more">
                                <p>Show more</p>
                                <img src={require("../util/images/show-more.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reserve--price">

                </div>
            </div>

        </section>
    )
}

export default Room;