import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFav: (newFavorite) => {},
  removeFav: (meetupId) => {},
  checkFav: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const context = {
    favorites: userFavorites,
    favoritesCount: userFavorites.length,
    addFav: addToFavorites,
    removeFav: removeFromFavorites,
    checkFav: checkIfFavorite,
  };

  function addToFavorites(newFavorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(newFavorite);
    });
  }

  function removeFromFavorites(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function checkIfFavorite(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
