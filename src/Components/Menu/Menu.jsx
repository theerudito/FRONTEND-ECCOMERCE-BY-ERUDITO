import React from "react";
import { Link } from "react-router-dom";
import { RoutesApps } from "../Router/Routers";

export const Menu = () => {
  return (
    <div className="menu">
      <ul className="ulMenu">
        <li>
          <Link className="Link" to={RoutesApps.computers}>
            COMPUTERS
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.computers}>
            HARDWARE
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.computers}>
            GAMES
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.computers}>
            SOFTWARE
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.computers}>
            ACCESSORIES
          </Link>
        </li>
      </ul>
    </div>
  );
};
