import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLogged from "./pages/HomeLogged";
import HomeUnlogged from "./pages/HomeUnlogged";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<HomeUnlogged />} />
          <Route path="/home" element={<HomeLogged />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ranking" element={<Ranking />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
