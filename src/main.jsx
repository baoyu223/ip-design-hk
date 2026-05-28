import { createRoot } from "react-dom/client";
import { SanityStudio } from "sanity";
import config from "../sanity.config";

createRoot(document.getElementById("sanity")).render(
  <SanityStudio config={config} />
);
