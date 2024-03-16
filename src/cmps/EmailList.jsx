// import { useRef } from "react";
import { Link } from "react-router-dom";
import { EmailPreview } from "./EmailPreview";

export function EmailList({
  emails,
  onRemoveEmail,
  onUpdateEmail,
  changeState,
}) {
  console.log({ emails });
  // let readStatus = useRef();

  return (
    <section>
      <div></div>
      <ul className="email-list">
        {emails.map((email) => (
          <li key={email.id}>
            {/* <Link
              to={`/email/${email.id}`}
              onClick={() => changeReadState(email)}
            > */}
            <EmailPreview
              email={email}
              onRemoveEmail={onRemoveEmail}
              onUpdateEmail={onUpdateEmail}
              changeState={changeState}
            />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
