import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import checkBoxIcon from "../assets/imgs/check_box.svg";
import checkBoxFilled from "../assets/imgs/check_box_filled.svg";
import starIcon from "../assets/imgs/star.svg";
import starIconFilled from "../assets/imgs/star_filled.svg";
import deleteIcon from "../assets/imgs/delete.svg";
import emailRead from "../assets/imgs/mark_email_read.svg";
import emailUnread from "../assets/imgs/mark_email_unread.svg";

export function EmailPreview({
  email,
  onRemoveEmail,
  onUpdateEmail,
  changeState,
}) {
  // const [email, setEmail] = useState(null);
  const [isstarred, setStarred] = useState();
  const [isDeleted, setDelete] = useState();
  // const [isMarkedAsRead, setRead] = useState();
  // const [isMarkedAsUnRead, setUnRead] = useState();
  // const [isChecked, setChecked] = useState();

  const date = new Date(email.sentAt);
  // console.log(date);

  function changeStartedState(email) {
    console.log("in on update isStarred ");
    console.log(email);
    // if (!email.isStarred) {
    //   const newStatus = { ...email, isStarred: !email.isStared };
    //   console.log(!email.isStarred);
    //   onUpdateEmail(newStatus);
    // }
  }

  const readDisplay = email.isRead ? "read" : "unread";

  return (
    <article className={`email-preview ${readDisplay}`}>
      <div className="flex preview-btns">
        <button className="main-icon">
          <img src={checkBoxIcon}></img>
        </button>
        <button
          // onClick={() => {
          //   changeStartedState(email);
          // }}
          className="main-icon"
          onClick={() => changeState(email, "isStarred", true)}
        >
          {/* <img src={starIcon} className={starred? "starred" : ''}></img> */}
          {/* {isstarred ? ( */}
          {email.isStarred ? (
            <img src={starIconFilled}></img>
          ) : (
            <img src={starIcon}></img>
          )}
        </button>
      </div>
      <Link to={`/email/${email.id}`}>
        <div className="flex space-between">
          {/* <div className="flex name"> */}
          <div className="name">
            <span>{email.from}</span>
          </div>
          {/* <div className="subject flex"> */}
          <div className="subject">
            <span>{email.subject}-</span>
            {email.body}
          </div>
        </div>
      </Link>
      {/* </Link> */}
      <div>
        <div className="date-and-btns flex">
          <span className="date">{date.toLocaleDateString("en-US")}</span>
          {/* <span className="action-btns">
          <button className="main-icon" onClick={() => onRemoveEmail(email.id)}>
            <img src={deleteIcon}></img>
          </button>
        </span> */}
          <span className="action-btns flex">
            <button
              className="main-icon"
              onClick={() => onRemoveEmail(email.id)}
            >
              <img src={deleteIcon}></img>
            </button>
            {email.isRead ? (
              <button
                className="main-icon"
                onClick={() => changeState(email, "isRead", true)}
              >
                <img
                  className="tooltip"
                  src={emailRead}
                  title="mark as unread"
                ></img>
              </button>
            ) : (
              <button
                className="main-icon"
                onClick={() => changeState(email, "isRead", true)}
              >
                <img
                  className="tooltip"
                  src={emailUnread}
                  title="mark as read"
                ></img>
              </button>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
