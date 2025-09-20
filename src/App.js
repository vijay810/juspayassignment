import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import LayoutPage from './components/Layout';

function App() {
  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </LayoutPage>
  );
}

export default App;
