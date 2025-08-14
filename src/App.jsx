import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Project1 } from "./pages/AllProjects/1treactor";
import { Project2 } from "./pages/AllProjects/delta";
import { Project3 } from "./pages/AllProjects/IOT";
import { Project4 } from "./pages/AllProjects/maintain";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1treactor" element={<Project1 />} />
          <Route path="/delta" element={<Project2 />} />
          <Route path="/IOT" element={<Project3 />} />
          <Route path="/maintain" element={<Project4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
