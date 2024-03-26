import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import searchIcon from "../assets/imgs/search.svg";
import filterIcon from "../assets/imgs/tune.svg";
import { EmailFilterModal } from "./EmailFilterModal";

export function EmailFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy);
  const [openModal, setModal] = useState(false);
  // const [filterBoxfilterByToEdit, filterBoxsetFilterByToEdit] = useState(filterBy);

  useEffect(() => {
    onSetFilter(filterByToEdit);
    // console.log("filterByToEdit ", filterByToEdit);
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
    // console.log("filterByToEdit", filterByToEdit);
    onSetFilter(filterByToEdit);
  }

  function handleChange(ev) {
    let { value, name: field, type } = ev.target;
    // console.log("ev", ev.target);
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
              value={filterByToEdit.txt}
              onChange={handleChange}
            ></input>
          </div>
        </form>
        <button className="header-icon" onClick={onOpenFilter}>
          <img src={filterIcon}></img>
        </button>
      </div>

      {openModal ? (
        <EmailFilterModal
          filterBy={filterBy}
          onSetFilter={onSetFilter}
          setModal={setModal}
        />
      ) : (
        " "
      )}
    </article>
  );
}
