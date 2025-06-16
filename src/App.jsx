import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const timerFunction = function () {
    let time = 14;

    const tick = function () {
      setActive(true);
      setLoading(true);

      time--;

      let timeString = String(time);
      setTime(timeString);

      if (time < 11) {
        setLoading(false);
      }

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
        <Button handleClick={timerFunction} active={active} text="Generate">
          Generate
        </Button>
      </nav>

      <main>
        {loading && <div class="loader"></div>}
        {!loading && (
          <>
            <div className={`${!active ? "scan-inactive" : "scan-active"}`}>
              <img src="./scanCode.png" alt="scan" />
              <h4 className={`${!active ? "" : "hidden"}`}>Time is up!</h4>
              <Button
                handleClick={timerFunction}
                active={active}
                text="Generate"
              >
                Generate
              </Button>
            </div>
            <p>{time} s</p>
            <Button variation={"Download-Btn"} active={!active}>
              Download
            </Button>
          </>
        )}
      </main>
    </>
  );
}

export default App;
