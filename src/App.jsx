import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
