import {BrowserRouter, Route, Routes} from "react-router";
import Visualizer from "./Visualizer/Visualizer";
import SessionsList from "./SessionsList/SessionsList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SessionsList />} />
        <Route path="/viz/:sessionId" element={<Visualizer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
