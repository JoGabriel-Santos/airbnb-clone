import React, {useEffect, useState} from "react";

function Page_6(props) {

    const [description, setDescription] = useState(props.description);

    useEffect(() => {
        props.savingData(description, "Description");

    }, [description]);

    return (
        <section className="section-page--center container-pages up-animation">
            <div className="page-hero-p5">
                <h2 className="hero--title-p5">Create your description</h2>
                <h6 className="hero--subtitle">Short descriptions work best. Have fun with it—you can always change it later.</h6>

                <div className="hero--header">
                    <textarea
                        cols="30"
                        rows="10"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                </div>
            </div>
        </section>
    )
}

export default Page_6;