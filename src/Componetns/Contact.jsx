import Button from "./Button";
import iconError from "../images/icon-error.svg";
import { useRef } from "react";
export default function Contact() {
  const inputValue = useRef();

  const imgError = useRef();

  const spanError = useRef();

  const ShowError = () => {
    imgError.current.style.display = "block";
    spanError.current.style.display = "block";
  };

  const submitHandlere = (e) => {
    const reg = /\w+@(gmail|hotmail|sy|outlink)\.com/;
    if (inputValue.current.value == "") {
      spanError.current.textContent = "filed can't be emty";
      ShowError();
      e.preventDefault();
    } else if (!reg.test(inputValue.current.value)) {
      e.preventDefault();
      spanError.current.textContent = "Whoops,make sure it's an email";
      ShowError();
    }
  };

  const focusHandelr = () => {
    imgError.current.style.display = "none";
    spanError.current.style.display = "none";
  };
  return (
    <div className="contact text-center section" id="Contact">
      <span className="d-block title">35,000+ already joined</span>
      <p>Stay up-to-date with what we’re doing</p>
      <form className="d-flex mt-4">
        <input
          onFocus={focusHandelr}
          ref={inputValue}
          type="text"
          name="Email"
          id="email"
          placeholder="Enter your Email address"
        />
        <Button title="Contact-us" onClick={submitHandlere} />
        <span className="error " ref={spanError}>
          Whoops,make sure it's an email
        </span>
        <img src={iconError} className="iconError" alt="" ref={imgError} />
      </form>
    </div>
  );
}
