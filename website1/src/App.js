import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./app/frontpage";
import Modern from "./app/Components/modern";
import TraditionalHouseSite from "./app/Components/tradition";
import HouseFilterPage from "./app/Explore/explore";
import Cafe from "./app/Components/cafes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />   {/* FIXED */}
        <Route path="/modern" element={<Modern />} />
        <Route path="/tradition" element={<TraditionalHouseSite />} />
        <Route path="/explore" element={<HouseFilterPage />} />
          <Route path="/cafes" element={<Cafe />} />


      </Routes>
    </Router>
  );
}

export default App;
