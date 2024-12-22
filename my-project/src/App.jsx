// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import StopWatch from "../components/StopWatch";
// import Project_1 from "../components/Project_1";
// import UseeffectPrac from "../components/UseeffectPrac";
import SchedulePage from "../components/SchedulePage";
import "./App.css";
// import Navbar from "../components/Navbar";
// import DarkMode from "../components/DarkMode";


function App() {
//   // const [count, setCount] = useState(0);
//   const [nameBar,setNewName]=useState("TextUtils");
//     const updateName=(newName)=>{
//       setNewName(newName);
//     };

  return (
    // <>
    //   <div className="logo-container">
    //     <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
    //       <img src={viteLogo} className="logo" alt="Vite official logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
    //       <img src={reactLogo} className="logo react" alt="React official logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       Count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
      // <Navbar title={nameBar} aboutText="About Us" changeName={updateName} />
      // <DarkMode/>
        // <StopWatch/>
        // <UseeffectPrac/>
        <SchedulePage/>
        console.log('first', first)
  );
}

export default App;
