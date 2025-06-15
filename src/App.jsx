import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  const timerFunction = function () {
    let time = 11;

    const tick = function () {
      time--;

      console.log(time);
      let timeString = String(time);
      setTime(timeString);

      if (time === 0) {
        clearInterval(timer);
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
  };

  return (
    <>
      <nav>
        <Button handleClick={timerFunction} />
      </nav>

      <main>
        <div className="scan-unactive">
          <img src="./scanCode.png" alt="scan" />
          <h4>Time is up!</h4>
          <Button handleClick={timerFunction} />
        </div>
        <p>{time} s</p>
        {/* <button className="download-btn btn-active">Download</button> */}
        <Button typeProp={"Download-Btn"} />
      </main>
    </>
  );
}

export default App;
