import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import CountButton from "./CountButton/CountButton";

const products = [
    "tooth paste",
    "tooth brush",
    "mouth wash",
    "dental floss",
    "mouth guard"
];

const plants = [
    "Monstera",
    "Ivory",
    "Calathea",
    "Palm",
    "Orchid"
]

const App = () => {

    return (
        <div>
            <CountButton
                incrementBy={2}
                buttonColor="yellow"
            />
            <br/>
            <br/>
            <div>Search a plant...</div>
            <SearchBar
                products={plants}
            />
        </div>

    )
};

export default App;