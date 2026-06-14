import { Home } from "./page/home";
import { Referance } from "./page/referance";
import { Route, Routes } from "react-router";
import { Footer } from "./components/layout/footer/footer";
import { Header } from "./components/layout/header/header";
import { About } from "./page/about";

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/referance" element={<Referance />} />
      </Routes>
      <Footer />
    </main>
  );
}
