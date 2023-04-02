import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import Login from "./Login";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [bgOpacity, setBgOpacity] = useState(0)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    function handleMenuClick() {
        setShowMenu(!showMenu);
    }

    function toggleShowLogin() {
        setShowLogin(!showLogin);

        if (showLogin) {
            setBgOpacity(0);

        } else {
            setBgOpacity(0.6);
        }
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1200px)');
        setIsSmallScreen(mediaQuery.matches);

        const handleMediaQueryChange = (e) => setIsSmallScreen(e.matches);
        mediaQuery.addListener(handleMediaQueryChange);

        return () => mediaQuery.removeListener(handleMediaQueryChange);
    }, []);

    return (
        <React.Fragment>
            <header className="header">
                <a href="">
                    {
                        !isSmallScreen ? (
                            <img className="logo" src={require("../util/images/logo.png")} alt=""/>
                        ) : (
                            <img className="logo-small" src={require("../util/images/logo-2.png")} alt=""/>
                        )
                    }
                </a>

                <div className="header-options">
                    <h4 className="header-options--text">Anywhere</h4>
                    <h4 className="header-options--text border">Any week</h4>
                    <h4 className="header-options--text fw-400">Add guests</h4>

                    <div className="header-options--search">
                        <img src={require("../util/images/search.png")} alt=""/>
                    </div>
                </div>

                <div className="header-user">
                    <h4 className="header-user--home">Airbnb your home</h4>
                    <img className="header-user--region" src={require("../util/images/region.png")} alt=""/>

                    <div className="header-user--info" onClick={handleMenuClick}>
                        <img className="header-user--menu" src={require("../util/images/menu.png")} alt=""/>
                        <img className="header-user--profile" src={require("../util/images/profile.png")} alt=""/>
                    </div>

                    {
                        showMenu && (
                            <div className="header-user--options">
                                <ul className="options-list">
                                    <li className="option" onClick={toggleShowLogin}>Log in</li>
                                    <li className="option">Sign up</li>
                                    <li className="option">Airbnb your home</li>
                                    <li className="option">Host an experience</li>
                                    <li className="option">Help</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </header>

            {
                showLogin && <Login closeLogin={toggleShowLogin}/>
            }

            <div
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
                    position: "fixed",
                    pointerEvents: showLogin ? "auto" : "none",
                    transition: "background-color .4s ease-in-out",
                    zIndex: "999",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />

            <Filters/>

        </React.Fragment>
    )
}

export default Navbar;