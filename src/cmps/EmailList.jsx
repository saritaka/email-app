// import { useRef } from "react";
import { Link } from "react-router-dom";
import { EmailPreview } from "./EmailPreview";
import { SortButtons } from "./SortButtons";

export function EmailList({
  // currentFolder,
  emails,
  onRemoveEmail,
  onUpdateEmail,
  changeState,
}) {
  console.log({ emails });
  // console.log("Im on email list", currentFolder);
  // let readStatus = useRef();

  return (
    <section>
      <SortButtons />
      {/* <div></div> */}
      <ul className="email-list">
        {emails.map((email) => (
          <li key={email.id}>
            {/* <Link
              to={`/email/${email.id}`}
              onClick={() => changeReadState(email)}
            > */}
            <EmailPreview
              // currentFolder={currentFolder}
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
