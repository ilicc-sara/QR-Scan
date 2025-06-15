import React from "react";

function Button(props) {
  const { handleClick, typeProp } = props;

  let addedClassName;
  if (typeProp === "Download-Btn") {
    addedClassName = "download-btn";
  }

  return (
    <button
      className={`${addedClassName} btn-active`}
      onClick={() => handleClick()}
    >
      Generate
    </button>
  );
}

export default Button;
