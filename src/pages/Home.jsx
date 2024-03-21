import { useNavigate } from "react-router-dom";

import imgUrl from "../assets/imgs/gmail.svg";

export function Home() {
  const navigate = useNavigate();

  function onLogIn() {
    navigate("/inbox");
  }

  return (
    <section className="home flex column align-center space-around">
      <div>
        <h1>Welcome to Gmail</h1>
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <button className="simple-button login-btn" onClick={onLogIn}>
          Continue to My Email
        </button>
      </div>
    </section>
  );
}
