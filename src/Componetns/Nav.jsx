import logo from "../images/logo-bookmark.svg";
import logomenu from "../images/logo-bookmark-menu.svg";
import closeimg from "../images/icon-close.svg";
import humberger from "../images/icon-hamburger.svg";
import facbook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import Button from "./Button";
import { useRef } from "react";
// import menuLogo from "";

export default function Nav() {
  let dropdown = useRef();
  return (
    <div className="container nav d-flex justify-content-between align-items-center">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navbar">
        <li className="p-4">
          <a href="#features">Features</a>
        </li>
        <li className="p-4">
          <a href="#">Pricing</a>
        </li>
        <li className="p-4">
          <a href="#Contact">Contact</a>
        </li>
        <Button title="Login" />
      </ul>
      <ul
        ref={dropdown}
        className="dropDwon-menu p-4 d-flex flex-column justify-content-between"
      >
        <div>
          <li className="d-flex pb-4 justify-content-between align-items-center">
            <img src={logomenu} alt="Logo" className="menu-logo" />
            <img
              src={closeimg}
              alt=""
              className="close"
              onClick={() => {
                dropdown.current.style.cssText =
                  "transform: translateX(-120%);";
              }}
            />
          </li>
          <li>
            <a href="#features" className="text-decoration-none">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              Pricing
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-decoration-none">
              Contact
            </a>
          </li>
          <button className="login-btn">Login</button>
        </div>
        <div className="social-icons mt-auto w-auto text-center">
          <img src={facbook} alt="" className="m-3" />
          <img src={twitter} alt="" className="m-3" />
        </div>
      </ul>
      <div className="humberger">
        <img
          src={humberger}
          onClick={() => {
            dropdown.current.style.cssText = "transform: translateX(0%);";
          }}
          alt=""
        />
      </div>
    </div>
  );
}
