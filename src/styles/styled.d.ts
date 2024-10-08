import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		bgColor: string;
		textColor: string;
		primaryColor: string;
		secondaryColor: string;
		shadowColor: string;
	}
}
