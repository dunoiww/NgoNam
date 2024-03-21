import React, { memo } from "react";

function Content({ handleClick }) {
    console.log("render content");
    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default memo(Content);
