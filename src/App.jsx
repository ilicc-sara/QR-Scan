import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <button>Generate</button>
      </nav>

      <main>
        <div>
          <img src="./scanCode.png" alt="scan" />
          <h4>Time is up!</h4>
          <button>Generate</button>
        </div>
        <button className="download-btn">Download</button>
      </main>
    </>
  );
}

export default App;
