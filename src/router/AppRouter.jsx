import { Routes, Route } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import ProjectDetails from "../pages/ProjectDetails";

export default function AppRouter() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}