import { Link } from "react-router-dom";
import { RoutesApps } from "../Router/Routers";

export const Header = () => {
  return (
    <>
      <div className="header1">
        <ul>
          <li>Contact Us</li>
          <li>English</li>
          <li>Current: USD</li>
          <Link
            to={RoutesApps.account}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>Account</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
