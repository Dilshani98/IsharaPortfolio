import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Project1 } from "./pages/AllProjects/1treactor";
import { Project2 } from "./pages/AllProjects/delta";
import { Project3 } from "./pages/AllProjects/IOT";
import { Project4 } from "./pages/AllProjects/maintain";
import { Project5 } from "./pages/AllProjects/powder";
import { Project6 } from "./pages/AllProjects/powdercoating";
import { Project7 } from "./pages/AllProjects/strainer";
import { Project8 } from "./pages/AllProjects/table";
import { Project9 } from "./pages/AllProjects/waste";
import { Project10 } from "./pages/AllProjects/AGV";

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
          <Route path="/powder" element={<Project5/>} />
          <Route path="/powdercoating" element={<Project6 />} />
          <Route path="/strainer" element={<Project7 />} />
          <Route path="/table" element={<Project8 />} />
          <Route path="/waste" element={<Project9 />} />
          <Route path="/AGV" element={<Project10 />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
