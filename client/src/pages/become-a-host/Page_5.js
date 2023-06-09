import React, {useEffect, useState} from "react";

function Page_5(props) {

    const [title, setTitle] = useState(props.title);

    useEffect(() => {
        props.savingData(title, "Title");

    }, [title]);

    return (
        <section className="section-page--center container-pages up-animation">
            <div className="page-hero-p5">
                <h2 className="hero--title-p5">Now, let's give your boat a title</h2>
                <h6 className="hero--subtitle">Short titles work best. Have fun with it—you can always change it later.</h6>

                <div className="hero--header">
                    <textarea
                        cols="30"
                        rows="10"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    ></textarea>
                </div>
            </div>
        </section>
    )
}

export default Page_5;