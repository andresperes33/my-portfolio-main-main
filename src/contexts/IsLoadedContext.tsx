import type React from "react";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

interface IsLoadedContextType {
	isLoaded: boolean;
}

const IsLoadedContext = createContext<IsLoadedContextType | undefined>(
	undefined,
);

export const IsLoadedProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<IsLoadedContext.Provider value={{ isLoaded }}>
			{children}
		</IsLoadedContext.Provider>
	);
};

export const useIsLoaded = (): IsLoadedContextType => {
	const context = useContext(IsLoadedContext);
	if (context === undefined) {
		throw new Error("useIsLoaded must be used within an IsLoadedProvider");
	}
	return context;
};
