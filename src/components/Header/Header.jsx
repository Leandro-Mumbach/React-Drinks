import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../Header/Header.module.css"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useModal } from "../../hooks/useModal"

export const Header = () => {

  const {toogleModal} = useModal()

  return (
    <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        <FontAwesomeIcon icon={faCartShopping} onClick={toogleModal}/>
    </header>
    )
}
