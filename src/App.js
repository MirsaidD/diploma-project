import {
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import { Header } from "./components/Header/Header";
import { HomePageDisplay } from "./components/HomePageDisplay/HomePageDisplay";
import { GamePageDisplay } from "./components/GamePageDisplay/GamePageDisplay";
import { OrderPageDisplay } from "./components/OrderPageDisplay/OrderPageDisplay";
import CheckoutDisplay from "./components/CheckoutDisplay/CheckoutDisplay";
import Footer from "./components/Footer/Footer";

// import Categories from "./components/Categories/Categories";


function App() {
  const [searchValue, setSearchValue] = useState('');
  // console.log(searchValue, 'input')

  return (
    <div className="App">

      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      {/* <Categories /> */}
      <Routes>
        <Route path="/" element={<HomePageDisplay searchValue={searchValue} />} />
        <Route path="/order" element={<OrderPageDisplay />} />
        <Route path="/app/:title" element={<GamePageDisplay />} />
        <Route path="/checkout" element={<CheckoutDisplay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
