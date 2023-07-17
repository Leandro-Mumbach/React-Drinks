import { Container } from "react-bootstrap"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import styles from "../layout/MainLayout.module.css"
import PropTypes from "prop-types"
import { CartModal } from "../components/CartModal/CartModal"

export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}> {/* main del css MainLayout.module.css */}
      <Header />
        <Container className="mt-5">
          {children}
        </Container>
        <CartModal/>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}