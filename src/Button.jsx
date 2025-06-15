import React from "react";

function Button(props) {
  const { handleClick, variation, active, children } = props;

  let addedClassName;
  if (variation === "Download-Btn") {
    addedClassName = "download-btn";
  }

  return (
    <button
      disabled={active}
      className={`${addedClassName} ${
        !active ? "btn-active" : "btn-inactive"
      } `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
