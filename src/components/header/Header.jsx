import "./Header.css";
import Cart from "../cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLocalStorage } from "../../utils/helper";
import { removeUser } from "../../store/userSlice";
export default function Header({ sortBy, setSortBy }) {
  const { userData } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(removeUser());
    removeFromLocalStorage("user");
    removeFromLocalStorage("token");
    navigate("/login");
  }
  return (
    <header className="header">
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Link to="/">LOGO</Link>
        <Link to="/account">Account</Link>
      </div>

      <div className="flex-row">
        <select
          name="price"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">none</option>
          <option value="cheap">cheap</option>
          <option value="expensive">expensive</option>
        </select>
        <div className="all">
          {userData && (
            <div className="par1">
              <img src={userData.img} />
              <p>{userData.name}</p>
            </div>
          )}
          <Cart />
          <button onClick={() => handleLogOut()}>Log out</button>
        </div>
      </div>
    </header>
  );
}
