import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);
  const isItemFavorite = favoritesContext.checkFav(props.id);

  function toggleFavoriteStatus() {
    if (isItemFavorite) {
      favoritesContext.removeFav(props.id);
    } else {
      favoritesContext.addFav({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus}>
            {isItemFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
