// import { Link } from "react-router-dom";

export function EmailPreview({ email }) {
  console.log("here");

  const date = new Date(email.sentAt);
  const readDisplay = email.isRead ? "read" : "unread";

  return (
    <article className={`email-preview flex space-between ${readDisplay}`}>
      {/* <Link to={`/email/${email.id}`}> */}
      <div className="name">
        <span>{email.from}</span>
      </div>
      <div className="subject">
        <span>{email.subject}-</span>
        {email.body}
      </div>
      <div>
        <span className="date">{date.toLocaleDateString("en-US")}</span>
      </div>
      {/* </Link> */}
    </article>
  );
}
