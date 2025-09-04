import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import PlaceholdersAndVanishInputDemo from "./components/PlaceholdersAndVanishInputDemo.tsx";
import LearningPage from "./components/LearningPage.tsx";
import LandingPage from "./components/LandingPage.tsx";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<LandingPage />} />
      <Route path="/chat" element={<PlaceholdersAndVanishInputDemo />} />
      <Route path="/learning" element={<LearningPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
