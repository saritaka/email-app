import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import searchIcon from "../assets/imgs/search.svg";
import filterIcon from "../assets/imgs/tune.svg";

export function EmailFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy);
  const [openModal, setModal] = useState(false);
  // const [filterBoxfilterByToEdit, filterBoxsetFilterByToEdit] = useState(filterBy);

  useEffect(() => {
    onSetFilter(filterByToEdit);
    console.log("filterByToEdit ", filterByToEdit);
  }, [filterByToEdit]);
  // }, []);

  useEffect(() => {
    return setModal(false);
  }, []);
  // useEffect(() => {
  //   onSetFilter(filterBoxfilterByToEdit);
  //   console.log("filterBoxfilterByToEdit ", filterBoxfilterByToEdit);
  // }, []);

  function onSubmitFilter(ev) {
    ev.preventDefault();
    console.log("filterByToEdit", filterByToEdit);
    onSetFilter(filterByToEdit);
  }

  // function onSubmitFilter(ev) {
  //   ev.preventDefault();
  //   console.log("filterBoxfilterByToEdit", filterBoxfilterByToEdit);
  //   onSetFilter(filterBoxfilterByToEdit);
  // }

  function handleChange(ev) {
    // let { value, name: field, type } = ev.target;
    let { value, name: field, type } = ev.target;
    console.log("ev", ev.target);
    console.log(value, field);
    // value = type === "number" ? +value : value;
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
    console.log("filterByToEdit", filterByToEdit);
  }

  function onOpenFilter() {
    setModal(!openModal);
    console.log("setModal", openModal);
  }
  return (
    <article>
      <div className="search-box">
        <form onSubmit={onSubmitFilter}>
          <div className="user-input">
            <button className="header-icon">
              <img src={searchIcon}></img>
            </button>
            <input
              type="text"
              placeholder="Search mail"
              name="txt"
              onChange={handleChange}
            ></input>
          </div>
        </form>
        <button className="header-icon" onClick={onOpenFilter}>
          <img src={filterIcon}></img>
        </button>
      </div>
      {openModal ? (
        <section className="filter-modal">
          <form onSubmit={onSubmitFilter}>
            <label>From</label>
            <input
              type="text"
              id="from"
              name="from"
              onChange={handleChange}
              // value={filterByToEdit.from}
            ></input>
            <label>To</label>
            <input
              type="text"
              id="to"
              name="to"
              onChange={handleChange}
              // value={filterByToEdit.to}
            ></input>
            <label>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleChange}
              // value={filterByToEdit.txt}
            ></input>
            <label>Has the words</label>
            <input
              type="text"
              id="hasTheWords"
              name="hasTheWord"
              onChange={handleChange}
              // value={filterByToEdit.txt}
            ></input>
            <label>Doesn't Have the words</label>
            <input
              type="text"
              id="DoesntHave"
              name="DoesntHave"
              onChange={handleChange}
              // value={filterByToEdit.txt}
            ></input>
            <button>Search</button>
          </form>
        </section>
      ) : (
        ""
      )}
    </article>
  );
}
