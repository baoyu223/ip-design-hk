import React from "react";
import { createRoot } from "react-dom/client";
import { SanityStudio } from "sanity";
import config from "../sanity.config";

createRoot(document.getElementById("sanity")).render(
  <React.StrictMode>
    <SanityStudio config={config} />
  </React.StrictMode>
);
