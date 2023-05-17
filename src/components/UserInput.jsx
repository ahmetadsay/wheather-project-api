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
        <div >
      <div className="rounded-2xl bg-stone-500/50 backdrop-blur-sm w-[20rem] h-[6rem] absolute -translate-x-2/4 -translate-y-[20rem] left-2/4 top-2/4; " >
        <h1 className="text-white ml-12 mt-4">Whats on your mind today?</h1>
        <input 
        className=" w-full  mt-2 text-white border-0 outline-none ;
         " 
        type=  "text" 
        onKeyDown={pressEnter}
        />
        </div>
        <div className=" px-4 rounded-2xl bg-gray-500/50 backdrop-blur-sm w-[20rem] h-[8rem] absolute -translate-x-2/4 -translate-y-[1rem] left-2/4 top-2/4 ">
        {
            inputs.map((input, index) => (
                <span className="text-white text-center mx-5 " key={index}>
                    {input}
                </span>
            ))
        }
        </div>
      </div>
    );
  }
  