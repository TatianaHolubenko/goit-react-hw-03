import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ contacts: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
