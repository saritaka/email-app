import sortUp from "../assets/imgs/expand_less.svg";
import sortDown from "../assets/imgs/expand_more.svg";

export function SortButtons() {
  return (
    <section className=" flex">
      <button className="sort-btns flex auto-center">
        <img src={sortUp}></img>Date
      </button>

      <button className="sort-btns flex auto-center">
        <img src={sortUp}></img>Subject
      </button>

      {/* <button className="sort-btns flex auto-center">
        <img src={sortUp}></img>All
      </button> */}
      {/* <select value={} onChange={} id="" name=""> */}
      <select value="test" className="sort-btns flex auto-center">
        <option value="">All</option>
        <option value="Read">Read</option>
        <option value="Unread">Unread</option>
        <img src={sortUp}></img>
      </select>
    </section>
  );
}
