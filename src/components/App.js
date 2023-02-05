import React from "react";
import SearchBar from "./SearchBar/SearchBar";

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
    "Calathea"
]

const App = () => {

    return (
        <div>
            <SearchBar products={products}/>
            <SearchBar products={plants}/>
        </div>

    )
};

export default App;