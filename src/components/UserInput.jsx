import React, {useState} from "react";
import '../components/App.css'



export default function UserInput() {

    const [inputValue, setInputValue] = useState('');
    const [inputs, setInputs] = useState([]);

    const pressEnter = (event) => {

        if (event.key === 'Enter') {
            event.preventDefault()
            setInputs([...inputs, event.target.value])
            setInputValue('')
            event.target.value = ' '
        }

    }


    

    return (
        <div className="backdrop-blur-xl bg-white/5  ">
      <div >
        <h1>Whats on your mind today?</h1>
        <input 
        className="" 
        type="text" 
        onKeyDown={pressEnter}
        />
    </div>
        {
            inputs.map((input, index) => (
                <span key={index}>
                    {input}
                </span>
            ))
        }
      </div>
    );
  }
  