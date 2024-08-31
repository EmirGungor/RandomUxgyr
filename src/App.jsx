import { useState } from "react";
import "./App.css";
import Uxgyrs from "./Uxgyrs";
import "bulma/css/bulma.css";

function getRandomUxgyr() {
  const uxgyrArray = [
    "U1",
    "U2",
    "U3",
    "U4",
    "U5",
    "U6",
    "U7",
    "U8",
    "U9",
    "U10",
  ];
  return uxgyrArray[Math.floor(Math.random() * uxgyrArray.length)];
}

function App() {
  const [uxgyrs, setUxgyrs] = useState([]);
  const handleClick = () => {
    setUxgyrs([...uxgyrs, getRandomUxgyr()]);
  };

  const uxgyrList = uxgyrs.map((uxgyr, index) => {
    return <Uxgyrs key={index} uxgyrPic={uxgyr} />;
  });

  return (
    <>
      <div className="header">
        Bu site EMİR GÜNGÖR tarafından desturlanmıştır.
      </div>
      <div className="all">
        <button className="button is-info is-dark" onClick={handleClick}>
          Random UXGYR
        </button>
        <div className="uxgyrList">{uxgyrList}</div>
      </div>
    </>
  );
}

export default App;
