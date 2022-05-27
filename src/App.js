
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Product from './Components/Product';
import ProductDes from './Components/ProductDes';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Product/>}/>
          {/* <Route path='/productdes/:id' element={<ProductDes/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
