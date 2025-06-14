import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <button className="btn-active">Generate</button>
      </nav>

      <main>
        <div className="scan-unactive">
          <img src="./scanCode.png" alt="scan" />
          <h4>Time is up!</h4>
          <button className="btn-active">Generate</button>
        </div>
        <button className="download-btn btn-active">Download</button>
      </main>
    </>
  );
}

export default App;
