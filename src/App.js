import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login';
import ProductList from './Components/ProductList';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
