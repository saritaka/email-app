import { NavLink } from "react-router-dom";

import compose from "../assets/imgs/compose.svg";
import inbox from "../assets/imgs/inbox.svg";
import inbox_filled from "../assets/imgs/inbox_filled.svg";
import star from "../assets/imgs/star.svg";
import star_filled from "../assets/imgs/star_filled.svg";
import send from "../assets/imgs/send.svg";
import send_filled from "../assets/imgs/send_filled.svg";

export function SideMenu({ setMenu }) {
  return (
    <section className="side-menu">
      <button>Compose</button>
      <ul>
        <li>
          <NavLink to="/inbox">
            <img src={inbox}></img>Inbox
          </NavLink>
        </li>
        <li>
          <NavLink to="/starred">Starred</NavLink>
        </li>
        {/* <li>
          <NavLink to="/sent">Sent</NavLink>
        </li>
        <li>
          <NavLink to="/draft">Draft</NavLink>
        </li> */}
      </ul>
    </section>
  );
}
