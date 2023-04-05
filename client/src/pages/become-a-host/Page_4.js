import React from "react";

function Page_4() {

    return (
        <section className="section-page container-pages">
            <div className="page-hero flex-col">
                <h2 className="hero--title">Ta-da! How does this look?</h2>

                <div className="room--images-m0">
                    <div className="images-grid-2">
                        <img className="image-big" src={require("../../util/images/room-example.webp")} alt=""/>

                        <div className="images-grid-4">
                            <img className="image-small" src={require("../../util/images/room-example-2.webp")} alt=""/>
                            <img className="image-small" src={require("../../util/images/room-example-3.webp")} alt=""/>
                            <img className="image-small" src={require("../../util/images/room-example-4.webp")} alt=""/>
                            <img className="image-small" src={require("../../util/images/room-example-5.webp")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page_4;