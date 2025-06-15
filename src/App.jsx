import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  const timerFunction = function () {
    let time = 11;

    const tick = function () {
      setActive(true);

      time--;

      console.log(time);
      let timeString = String(time);
      setTime(timeString);

      if (time === 0) {
        clearInterval(timer);
        setActive(false);
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
  };

  return (
    <>
      <nav>
        <Button
          handleClick={timerFunction}
          active={active}
          setActive={setActive}
          text="Generate"
        />
      </nav>

      <main>
        <div className={`${!active ? "scan-inactive" : "scan-active"}`}>
          <img src="./scanCode.png" alt="scan" />
          <h4 className={`${!active ? "" : "hidden"}`}>Time is up!</h4>
          <Button
            handleClick={timerFunction}
            active={active}
            setActive={setActive}
            text="Generate"
          />
        </div>
        <p>{time} s</p>
        {/* <button className="download-btn btn-active">Download</button> */}
        <Button typeProp={"Download-Btn"} text="Download" />
      </main>
    </>
  );
}

export default App;
