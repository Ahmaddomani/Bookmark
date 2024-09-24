import dotsImg from "../../images/bg-dots.svg";
import Button from "../Button";

export default function Card({ iconUrl, Name, version, className }) {
  return (
    <div className={className}>
      <img src={iconUrl} alt="" className="icon-img" />
      <div className="browser-info">
        <h4>Add to {Name}</h4>
        <span className="d-block version">Minimun version {version}</span>
        <img src={dotsImg} className="d-block dots-img " alt="" />
        <Button title="Add & install Extesion " className="Add-install-btn" />
      </div>
    </div>
  );
}
