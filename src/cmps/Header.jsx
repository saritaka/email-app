import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { EmailFilter } from "./EmailFilter";

import logo from "../assets/imgs/gmail.svg";
// import logo from "../assets/imgs/gmail.png";
import menuIcon from "../assets/imgs/menu.svg";
// import searchIcon from "../assets/imgs/search.svg";
// import filterIcon from "../assets/imgs/tune.svg";
import settingsIcon from "../assets/imgs/settings.svg";

export function Header({ filterBy, onSetFilter }) {
  // const [filterByToEdit, setFilterByToEdit] = useState(filterBy);
  const [menuOpen, setMenu] = useState(true);

  const navigate = useNavigate();

  // // useEffect(() => {
  // //   onSetFilter(filterByToEdit);
  // //   console.log("filterByToEdit ", filterByToEdit);
  // // }, [filterByToEdit]);

  // function onSubmitFilter(ev) {
  //   ev.preventDefault();
  //   console.log("filterByToEdit", filterByToEdit);
  //   onSetFilter(filterByToEdit);
  // }

  // function handleChange(ev) {
  //   // let { value, name: field, type } = ev.target;
  //   let { value, name: field } = ev.target;
  //   console.log("ev", ev.target);
  //   console.log(value, field);
  //   // value = type === "number" ? +value : value;
  //   setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  //   console.log("filterByToEdit", filterByToEdit);
  // }
  function onOpenMenu() {
    setMenu(!menuOpen);
  }

  return (
    <section className="app-header">
      <div className="menu-logo">
        <div>
          <button className="header-icon" onClick={onOpenMenu}>
            <img src={menuIcon}></img>
          </button>
        </div>
        <div>
          <button className="logo" onClick={() => navigate("/inbox")}>
            <img src={logo}></img>
          </button>
        </div>
        <div>
          <button className="logo" onClick={() => navigate("/inbox")}>
            Gmail
          </button>
        </div>
      </div>
      <div className="filter-input">
        {/* <div className="search-box">
          <form onSubmit={onSubmitFilter}>
            <button>
              <img src={searchIcon}></img>
            </button>
            <input
              type="text"
              placeholder="Search mail"
              name="txt"
              onChange={handleChange}
            ></input>
          </form>
          <button onClick={console.log("filter btn click")}>
            <img src={filterIcon}></img>
          </button>
        </div> */}
        <EmailFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <div>
          <Link to={"/about"}>
            <img className="header-icon " src={settingsIcon}></img>
          </Link>
        </div>
      </div>
    </section>
  );
}
