import useLocalStorage from "./components/useLocalStorage";

import "./App.css";

function App() {
  const localName = useLocalStorage("localName", "");
  const localAge = useLocalStorage("localAge", 2);
  return (
    <>
      <h2>Local Storage Custom Hook Practice</h2>
      <div>
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...localName} />
        </div>
        <div>
          <label className="label" htmlFor="age">
            Age
          </label>
          <select name="selectedAge" id="age" {...localAge}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
