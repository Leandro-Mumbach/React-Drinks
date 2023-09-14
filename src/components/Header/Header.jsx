import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Header/Header.module.css";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../hooks/useModal";
import { useAuth } from "../../hooks/useAuth";
import Button from '@mui/material/Button';

export const Header = () => {

  const {toogleModal} = useModal();
  const {currentUser, logout} = useAuth();

  return (
    <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        {
          currentUser && (
            <> 
              <div className={styles.User}>
                <FontAwesomeIcon icon={faUser} style={{paddingRight: '15px',}}/>
                <p>{currentUser.name.toUpperCase()
                    }</p>
              </div>
              <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={toogleModal}/>
              <Button onClick={logout} className={styles.buttonLogout} variant="text" size="small">
                Cerrar sesión
              </Button>
            </>
          )
        }
    </header>
    )
}
