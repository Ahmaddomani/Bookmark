import SectionTitle from "../Section-title";
import QuestionContainer from "./Question-Container";
import { AnsOne } from "../../Data-Sections/Data";
import { AnsTwo } from "../../Data-Sections/Data";
import { AnsThree } from "../../Data-Sections/Data";
import { AnsFour } from "../../Data-Sections/Data";
import Button from "../Button";

export default function Questions() {
  const description =
    " Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.";

  return (
    <div className="questions section">
      <SectionTitle
        title="Frequently Asked Questions"
        description={description}
      />
      <div className="QandA">
        <QuestionContainer
          className="question-container"
          title=" What is Bookmark?"
          Answer={AnsOne}
        />
        <QuestionContainer
          className="question-container"
          title=" How can I request a new browser?"
          Answer={AnsTwo}
        />
        <QuestionContainer
          className="question-container"
          title="Is there a mobile app?"
          Answer={AnsThree}
        />
        <QuestionContainer
          className="question-container"
          title="What about other Chromium browsers?"
          Answer={AnsFour}
        />
      </div>
      <Button title="More info" className="more-info" />
    </div>
  );
}
