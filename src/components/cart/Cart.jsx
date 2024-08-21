import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.scss";

export default function Cart() {
  const cart = useSelector((store) => store.cart);

  return (
    <Link to="/cart" className="cart">
      <div className="count">{1}</div>
      <FaShoppingCart />
    </Link>
  );
}
