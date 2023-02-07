import { createContext, useState } from "react";

const FavoritesContext = createContext(
    {
        favorites: [],
        favoritesCount: 0
    }
);

function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([])
    const context = {
        favorites: userFavorites,
        favoritesCount: userFavorites.length
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
