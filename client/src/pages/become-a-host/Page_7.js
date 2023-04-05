import React from "react";

function Page_7() {

    return (
        <section className="section-page container-pages">
            <div className="page-hero">
                <div className="hero--info">
                    <h6 className="info-steps">Step 3</h6>
                    <h1 className="info-about">Finish up and publish</h1>

                    <p className="info-description">
                        Finally, you’ll choose if you'd like to start with an experienced guest,
                        then you'll set your nightly price. Answer a few quick questions and publish when you're ready.
                    </p>
                </div>

                <div className="hero--video">
                    <video id="video-presentation" autoPlay muted>
                        <source src={require("../../util/videos/about-your-place_3.mp4")} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Page_7;