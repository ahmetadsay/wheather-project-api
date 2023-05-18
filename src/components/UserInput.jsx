import  { useState } from "react";
import "../components/App.css";

export default function UserInput() {
  const [inputValue, setInputValue] = useState("");
  const [inputs, setInputs] = useState([]);
  const [inputColors, setInputColors] = useState({});

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputText = event.target.value;
      const newInputColors = { ...inputColors };
      if (!newInputColors[inputText]) {
        newInputColors[inputText] = getRandomColor();
      }
      setInputs([...inputs, inputText]);
      setInputColors(newInputColors);
      setInputValue("");
      event.target.value = "";
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const removeInput = (index) => {
    const updatedInputs = [...inputs]
    updatedInputs.splice(index, 1)
    setInputs(updatedInputs)
  }
  

  return (
    <div>
      <div className="rounded-2xl bg-stone-500/50 backdrop-blur-sm w-[20rem] h-[6rem] absolute -translate-x-2/4 -translate-y-[20rem] left-2/4 top-2/4;">
        <h1 className="text-white ml-12 mt-4">Whats on your mind today?</h1>
        <input
          className="w-full mt-2 text-white border-0 outline-none"
          type="text"
          onKeyDown={pressEnter}
        />
      </div>
      <div className="flex flex-wrap gap-x-4 px-4 rounded-2xl bg-gray-500/50 backdrop-blur-sm w-[20rem] h-[8rem] absolute -translate-x-2/4 -translate-y-[1rem] left-2/4 top-2/4 overflow-auto">
        {inputs.map((input, index) => (
           
            input &&
            
          <span
            className="  h-8 text-white p-1 rounded-2xl text-center mt-2"
            key={index}
            style={{ backgroundColor: inputColors[input] }}
          >
            {input}
            <span> <button onClick={() => removeInput(index)} className="ml-4"> X </button></span>
          </span>
          


        ))}
            
      </div>
    </div>
  );
}
