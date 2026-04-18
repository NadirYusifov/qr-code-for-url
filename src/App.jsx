import { Home } from "./page/home";
import { Referance } from "./page/referance";
import { Route, Routes } from "react-router";
import { Footer } from "./components/layout/footer";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referance" element={<Referance />} />
      </Routes>
      <Footer />
    </main>
  );
}
