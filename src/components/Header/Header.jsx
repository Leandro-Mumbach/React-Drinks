import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../Header/Header.module.css"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useModal } from "../../hooks/useModal"
import { useAuth } from "../../hooks/useAuth"

export const Header = () => {

  const {toogleModal} = useModal();
  const {currentUser, logout} = useAuth();

  return (
    <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        {
          currentUser && (
            <> 
            <p>{currentUser.name}</p>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={toogleModal}/>
            <button onClick={logout}>Cerrar sesión</button>
            </>
          )
        }
    </header>
    )
}
