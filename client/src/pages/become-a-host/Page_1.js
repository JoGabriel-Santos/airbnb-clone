import React from "react";

function Page_1() {

    return (
        <section className="section-page container-pages">
            <div className="page-hero">
                <div className="hero--info up-animation">
                    <h6 className="info-steps">Step 1</h6>
                    <h1 className="info-about">Tell us about your place</h1>

                    <p className="info-description">
                        In this step, we'll ask you which type of property you have and if
                        guests will book the entire place or just a room.
                        Then let us know the location and how many guests can stay.
                    </p>
                </div>

                <div className="hero--video">
                    <video id="video-presentation" autoPlay muted>
                        <source src={require("../../util/videos/about-your-place_1.mp4")} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Page_1;