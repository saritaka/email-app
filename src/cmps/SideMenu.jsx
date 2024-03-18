import { NavLink } from "react-router-dom";

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
export function SideMenu({ onSetFilter }) {
  const navigationButtons = [
    { path: "/inbox", icon: inbox, filledIcon: inbox_filled, name: "Inbox" },
    { path: "/starred", icon: star, filledIcon: star_filled, name: "Starred" },
    { path: "/sent", icon: send, filledIcon: send_filled, name: "Sent" },
    { path: "/draft", icon: draft, filledIcon: draft_filled, name: "Draft" },
  ];

  return (
    <section className="side-menu">
      {/* <button className="compose-btn" onClick={()=>onSetFilter({mail:'compose'})}> */}
      <button className="compose-btn">
        <img src={compose}></img>
        Compose
      </button>
      <nav className="flex column">
        {navigationButtons.map((btn) => {
          return (
            <NavLink to={btn.path}>
              <img src={btn.icon}></img>
              {btn.name}
            </NavLink>
          );
        })}
      </nav>
    </section>
  );
}
