import TipCalculator from "./Component/TipCalculator";
import Result from "./Component/Result";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [selectTip, setSelectTip] = useState("");
  const [numberOfPpl, setNumberOfPpl] = useState("");
  return (
    <div>
      <h1>SPLITTER</h1>
      <div className="App">
        <TipCalculator
          bill={bill}
          selectTip={selectTip}
          numberOfPpl={numberOfPpl}
          onSetBill={setBill}
          onSetNumberOfPpl={setNumberOfPpl}
        />
        <Result />
      </div>
    </div>
  );
}

export default App;
