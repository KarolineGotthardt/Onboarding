import React, { useState } from "react";

const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount+1)
    }
    console.log("component re-rendered")

    return <div>
        <button onClick={handleClick}>Increment ++</button>
        <div>Current Count: {currentCount}</div>
    </div>
}

export default CountButton