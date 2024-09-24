import logo from "../images/logo-bookmark-footer.svg";
import facebookLogo from "../images/icon-facebook.svg";
import TwitterLogo from "../images/icon-twitter.svg";
import facebookColored from "../images/icon-facebook-colores.svg";
import twitterColored from "../images/icon-twitter-colores.svg";
export default function Footer() {
  const facbookImgHanelder = (e) => {
    e.target.style.content = `url(${facebookColored})`;
  };

  const twiiterImgHanelder = (e) => {
    e.target.style.content = `url(${twitterColored})`;
  };
  return (
    <footer className="d-flex">
      <div className="Logo-links d-flex ">
        <img src={logo} alt="" className="logo" />
        <ul className="links d-flex">
          <li>
            <a href="#features" className="text-decoration-none ">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none ">
              Pricing
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-decoration-none ">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="socail-logos">
        <img
          src={facebookLogo}
          alt=""
          onMouseOver={facbookImgHanelder}
          onMouseLeave={(e) => {
            e.target.style.content = `url(${facebookLogo})`;
          }}
        />
        <img
          src={TwitterLogo}
          className="twitter"
          alt=""
          onMouseOver={twiiterImgHanelder}
          onMouseLeave={(e) => {
            e.target.style.content = `url(${TwitterLogo})`;
          }}
        />
      </div>
    </footer>
  );
}
