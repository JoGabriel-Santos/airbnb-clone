import React, { useState } from "react";

function CheckboxSwitch() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />

            <span className="slider round"></span>
        </label>
    );
}

export default CheckboxSwitch;