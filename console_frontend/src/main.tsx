import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>,
);
