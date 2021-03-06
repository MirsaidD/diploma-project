
import { Link } from "react-router-dom";
import { CartBlock } from "../CartBlock";
import Search from "../Search/Search";
// import Inputs from "../Inputs/Inputs";
import "./Header.css";

export const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Game Store
        </Link>

        <Search className='Search' searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>)
}