import { BrowserRouter as Router } from "react-router-dom";

import ThemeToggleButton from "../components/Button/Button";
import Header from "../components/Header/Header";
import { IsLoadedProvider } from "../contexts/IsLoadedContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import AppRoutes from "../routes/AppRoutes";
import GlobalStyle from "../styles/global";
import ButtonWhatsapp from "./Button/ButtonWhats";
import Footer from "./Footer/footer";

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<IsLoadedProvider>
				<GlobalStyle />
				<Router>
					<Header />
					<ThemeToggleButton />
					<ButtonWhatsapp />
					<AppRoutes /> <Footer />
				</Router>
			</IsLoadedProvider>
		</ThemeProvider>
	);
};

export default App;
