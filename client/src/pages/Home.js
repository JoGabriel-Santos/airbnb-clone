import React from "react";

import Navbar from "../components/Navbar";
import CheckboxSwitch from "../components/Switch";
import Room from "../components/Room";

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
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                    <Room/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;