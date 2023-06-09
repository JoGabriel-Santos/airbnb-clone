import React, { useEffect, useRef } from "react";

import data from "../helpers/dataFilters";

function Filters() {
    const sectionRef = useRef(null);

    const handleNavigation = (direction) => {
        const section = sectionRef.current;
        const scrollAmount = 150;

        if (direction === "left") {
            section.scroll({
                left: section.scrollLeft - scrollAmount,
                behavior: "smooth"
            });

        } else if (direction === "right") {
            section.scroll({
                left: section.scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        const filters = document.querySelectorAll(".filter");

        filters.forEach((filter, index) => {
            setTimeout(() => {
                filter.classList.add("fade-animation");

                setTimeout(() => {
                    filter.classList.remove("fade-animation");
                    filter.classList.add("opacity-06");
                }, 500);
            }, index * 100);
        });
    }, []);

    return (
        <div className="section-filters-container">
            <div className="navigation-buttons left">
                <button onClick={() => handleNavigation("left")}>
                    <img src={require("../util/images/left-arrow.png")} alt=""/>
                </button>
            </div>

            <section className="section-filters" ref={sectionRef}>
                {
                    data.map((item, index) => (
                        <div className="filter" key={index}>
                            <img src={item.imageSrc} alt={item.description}/>
                            <h4 className="filter--description">{item.description}</h4>
                        </div>
                    ))
                }
            </section>

            <div className="navigation-buttons right">
                <button onClick={() => handleNavigation("right")}>
                    <img src={require("../util/images/right-arrow.png")} alt=""/>
                </button>
            </div>

            <div className="button-filters">
                <img src={require("../util/images/filters.png")} alt=""/>
                <h4 className="button-filters--description">Filters</h4>
            </div>
        </div>
    )
}

export default Filters;