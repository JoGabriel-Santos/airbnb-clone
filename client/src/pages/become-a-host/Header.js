import React from "react";

function Header() {

    return (
        <section className="section--header-scrollbar">
            <img className="header--img" src={require("../../util/images/logo-header.png")} alt=""/>

            <div className="header--buttons">
                <div className="buttons">Questions?</div>
                <div className="buttons">Save & exit</div>
            </div>
        </section>
    )
}

export default Header;