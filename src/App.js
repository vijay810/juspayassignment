import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import LayoutPage from './components/Layout';
import Products from './pages/Products';
import Pagenotfound from './Pagenotfound';

function App() {
  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </LayoutPage>
  );
}

export default App;
