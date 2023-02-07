import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesContext = useContext(FavoritesContext);
  let content;

  if (favoritesContext.favoritesCount === 0) {
    content = <p>You do not have any favorite Meetups at the moment.</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return <section>{content}</section>;
}

export default Favorites;
