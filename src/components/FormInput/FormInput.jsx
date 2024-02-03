import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FormInput = ({ type, name, placeholder, icon }) => {
  console.log("inside form input");
  return (
    <div className="relative">
      <input
        className="px-5 py-2 w-full"
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
      />
      <FontAwesomeIcon className="absolute right-5 top-3 width-3 height-4" icon={icon} />
    </div>
  );
};

export default FormInput;
