import React, { Component } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
// import AllCarts from './components/Cart/AllCarts';
import Allproducts from './components/Products/Allproducts';
import Signin from './components/auth/Signin';
import Registration from './components/auth/Registration';
import AddCart from './components/Cart/AddCart';
import DetailsCart from './components/Products/DetailsCart';
import NewArrivals from './components/Cart/NewArrivals';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Allproducts />} />
            <Route path='/AddCart' element={<AddCart/>}/>
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Signin" element={<Signin />} />
            {/* <Route path="/allcarts" element={<AllCarts />}/> */}
            <Route path="/productDetail/:id" element={<DetailsCart/>}/>
            <Route path="/NewArrivals" element={<NewArrivals />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;





// import "./App.css";
// import { Outlet, Route, Routes} from "react-router-dom";
// import Navbar from "./components/Header/Navbar";
// import AllCarts from "./components/Cart/AllCarts";
// import Allproducts from "./components/Products/Allproducts";
// import Signin from './components/auth/Signin'
// import  {BrowserRouter} from 'react-router-dom'
// import Registration from './components/auth/Registration'


// function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Navbar/>
//       <Outlet/>
//       <Routes>
//         <Route path="/" element={<Allproducts/>}/>
//         <Route path="/AllCarts" element={<AllCarts/>}/>
//         <Route path="/Registration" element={<Registration/>}/>
//         <Route path="/Signin" element={<Signin/>}/>
//       </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
