import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

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
        <button className="btn-active" onClick={() => timerFunction()}>
          Generate
        </button>
      </nav>

      <main>
        <div className="scan-unactive">
          <img src="./scanCode.png" alt="scan" />
          <h4>Time is up!</h4>
          <button className="btn-active">Generate</button>
        </div>
        <p>{time} s</p>
        <button className="download-btn btn-active">Download</button>
      </main>
    </>
  );
}

export default App;
