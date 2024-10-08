import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggle } from "./Button.styles";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ThemeToggleButton: React.FC = () => {
	const { toggleTheme, isDarkTheme } = useTheme();

	return (
		<ThemeToggle onClick={toggleTheme}>
			{isDarkTheme ? (
				<FaSun style={{ fontSize: "1.3rem", color: "white" }} />
			) : (
				<FaMoon style={{ fontSize: "1.3rem" }} />
			)}
		</ThemeToggle>
	);
};

export default ThemeToggleButton;
