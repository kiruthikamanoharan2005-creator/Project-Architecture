import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./app/frontpage";
import Modern from "./app/Components/modern";
import TraditionalHouseSite from "./app/Components/tradition";
import HouseFilterPage from "./app/Explore/explore";
import Cafe from "./app/Components/cafes";
import Projects from "./app/Components/projects";
import Contact from "./app/Contact/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />   {/* FIXED */}
        <Route path="/modern" element={<Modern />} />
        <Route path="/tradition" element={<TraditionalHouseSite />} />
        <Route path="/explore" element={<HouseFilterPage />} />
        <Route path="/cafes" element={<Cafe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Router>
  );
}

export default App;
