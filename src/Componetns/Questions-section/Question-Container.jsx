import topArrow from "../../images/icon-arrow.svg";
import BottomArrow from "../../images/icon-red-arrow.svg";
import { useRef } from "react";
export default function QuestionContainer({ className, title, Answer }) {
  let p = useRef();

  let Arrwo = useRef();

  // show handeler function
  const Showhandeler = () => {
    p.current.classList.toggle("show");
    Arrwo.current.classList.toggle("translate");
    if (Arrwo.current.classList.contains("translate")) {
      Arrwo.current.src = BottomArrow;
    } else {
      Arrwo.current.src = topArrow;
    }
  };

  return (
    <div className="Qas-container" onClick={Showhandeler}>
      <div className={className}>
        <h5>{title}</h5>
        <img src={topArrow} alt="" className="topArrwo" ref={Arrwo} />
      </div>
      <p className="Answer" ref={p}>
        {Answer}
      </p>
    </div>
  );
}
