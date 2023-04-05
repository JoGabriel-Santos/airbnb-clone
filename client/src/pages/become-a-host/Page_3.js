import React from "react";

function Page_3() {

    return (
        <section className="section-page container-pages">
            <div className="page-hero">
                <div className="hero--info">
                    <h6 className="info-steps">Step 2</h6>
                    <h1 className="info-about">Make your place stand out</h1>

                    <p className="info-description">
                        In this step, you’ll add some of the amenities your place offers,
                        plus 5 or more photos. Then, you’ll create a title and description.
                    </p>
                </div>

                <div className="hero--video">
                    <video id="video-presentation" autoPlay muted>
                        <source src={require("../../util/videos/about-your-place_2.mp4")} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Page_3;