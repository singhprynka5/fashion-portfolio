import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Link to="/profile" className="goto">
                My Profile
            </Link>
        </>
    );
};

export default HomePage;
