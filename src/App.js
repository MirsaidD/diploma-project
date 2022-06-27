import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import { Provider } from "react-redux";
import { store } from "./store";


import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import { OrderPage } from "./pages/OrderPage/OrderPage";


function App() {
  const [searchValue, setSearchValue] = useState('');
  // console.log(searchValue, 'input')

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<HomePage searchValue={searchValue} />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/app/:title" element={<GamePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
