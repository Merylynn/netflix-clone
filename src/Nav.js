import React, { useEffect, useState } from "react";
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            />
            <div className="nav_buttons">
          <button className="nav_home_button">Home</button>
          <button className="nav_tv_button">TV Shows</button>
          <button className="nav_movies_button">Movies</button>
          <button className="nav_new_button">New & Popular</button>
          <button className="nav_list_button">My List</button>
        </div>

            <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav