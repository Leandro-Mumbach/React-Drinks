import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { useCart } from "../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ drink }) => {
    const { addToCart, removeOneFromCart, removeAllFromCart } = useCart()

  return (
    <article className={styles.card}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <span> {drink.strDrink} </span>
      <span> {drink.price} </span>
      <div className={styles.counter}>
        <button onClick={() => removeOneFromCart(drink.idDrink)}> - </button>
        <span> {drink.quantity} </span>
        <button onClick={() => addToCart(drink)}> + </button>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className={styles.iconTrash}
        onClick={() => removeAllFromCart(drink.idDrink)}
      />
    </article>
  );
};

Card.propTypes = {
    drink: PropTypes.object.isRequired
}
