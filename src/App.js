import {
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import { Header } from "./components/Header/Header";
import { HomePageDisplay } from "./components/HomePageDisplay/HomePageDisplay";
import { GamePageDisplay } from "./components/GamePageDisplay/GamePageDisplay";
import Auth from "./pages/AuthPage/AuthPage";
import SignOut from "./pages/SingOut/SingOut";
import { OrderPageDisplay } from "./components/OrderPageDisplay/OrderPageDisplay";
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
        <Route path="/" element={<GamePageDisplay />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
