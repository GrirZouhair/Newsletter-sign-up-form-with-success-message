import MobileImg from "./assets/images/illustration-sign-up-mobile.svg";
import "./App.css";
import Cheks from "./assets/images/icon-success.svg";
import { useState } from "react";
import Successs from "./Success.js";



export default function App() {
  const [Email, setEmail] = useState('');
  const [err, seterr] = useState('');
  const [errInput, seterrInput] = useState("");
  const [Hover, setHover] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [Disabled, setDisbled] = useState(false);

  var input = document.getElementById('input');


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const HandleValidate = (email) => {
    return emailPattern.test(email);
  }
  const Validation = (e) => {
    e.preventDefault();
    if (HandleValidate(Email)) {
      console.log("yes");
      seterr("");
      setSuccess(true)
      setDisbled(true);

    } else {
      console.log("no");
      seterr('valide email require');

      seterrInput("ash#loremcompany.com");
      input.value = '';
    }
  }
  const HandleHover = () => {
    setHover(true);
  }
  const HandleLeave = () => {
    setHover(false);
  }

  return (
    <div>
      <div className={`${Disabled ? "hide" : "Container"}`}>
        <div className="FirstImg" style={{ backgroundImage: `url(${MobileImg})`, borderRadius: `${Hover ? "1rem" : "0px"}` }}></div>
        <div className="Global">
          <div className="Content">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={Cheks} alt="will not show" />
                Product discovery and building what matters
              </li>
              <li>
                <img src={Cheks} alt="will not show" />
                Measuring to ensure updates are a success
              </li>
              <li>
                <img src={Cheks} alt="will not show" id="img" />
                And much more!
              </li>
            </ul>
            <form>
              <div className="HandleError">
                <label htmlFor="email">Email address</label>
                {err ? (<HandleError err={err} />) : null}
              </div>
              <input placeholder={`${errInput ? "ash#loremcompany.com" : "email@company.com"}`} required
                className={errInput ? "placeholder-err" : ""}
                onChange={(e) => setEmail(e.target.value)} id="input" />

              <button id="btn" onClick={(e) => Validation(e)}
                onMouseEnter={HandleHover} onMouseLeave={HandleLeave}
              >Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
      </div>
      {Success ? (<Successs Cheks={Cheks} />) : null}
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/GrirZouhair">GRIR_Zouhair</a>.
      </div>
    </div>

  )
}
const HandleError = ({ err }) => {
  return (
    <div className="err">{err}</div>
  )
}

