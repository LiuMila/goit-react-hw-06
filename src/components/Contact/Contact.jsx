import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import PropTypes from 'prop-types';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <div className={css.wraper}>
        <FaUser />
        <div>{name}</div>
      </div>

      <div className={css.wraper}>
        <FaPhone />
        <div>{number}</div>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired, // або PropTypes.number, в залежності від типу id
};
