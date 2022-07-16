import React from "react";
import { useContext } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";

export default function Navigation() {
    const { currentUser } = useContext(UserContext);
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
                    {currentUser ?
                        <span onClick={signOutUser} className="nav-link">Sign Out</span> : <Link className="nav-link" to="/authentication">Sign In</Link>
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}