// Route
import MainRouter from './routes/MainRouter';

// Main Layout
import MainLayout from './layouts/MainLayout';

// CartContext
import { CartProvider } from './context/CartContext';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';

function App() {

  return (
    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  );
}

export default App;
