import React, { useState } from "react"
import "./CountButton.css"


const CountButton = (props) => {
    console.log("component re-rendered" + " with props: " + props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

    const buttonStyle = {
        background: props.buttonColor
    }

    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }

    return (
        <div>
            <button
                style={buttonStyle}
                onClick={handleClick}
            >
                Increment + {props.incrementBy}
            </button>
            <div
                className={"count-display"}
            >
                Current Count: {currentCount}</div>
        </div>)
}

export default CountButton