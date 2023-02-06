import React, { useState, useEffect } from "react"
import "./CountButton.css"


const CountButton = (props) => {

    const [currentCount, setCurrentCount] = useState(0)

    const buttonStyle = {
        background: props.buttonColor
    }

    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }

    useEffect(() => {
        if (currentCount === 10) {
            alert("Count is 10!")
        }
    }, [currentCount])

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