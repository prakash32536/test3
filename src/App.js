import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Page/Register";
import AllowancesPage from "./Page/AllowancesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/allowances" element={<AllowancesPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
