import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Hystory from "./pages/Hystory";
import FullPage from "./pages/FullPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<FullPage />}>
            <Route path="/" element={<First />} />
            <Route path="/Hystory" element={<Hystory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
