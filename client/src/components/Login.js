import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Login() {

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </motion.div>
        </AnimatePresence>
    )
}

export default Login;