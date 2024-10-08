import type React from "react";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { IoConstruct } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import {
	HeaderContainer,
	MobileMenuButton,
	MobileMenuOverlay,
	NavItem,
	NavList,
} from "./header.styles";

const Header: React.FC = () => {
	const { theme } = useTheme();
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<HeaderContainer theme={theme}>
			{isMobile && (
				<MobileMenuButton onClick={toggleMenu}>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</MobileMenuButton>
			)}
			{isMobile && isMenuOpen ? (
				<MobileMenuOverlay>
					<NavList>
						<NavItem>
							<Link to="/" onClick={toggleMenu}>
								<FaHome style={{ margin: "-1px 3px" }} />
								Início
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/about" onClick={toggleMenu}>
								<MdPermContactCalendar style={{ margin: "-4px 3px" }} />
								Sobre
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/projects" onClick={toggleMenu}>
								<IoConstruct style={{ margin: "-1px 3px" }} />
								Projetos
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/contact" onClick={toggleMenu}>
								<IoMdContacts style={{ margin: "-1px 2px" }} />
								Contato
							</Link>
						</NavItem>
					</NavList>
				</MobileMenuOverlay>
			) : (
				<NavList style={{ display: isMobile ? "none" : "flex" }}>
					<NavItem>
						<Link to="/">
							<FaHome style={{ margin: "-1px 3px" }} />
							Início
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/about">
							<MdPermContactCalendar style={{ margin: "-2px 3px" }} />
							Sobre
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/projects">
							<IoConstruct style={{ margin: "-1px 3px" }} />
							Projetos
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/contact">
							<IoMdContacts style={{ margin: "-1px 3px" }} />
							Contato
						</Link>
					</NavItem>
				</NavList>
			)}
		</HeaderContainer>
	);
};

export default Header;
