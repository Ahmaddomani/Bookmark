import Card from "./Card";
import ChromeIcon from "../../images/logo-chrome.svg";
import FirefoxIcon from "../../images/logo-firefox.svg";
import OperaIcon from "../../images/logo-opera.svg";

export default function BrowserContainer() {
  return (
    <div className="container">
      <div className="borwser-container">
        <Card
          iconUrl={ChromeIcon}
          Name="Chrome"
          version="52"
          className="Chrome card"
        />
        <Card
          iconUrl={FirefoxIcon}
          Name="FireFox"
          version="55"
          className="FireFox card"
        />
        <Card
          iconUrl={OperaIcon}
          Name="Opera"
          version="46"
          className="Opera card"
        />
      </div>
    </div>
  );
}
