import PropTypes from "prop-types"; 
import { FaSearch } from "react-icons/fa";

function FormInput({ type, placeholder, name }) {
  return (
    <label className=" input-bordered input input-sm flex w-full items-center gap-2 md:input-md">
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      <FaSearch className="h-4 w-4" />
    </label>
  );
}


FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormInput;
