import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "../component/nav/Navber";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navbar সব পেজেই থাকবে */}
      <Navber/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}