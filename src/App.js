import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Message from "./Pages/Message";
import Product from "./Pages/Product";
import Report from "./Pages/Report";
import Support from "./Pages/Support";
import Team from "./Pages/Team";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/message" element={<Message />} />
          <Route path="/product" element={<Product />} />
          <Route path="/report" element={<Report />} />
          <Route path="/support" element={<Support />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
