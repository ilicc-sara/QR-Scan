import React from "react";

function Button(props) {
  const { handleClick, typeProp, active, text } = props;

  let addedClassName;
  if (typeProp === "Download-Btn") {
    addedClassName = "download-btn";
  }

  // if (typeProp && !handleClick) {
  //   return (
  //     <button
  //       className={`${addedClassName} ${
  //         !active ? "btn-active" : "btn-inactive"
  //       } `}
  //     >
  //       Download
  //     </button>
  //   );
  // }

  // return (
  //   <button
  //     className={`${addedClassName} ${
  //       !active ? "btn-active" : "btn-inactive"
  //     } `}
  //     onClick={() => handleClick()}
  //   >
  //     {text}
  //   </button>
  // );

  if (!active) {
    return (
      <button
        className={`${addedClassName} ${
          !active ? "btn-active" : "btn-inactive"
        } `}
        onClick={() => handleClick()}
      >
        {text}
      </button>
    );
  }

  if (active) {
    return (
      <button
        className={`${addedClassName} ${
          !active ? "btn-active" : "btn-inactive"
        } `}
        onClick={() => handleClick()}
        disabled
      >
        {text}
      </button>
    );
  }
}

export default Button;
