import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
