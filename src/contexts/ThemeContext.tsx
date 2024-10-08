import type React from "react";
import { createContext, useContext, useState } from "react";
import {
	type DefaultTheme,
	ThemeProvider as StyledThemeProvider,
} from "styled-components";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";

type ThemeContextType = {
	theme: DefaultTheme;
	toggleTheme: () => void;
	isDarkTheme: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

	const theme = currentTheme === "dark" ? darkTheme : lightTheme;
	const isDarkTheme = currentTheme === "dark";

	const toggleTheme = () => {
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
			<StyledThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
