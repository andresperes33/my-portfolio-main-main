import Card from "../../components/Card/Card";
import { ContactHeader, ContactTitle } from "../Contact/Contact.styles";
import { ProjectContainer } from "./Projects.styles";

const Contact: React.FC = () => {
	return (
		<ProjectContainer>
			<ContactHeader style={{ margin: "0" }}>
				<ContactTitle>Projetos</ContactTitle>
			</ContactHeader>
			<Card />
		</ProjectContainer>
	);
};

export default Contact;
