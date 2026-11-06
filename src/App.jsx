import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Committee from "./pages/Committee.jsx";
import Donate from "./pages/Donate.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="committee" element={<Committee />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
