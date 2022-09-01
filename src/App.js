import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutDashboard from "./Components/LayoutDashboard";
import Login from "./LoginTab";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<LayoutDashboard />} />
        </Routes>
      </Router>
      {/* <LayoutDashboard /> */}
    </div>
  );
}

export default App;
