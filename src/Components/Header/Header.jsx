
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { login } = useSelector((state) => state.account);


  return (
    <>
      <div className="header1">
        <ul>
          <li>Contact Us</li>
          <li>English</li>
          <li>Current: USD</li>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <li>{login ? "Logout" : " Login"}</li>{" "}
          </Link>
        </ul>
      </div>
    </>
  );
};
