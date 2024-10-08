import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};

export default AppRoutes;
