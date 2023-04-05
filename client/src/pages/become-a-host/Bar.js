import React from "react";

function Bar(props) {

    return (
        <div>
            <div className="progress-bar">
                <div className="progress-bar--fill"
                     style={{width: `${(props.progress - 1) * 10}%`,}}>
                </div>
            </div>
        </div>
    );
}

export default Bar;