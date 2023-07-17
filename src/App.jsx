import { CartProvider } from "./context/CartProvider";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { ModalProvider } from "./context/ModalProvider";
import { MainLayout } from "./layout/MainLayout";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
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
  );
}

export default App;
