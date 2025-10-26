import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import { clearItem } from "./redux/slice";
import {BrowserRouter, Routes, Route} from 'react-router'
import CartList from "./CartList";
function App() {
  const dispatch = useDispatch();
  return (
    <>
      {/* <button 
      onClick={()=>dispatch(clearItem())}
      className='clear-btn'
      >
        Clear Cart
      </button> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
