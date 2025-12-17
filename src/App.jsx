import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import CoursePage from "./pages/Course/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/course/:id" element={<CoursePage />} />
        {/* <Route path="/service" element={<Services />} />
        <Route path="profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
