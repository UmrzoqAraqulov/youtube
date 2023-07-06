import React from "react";
import { Link } from "react-router-dom";
import './nav.scss'

const Nav = () => {
  return (
    <ul className="navList">
      <li className="navItem navItem1">
        <i class="fa-solid fa-bars"></i>
        <Link href="/">YOUTUBE</Link>
      </li>
      <li className="navItem navInput">
        <input type="text" placeholder="Search..." />
        <i class="fa-solid fa-microphone"></i>
      </li>
      <li className="navItem">
        <i class="fa-solid fa-video"></i>
        <i class="fa-solid fa-bell"></i>
        <div className="userImg">
          <img
            src="https://avatars.mds.yandex.net/i?id=c9c1af66b8897b26e9ec9c5c7af440ad07824a62-9265621-images-thumbs&n=13"
            alt=""
          />
        </div>
      </li>
    </ul>
  );
};

export default Nav;
