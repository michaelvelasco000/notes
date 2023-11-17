import { useState } from "react";
import "./App.css";

function App() {
  function fibonacci() {
    const result = [1, 2];
    for (let i = 2; i < 10; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }

  const name = "Josh Perez";
  const element = <h1>Hello {name}</h1>;

  const [count, setCount] = useState(0);
  // const [Name, setName] = useState("hello");
  const [isChecked, setisChecked] = useState(false);
  const [fruits, setFruits] = useState(["Mango", "Durian", "Papaya"]);
  const [newFruit, setNewFruit] = useState(""); // State to store the user's input

  const addFruit = () => {
    if (newFruit.trim() !== "") {
      setFruits((prevFruits) => [...prevFruits, newFruit]);
      setNewFruit(""); // Clear the input field after adding
    }
  };
  // const [person, setPerson] = useState[{ name: "miggy", age: 22 }];

  const handleIncrement = () => {
    setCount((prevState) => count + 1);
  };
  const handleDecrement = () => {
    setCount((prevState) => count - 1);
  };
  const delFruit = (fruitIndex) => {
    const filteredFruits = fruits.filter(
      (fruit, index) => index !== fruitIndex
    );
    setFruits(filteredFruits);
  };
  const handleShowFruits = () => {
    setisChecked(!isChecked);
  };
  return (
    <>
      <h1>Hello world! {element}</h1>
      <p>How are you?{fibonacci().join(",")}</p>

      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrements</button>
      <hr />
      <div>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>
      <ul className="list-group">
        {isChecked &&
          fruits.map((fruit, index) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <li key={index} className="list-group-item">
                  {fruit}
                </li>
                <button onClick={() => delFruit(index)}>Delete Fruit</button>
              </div>
            );
          })}
        <input
          type="text"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter a new fruit"
        />
        <button onClick={addFruit}>Add Fruit</button>
      </ul>
    </>
  );
}

export default App;
