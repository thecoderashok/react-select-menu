import "./App.css";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const optionsArray = [
    "India",
    "United States",
    "United Kingdom",
    "japan",
    "Canada",
    "Germany",
  ];
  const [openselect, setOpenSelect] = useState(false);

  const leagueInput = useRef();

  function selectvalue(e) {
    leagueInput.current.value = e.target.outerText;
    setOpenSelect(false);
  }

  function openOption() {
    setOpenSelect(true);
  }
  return (
    <div className="App">
      <div className="selectOption">
        <input
          onClick={openOption}
          onBlur={() => {
            setOpenSelect(false);
          }}
          ref={leagueInput}
          id="league"
          type="text"
          placeholder="Select Your Country"
          readOnly
        />
        
        <span className={openselect ? "icon active" : "icon"}>
          <FontAwesomeIcon icon="fa-angle-down" />
        </span>
        
        <div className={openselect ? "options active" : "options"}>
          {optionsArray.map((item, index) => (
            <li onClick={selectvalue} key={index}>
              {item}
            </li>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
