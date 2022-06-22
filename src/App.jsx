import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import SurveyPage from "./pages/surveyPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
  );
}

export default App;
