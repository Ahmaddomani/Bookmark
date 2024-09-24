import SectionTitle from "../Section-title";
import BrowserContainer from "./Browsers-container";

export default function Download() {
  const description =
    " We’ve got more browsers in the pipeline. Please do let us know if you’ve  got a favourite you’d like us to prioritize.";
  return (
    <div className="container">
      <div className="download section">
        <SectionTitle
          title="Download the extension"
          description={description}
        />
        <BrowserContainer />
      </div>
    </div>
  );
}
