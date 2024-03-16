import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/imgs/gmail.svg";
import menuIcon from "../assets/imgs/menu.svg";
import searchIcon from "../assets/imgs/search.svg";
import filterIcon from "../assets/imgs/tune.svg";
import settingsIcon from "../assets/imgs/settings.svg";

export function Header({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy);

  // useEffect(() => {
  //   onSetFilter(filterByToEdit);
  //   console.log("filterByToEdit ", filterByToEdit);
  // }, [filterByToEdit]);

  function onSubmitFilter(ev) {
    ev.preventDefault();
    console.log("filterByToEdit", filterByToEdit);
    onSetFilter(filterByToEdit);
  }

  function handleChange(ev) {
    // let { value, name: field, type } = ev.target;
    let { value, name: field } = ev.target;
    console.log("ev", ev.target);
    console.log(value, field);
    // value = type === "number" ? +value : value;
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
    console.log("filterByToEdit", filterByToEdit);
  }

  return (
    <section className="app-header">
      <div className="menu-logo">
        <button>
          <img src={menuIcon}></img>
        </button>
        <img src={logo}></img>
        <span>Gmail</span>
      </div>
      <div className="filter-input">
        <div className="search-box">
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
        </div>
        <div>
          <Link to={"/about"}>
            <img src={settingsIcon}></img>
          </Link>
        </div>
      </div>
    </section>
  );
}
