import { useId } from "react";

import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const searchId = useId();

  const searchInput = (e) => {
    onFilter(e.target.value);
  };
  return (
    <div className={css.box}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        className={css.string}
        type="text"
        value={value}
        onChange={searchInput}
      />
    </div>
  );
}
