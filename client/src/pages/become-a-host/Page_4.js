import React, {useEffect, useState} from "react";

function Page_4(props) {
    const [images, setImages] = useState([]);

    const convertToBase64 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            if (images.length <= 4) {
                props.savingData(reader.result.toString(), "Images");
            }
        };
    }

    useEffect(() => {
        const cards = document.querySelectorAll(".image-small");

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("up-animation");
            }, index * 100);
        });
    }, []);

    useEffect(() => {
        setImages(props.images);
    });

    return (
        <section className="section-page container-pages">
            <div className="page-hero flex-col">
                <h2 className="hero--title">Ta-da! How does this look?</h2>

                <div className="room--images-m0">
                    <div className="images-grid-2">
                        <img
                            className="image-big image-border up-animation"
                            src={images[0] || require("../../util/images/image-upload.png")}
                            alt=""
                            onClick={() => document.getElementById("file-input").click()}
                        />

                        <div className="images-grid-4">
                            {[1, 2, 3, 4].map((index) => (
                                <img
                                    key={index}
                                    className="image-small image-border"
                                    src={images[index] || require("../../util/images/image-upload.png")}
                                    alt=""
                                    onClick={() => document.getElementById("file-input").click()}
                                />
                            ))}
                        </div>
                    </div>

                    <input className="input-image" type="file" id="file-input" onChange={event => convertToBase64(event)}/>
                </div>
            </div>
        </section>
    )
}

export default Page_4;