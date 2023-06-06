import Portfolio from "./Portfolio"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Projects from "./components/Projects";
import { useState } from "react";
import './index.css'
import UI from "./components/UI";
import Line from "./components/Line";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  function trigger() {
    setDarkMode(!darkMode)
    console.log(darkMode);
  }
  ;




  return (
    <main className={darkMode ? "dark" : ""}>

      <nav>
        <div className="flex justify-between p-6   text-whiteFont dark:text-blackFont mx-auto dark:bg-blackbg w-full z-10 fixed bg-whitebg">
          <a href="/" className=" text-xl font-light text text-high" >Rakesh</a>
          <label
            for="toogleA"
            className="flex items-center cursor-pointer"
          >

            <div className="relative">

              <input id="toogleA" type="checkbox" className="sr-only border" onClick={trigger} />

              <div className="w-10 h-4 bg-logo border rounded-full shadow-inner"></div>

              <div className="dot absolute w-6 h-6 bg-high rounded-full shadow -left-1 -top-1 transition"></div>
            </div>

          </label>

        </div>
      </nav>
      <BrowserRouter >

        <Routes>
          <Route path="/" element={<Portfolio darkMode={darkMode} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/ui" element={<UI darkMode={darkMode} />} />


        </Routes>


      </BrowserRouter>
    </main>
  );
}

export default App;
