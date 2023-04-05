import React from "react";

function ScrollBar(props) {

    return (
        <section className="section--header-scrollbar">
            <div className="buttons-scrollbar">
                <div className="button-back" onClick={props.back}><a href="#">Back</a></div>
                <div className="button-next" onClick={props.next}>Next</div>
            </div>
        </section>
    )
}

export default ScrollBar;