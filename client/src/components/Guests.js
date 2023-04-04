import React from "react";

function Guests(props) {

    return (
        <li className="option guest-opacity">
            <div className="option--guest">
                <div className="guest-age">
                    <h2 className="category-name">{props.categoryName}</h2>
                    <h5 className="category-ages">{props.categoryAges}</h5>
                </div>

                <div className="guest-quantity">
                    <div className="quantity-less">
                        <img src={require("../util/images/less.png")} alt=""/>
                    </div>

                    <h2 className="quantity">1</h2>

                    <div className="quantity-more">
                        <img src={require("../util/images/more.png")} alt=""/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Guests;