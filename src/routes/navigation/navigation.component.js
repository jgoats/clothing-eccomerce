import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import "./navigation.styles.scss";

export default function Navigation() {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={Logo} />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}