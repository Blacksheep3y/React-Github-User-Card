import React from 'react';
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <div className="navbar">
            <Link to="/">
                <div>Home</div>
            </Link>

            <Link to="/followers">
                <div>Followers</div>
            </Link>
        </div>
      );
};

export default Nav;