import React, { useState } from "react";

const CountButton = (props) => {
    console.log("component re-rendered" + " with props: " + props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

    const buttonStyle = {
        background: props.buttonColor,
        border: "4px solid black"
    }

    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }

    return (
        <div>
            <button
                style={buttonStyle}
                onClick={handleClick}>
                Increment + {props.incrementBy}
            </button>
            <div>Current Count: {currentCount}</div>
        </div>)
}

export default CountButton