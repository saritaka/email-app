// import { useRef } from "react";
import { Link } from "react-router-dom";
import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails, onRemoveEmail, onUpdateEmail }) {
  console.log({ emails });
  // let readStatus = useRef();

  function changeReadState(email) {
    if (!email.isRead) {
      const newStatus = { ...email, isRead: !email.isRead };
      console.log(!email.isRead);
      onUpdateEmail(newStatus);
    }
  }

  return (
    <section>
      <div></div>
      <ul className="email-list">
        {emails.map((email) => (
          <li key={email.id}>
            <Link
              to={`/email/${email.id}`}
              onClick={() => changeReadState(email)}
            >
              <EmailPreview email={email} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
