import { Link } from "react-router-dom";
import { CartBlock } from "../CartBlock";
import "./Header.css";

export const Header = () => {

  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Game Store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
