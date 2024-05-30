import React, { useState, forwardRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputProps = {
  type: string;
  placeholder?: string;
  className: string;
  id?: string;
  value?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const toggleVisibility = () => {
    setToggleIcon(!toggleIcon);
  };

  if (props.type === "text") {
    return <input ref={ref} {...props} />;
  } else if (props.type === "password") {
    return (
      <>
        <span className="relative" onClick={toggleVisibility}>
          {toggleIcon ? (
            <FaRegEye className="see-password" />
          ) : (
            <FaRegEyeSlash className="see-password" />
          )}
        </span>
        <input ref={ref} {...props} type={toggleIcon ? "password" : "text"} />
      </>
    );
  } else if (props.type === "submit") {
    return <input {...props} ref={ref} />;
  } else {
    return null;
  }
});

export default Input;
