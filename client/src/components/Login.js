import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import OAuth from "./OAuth";

function Login(props) {

    return (
        <AnimatePresence>
            <motion.div
                className="login-container"
                animate={{y: 0, opacity: 1}}
                initial={{y: "100vh", opacity: 0}}
                exit={{y: "100vh", opacity: 0}}
                transition={{duration: 0.5}}
            >

                <div className="login-container--content">
                    <div className="content--header">
                        <img
                            className="header-close"
                            onClick={props.closeLogin}
                            src={require("../util/images/close.png")}
                            alt=""
                        />

                        <h2 className="header-title">Log in or sign up</h2>
                    </div>

                    <div className="content--user">
                        <h1 className="user-title">Welcome to Airbnb</h1>

                        <div className="content--social-networks">
                            <OAuth/>

                            <hr/>

                            <div className="social-network">
                                <p className="social-network--link">
                                    <img src={require("../util/images/facebook.png")} alt=""/>
                                    Continue with Facebook
                                </p>
                            </div>

                            <div className="social-network">
                                <p className="social-network--link">
                                    <img src={require("../util/images/apple.png")} alt=""/>
                                    Continue with Apple
                                </p>
                            </div>

                            <div className="social-network">
                                <p className="social-network--link">
                                    <img src={require("../util/images/email.png")} alt=""/>
                                    Continue with email
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Login;