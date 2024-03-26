import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function EmailFilterModal({ filterBy, onSetFilter, setModal }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy);

  useEffect(() => {}, []);

  function onSubmitFilter(ev) {
    ev.preventDefault();
    // console.log("filterByToEdit", filterByToEdit);
    onSetFilter(filterByToEdit);
    setModal(false);
  }

  function handleChange(ev) {
    // let { value, name: field, type } = ev.target;
    let { value, name: field, type } = ev.target;
    // console.log("ev", ev.target);
    // console.log(value, field);
    // value = type === "number" ? +value : value;
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
    console.log("filterByToEdit", filterByToEdit);
  }

  const filterOptions = [
    { title: "From", type: "text", value: filterByToEdit.from },
    { title: "To", type: "text", value: filterByToEdit.from },
    { title: "Subject", type: "text", value: filterByToEdit.from },
    { title: "Has the words", type: "text", value: filterByToEdit.from },
    { title: "Doesn't have", type: "text", value: filterByToEdit.from },
  ];
  console.log("filter options");

  return (
    <section className="filter-modal">
      <form className="filter-form" onSubmit={onSubmitFilter}>
        {filterOptions.map((field) => {
          return (
            <div>
              <span>{field.title}</span>
              <input
                type={field.type}
                id={field.title}
                name={field.title}
                onChange={handleChange}
                value={field.value}
              ></input>
            </div>
          );
        })}

        {/* <div>
              <span>To</span>
              <input
                type="text"
                id="to"
                name="to"
                onChange={handleChange}
                value={filterByToEdit.to}
              ></input>
            </div>
            <div>
              <span>Subject</span>
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={handleChange}
                value={filterByToEdit.txt}
              ></input>
            </div>
            <div>
              <span>Has the words</span>
              <input
                type="text"
                id="hasTheWords"
                name="hasTheWord"
                onChange={handleChange}
                value={filterByToEdit.txt}
              ></input>
            </div>
            <div>
              <span>Doesn't Have</span>
              <input
                type="text"
                id="DoesntHave"
                name="DoesntHave"
                onChange={handleChange}
                value={filterByToEdit.txt}
              ></input>
            </div> */}
        <div className="filter-btn">
          <button>Search</button>
        </div>
      </form>
    </section>
  );
}
