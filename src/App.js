import Portfolio from "./Portfolio"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
