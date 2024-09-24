import SectionTitle from "./Section-title";
import FeatrueImg1 from "../images//illustration-features-tab-1.svg";

import Button from "./Button";
import { Data } from "../Data-Sections/Data";

export default function Features() {
  const changeHandelr = (e) => {
    let changersButons = [...document.querySelectorAll(".changer-btn")];
    changersButons.forEach((changer) => changer.classList.remove("active"));
    e.target.classList.add("active");
    Data.forEach((elemnt) => {
      if (e.target.textContent == elemnt.Name) {
        let mainContent = document.querySelector(".main-content");
        let title = mainContent.querySelector(".Section-title").firstChild;
        let description = mainContent.querySelector(".Section-title").lastChild;
        let img = mainContent.querySelector(".img-container").firstChild;
        title.textContent = elemnt.title;
        description.textContent = elemnt.description;
        img.src = elemnt.imgURl;
        img.parentElement;
      }
    });
  };
  return (
    <div className="container">
      <div id="features" className="features py-5 section">
        <header>
          <SectionTitle
            title={" Features"}
            description={
              "Our aim is to make it quick and  \
             easy for you to access your favourite websites.   \
            Your bookmarks sync between your devices so you can access them on the go."
            }
          />
        </header>
        <ul className="changers-buttons  d-flex">
          <li className="active changer-btn" onClick={changeHandelr}>
            Simple Bookmarking
          </li>
          <li className="changer-btn" onClick={changeHandelr}>
            Speedy Searching
          </li>
          <li className="changer-btn" onClick={changeHandelr}>
            Easy Sharing
          </li>
        </ul>
        <div className="main-content d-flex">
          <div className="img-container position-relative">
            <img src={FeatrueImg1} alt="" />
          </div>
          <div className="section-info ">
            <SectionTitle
              title={"Bookmark in one click"}
              description={
                " Organize your bookmarks however you like. Our simple drag-and-drop interface   \
                gives you complete control over how you manage your favourite sites."
              }
            />
            <Button title={"More info"} className={"more-info"} />
          </div>
        </div>
      </div>
    </div>
  );
}
