import React, {useState, useEffect} from "react";
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

    const [productsState, setProductsState] = useState([])

    const loadedProducts = productsState.length > 0

    useEffect(() => {
        setTimeout(()=>{
            setProductsState(plants)
        }, 2000)
    })

    return (
        <div>
            <CountButton
                incrementBy={2}
                buttonColor="yellow"
            />
            <br/>
            <br/>
            <div>Search a plant...</div>
            {loadedProducts ? <SearchBar products={productsState}/>: "Loading products..."}

        </div>

    )
};

export default App;