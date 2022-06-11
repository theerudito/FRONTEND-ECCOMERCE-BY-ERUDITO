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
          <Link className="Link" to={RoutesApps.headsets}>
            HEASETS
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.laptops}>
          LAPTOPS
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.monitors}>
          MONITORS
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.keyboards}>
          KEYBOARDS
          </Link>
        </li>

        <li>
          <Link className="Link" to={RoutesApps.accessories}>
          ACCESSORIES
          </Link>
        </li>

      </ul>
    </div>
  );
};
