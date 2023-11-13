import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";
import CheckboxSwitch from "../components/Switch";
import * as API from "../api/index";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [rooms, setRooms] = useState([]);

    const fetchRooms = async () => {
        try {
            const roomsData = await API.getRooms();
            setRooms(roomsData.data);

        } catch (error) {
            console.error("Error fetching products:", error.message);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            const cards = document.querySelectorAll(".card-room");

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("up-animation");
                }, index * 100);
            });
        }
    }, [isLoading]);

    if (isLoading) {
        return;
    }

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
                        rooms.map((roomInfo, index) => (
                            <Rooms key={index} roomInfo={roomInfo}/>
                        ))
                    }
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;