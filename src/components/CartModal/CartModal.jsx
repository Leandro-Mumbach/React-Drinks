import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartModal.module.css";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import {useModal} from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import { Card } from "./Card/Card";



export const CartModal = () => {
    const {isOpen, toogleModal} = useModal();
    const {cart, clearCart, sendOrder, orderTotal} = useCart();
    
    if (isOpen) 
    return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal}/>
            <h2>Mi Carrito</h2>
            <section className={styles.modalBody}>
                <div className={styles.modalDrinksListContainer}>
                    {cart.cartItems.length === 0 && (
                        <p>No hay bebidas en el carrito</p>
                    )}
                    {
                        cart.cartItems.map((drink) => (
                            <Card key={drink.idDrink} drink={drink}/>
                        ))
                    }
                </div>
                <aside>
                    <p>Total: {orderTotal}</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.clearCart} onClick={clearCart}>Vaciar Carrito</button>
                        <button className={styles.confirmOrder} onClick={sendOrder}>Confirmar Compra</button>
                    </div>
                </aside>
            </section>
        </div>
    </div>
  )
}
