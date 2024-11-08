import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myEvents">My Events</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <button>Mode</button>
                    </li>
                    <li>
                        <NavLink to="/authenticate">
                            <button>Login/Sign Up</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <button>Profile</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
