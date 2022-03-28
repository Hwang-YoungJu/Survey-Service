import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./pages/MainPage";

const Wrapper = styled.div`
  background-color: royalblue;
  margin: 0 auto;
  width: 100%;
  height: 500px;
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
