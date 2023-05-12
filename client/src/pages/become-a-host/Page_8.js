import React, { useState } from "react";

function Page_8() {

    const [price, setPrice] = useState(0);

    return (
        <section className="section-page--center container-pages up-animation">
            <div className="page-hero-p5">
                <h2 className="hero--title-p5">Now, set your price</h2>
                <h6 className="hero--subtitle">You can change it anytime.</h6>

                <div className="hero--price">
                    <div className="hero--price-buttons">
                        <div className="hero--price-less">
                            <img src={require("../../util/images/less.png")} alt=""/>
                        </div>

                        <div className="price-per-night">
                            <span>$</span>
                            <input type="number"/>
                        </div>

                        <div className="hero--price-more">
                            <img src={require("../../util/images/more.png")} alt=""/>
                        </div>
                    </div>

                    <h6 className="price-description">per night</h6>
                    <h4 className="price-info--become-a-host">Places like yours in your area usually range from $112 to $190</h4>
                </div>
            </div>
        </section>
    )
}

export default Page_8;