import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";
import CheckboxSwitch from "../components/Switch";

function Home() {

    const [rooms, setRooms] = useState([
        require("../util/images/room-example.webp"),
        require("../util/images/room-example-2.webp"),
        require("../util/images/room-example-3.webp"),
        require("../util/images/room-example-4.webp"),
        require("../util/images/room-example-5.webp"),
        require("../util/images/room-example-6.webp"),
    ]);

    useEffect(() => {
        const cards = document.querySelectorAll(".card-room");

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("up-animation");
            }, index * 100);
        });
    }, []);

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
                    {
                        rooms.map((image, index) => (
                            <Rooms key={index} image={image}/>
                        ))
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;