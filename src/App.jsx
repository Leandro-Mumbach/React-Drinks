import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { ModalProvider } from "./context/ModalProvider";
import { MainLayout } from "./layout/MainLayout";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <CartProvider>
            <MainLayout>
              <DrinksProvider>
                <CategoryProvider>
                  <AppRoutes />
                </CategoryProvider>
              </DrinksProvider>
            </MainLayout>
          </CartProvider>
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
