import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-400 ">
        Hey i am Darshan kr
      </h1>
      <div className="w-[500px]  h-[400px] bg-red-500 p-10 m-10 rounded-md text-center text-4xl">
        I am ready for battle
      </div>
      <h1>
        I am A good boy from India
      </h1>
    </>
  );
}

export default App;
