import React from "react";

function Navbar() {

    return (
        <header className="header">
            <a href="">
                <img className="logo" src={require("../util/images/logo.png")} alt=""/>
            </a>

            <div className="header-options">
                <h4 className="header-options--text">Anywhere</h4>
                <h4 className="header-options--text border">Any week</h4>
                <h4 className="header-options--text fw-500">Add guests</h4>

                <div className="header-options--search">
                    <img src={require("../util/images/search.png")} alt=""/>
                </div>
            </div>

            <div className="header-user">
                <h4 className="header-user--home">Airbnb your home</h4>
                <img className="header-user--region" src={require("../util/images/region.png")} alt=""/>

                <div className="header-user--info">
                    <img className="header-user--menu" src={require("../util/images/menu.png")} alt=""/>
                    <img className="header-user--profile" src={require("../util/images/profile.png")} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;