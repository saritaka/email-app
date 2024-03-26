import { useState } from "react";
import { emailService } from "../services/email.service";

import close from "../assets/imgs/close.svg";
import { useNavigate, useOutletContext } from "react-router";

export function EmailCompose({ onAddEmail }) {
  const [email, setEmail] = useState(emailService.getDeafaultEmailFields());
  console.log("email", email);

  const navigate = useNavigate();

  function handleChange(ev) {
    let { value, name: field, type } = ev.target;
    setEmail((prevEmail) => ({ ...prevEmail, [field]: value }));
  }

  console.log("email to save - the default values: ", email);
  async function onSaveEmail(ev) {
    ev.preventDefault();
    if (email.to != "") {
      try {
        await onAddEmail(email);

        navigate(-1);
      } catch (err) {
        console.log("Error in onSaveEmail", err);
      }
    }
  }

  return (
    <section className="email-compose compose-full-size">
      <div className="flex row space-between compose-header">
        <div>New Message</div>
        <div>
          <button className="simple-button flex" onClick={() => navigate(-1)}>
            <img src={close}></img>
          </button>
        </div>
      </div>
      <form className="compose-form" onSubmit={onSaveEmail}>
        <input
          type="text"
          placeholder="Recipients"
          id="to"
          name="to"
          value={email.to}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Subject"
          id="subject"
          name="subject"
          value={email.subject}
          onChange={handleChange}
        ></input>

        <textarea
          id="body"
          name="body"
          value={email.body}
          onChange={handleChange}
        ></textarea>

        <button className="send-btn">Send</button>
      </form>
    </section>
  );
}
