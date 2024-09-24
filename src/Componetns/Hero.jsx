import HeroImg from "../images/illustration-hero.svg";
import P_Description from "./P-description";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="container">
      <div className="Hero-Section d-flex py-5 ">
        <div className="info">
          <h1 className="title">A Simple Bookmark Manager</h1>
          <P_Description
            content="A clean and simple interface to organize
             your favourite websites. Open a new browser tab
              and see your sites load instantly. Try it for free."
          />
          <div className="buttons d-flex mt-3 gap-4">
            <Button className="blue" title="Get it on Chrome" />
            <Button className="white" title="Get it on Firefox" />
          </div>
        </div>
        <div className="img-container position-relative  ">
          <img src={HeroImg} alt="" className="Hero-img img-fluid" />
        </div>
      </div>
    </div>
  );
}
