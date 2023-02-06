import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar/SearchBar";
import CountButton from "./CountButton/CountButton";
import Button from "./Button/Button";

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

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(
                (shopProducts)=>{
                    const newProductsState = shopProducts.map((shopProduct) => {
                        return shopProduct.title
                    })
                    setProductsState(newProductsState)
                }
            )
    })

    return (
        <div>
            <Button>SHOP</Button>
            <br/>
            <CountButton incrementBy={2} buttonColor="yellow"/>
            <br/>
            <br/>
            <div>Search a product...</div>
            {loadedProducts ? <SearchBar products={productsState}/>: "Loading products..."}

        </div>

    )
};

export default App;