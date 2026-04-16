
import Home from "./page/home";
import Legal from "./page/legal/legal";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </main>
  );
}
