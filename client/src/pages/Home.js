import React from "react";

import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";
import CheckboxSwitch from "../components/Switch";

function Home() {

    return (
        <React.Fragment>
            <Navbar/>

            <section className="section-total-price">
                <div className="total-price">
                    <div className="total-price--description">
                        <h3 className="total-price--text">
                            Display total price
                        </h3>

                        <p className="total-price--paragraph border">
                            Includes all fees, before taxes
                        </p>
                    </div>

                    <CheckboxSwitch/>
                </div>
            </section>

            <section className="section-rooms">
                <div className="rooms-grid">
                    <Rooms image={require("../util/images/room-example.webp")}/>
                    <Rooms image={require("../util/images/room-example-2.webp")}/>
                    <Rooms image={require("../util/images/room-example-3.webp")}/>
                    <Rooms image={require("../util/images/room-example-4.webp")}/>
                    <Rooms image={require("../util/images/room-example-5.webp")}/>
                    <Rooms image={require("../util/images/room-example-6.webp")}/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;