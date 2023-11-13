import React, {useEffect, useState} from "react";

function Page_7(props) {

    const [location, setLocation] = useState(props.location);

    useEffect(() => {
        props.savingData(location, "Location");

    }, [location]);

    return (
        <section className="section-page--center container-pages up-animation">
            <div className="page-hero-p5">
                <h2 className="hero--title-p5">Set your location</h2>
                <h6 className="hero--subtitle">Please provide the exact location of your house for rent.</h6>

                <div className="hero--header">
                    <textarea
                        cols="30"
                        rows="10"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    ></textarea>
                </div>
            </div>
        </section>
    )
}

export default Page_7;