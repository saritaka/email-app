import { NavLink, useNavigate } from "react-router-dom";

import compose from "../assets/imgs/compose.svg";
import inbox from "../assets/imgs/inbox.svg";
import inbox_filled from "../assets/imgs/inbox_filled.svg";
import star from "../assets/imgs/star.svg";
import star_filled from "../assets/imgs/star_filled.svg";
import send from "../assets/imgs/send.svg";
import send_filled from "../assets/imgs/send_filled.svg";
import draft from "../assets/imgs/draft.svg";
import draft_filled from "../assets/imgs/draft_filled.svg";

// export function SideMenu({ setMenu }) {
export function SideMenu({ filterBy, onSetFilter, setSearchParams }) {
  const navigationButtons = [
    { path: "/inbox", icon: inbox, filledIcon: inbox_filled, field: "Inbox" },
    { path: "/starred", icon: star, filledIcon: star_filled, field: "Starred" },
    { path: "/sent", icon: send, filledIcon: send_filled, field: "Sent" },
    { path: "/draft", icon: draft, filledIcon: draft_filled, field: "Draft" },
  ];
  const navigate = useNavigate();

  function onCompose() {
    // navigate("./compose");
    setSearchParams({ compose: "new" });
  }

  return (
    <section className="side-menu">
      {/* <button className="compose-btn" onClick={()=>onSetFilter({mail:'compose'})}> */}
      {/* <Link to="./compose"> */}
      <button className="compose-btn" onClick={onCompose}>
        <img src={compose}></img>
        Compose
      </button>
      {/* </Link> */}
      <nav className="flex column">
        {navigationButtons.map((btn, ind) => {
          return (
            <NavLink to={btn.path} key={ind}>
              <img src={btn.icon}></img>
              {btn.field}
            </NavLink>
          );
        })}
      </nav>
    </section>
  );
}
