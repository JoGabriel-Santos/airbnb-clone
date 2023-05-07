import React, { useEffect } from "react";

import propertyType from "../../helpers/dataFilters";

function Page_2(props) {

    useEffect(() => {
        const filters = document.querySelectorAll(".property-type--card");

        filters.forEach((filter, index) => {
            setTimeout(() => {
                filter.classList.add("fade-animation--property");
            }, index * 100);
        });
    }, []);

    return (
        <section className="section-page container-pages">
            <div className="page-hero flex-col">
                <h2 className="hero--title">Which of these best describes your place?</h2>

                <div className="property-type">
                    {
                        propertyType.map((type, key) => (
                            <div className={`property-type--card ${props.propertyTypes.includes(type.description) && "property-type--selected"}`} key={key}
                                 onClick={() => props.savingData(type.description, "Property type")}>

                                <img src={type.imageSrc} alt=""/>
                                <h4 className="type-description">{type.description}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Page_2;