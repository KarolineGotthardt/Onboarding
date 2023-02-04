import React, { useState } from "react";

const CountButton = (props) => {
    console.log("component re-rendered" + " with props: " + props.incrementBy)

    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }

    return <div>
        <button onClick={handleClick}>Increment + {props.incrementBy}</button>
        <div>Current Count: {currentCount}</div>
    </div>
}

export default CountButton