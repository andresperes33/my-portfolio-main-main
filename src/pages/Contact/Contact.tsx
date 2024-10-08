import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import ContactForm from "../../components/ContactForm/ContactForm";

import { useIsLoaded } from "../../contexts/IsLoadedContext";
import {
	ContactContainer,
	ContactHeader,
	ContactTitle,
	ContainerIcons,
	ContainerText,
	ReflexLink,
	Title,
} from "./Contact.styles";

const Projects: React.FC = () => {
	const { isLoaded } = useIsLoaded();

	return (
		<ContactContainer $isLoaded={isLoaded}>
			<ContactHeader>
				<ContactTitle>Contato</ContactTitle>
			</ContactHeader>
			<ContainerText $isLoaded={isLoaded}>
				<Title>Você tem alguma pergunta?</Title>
				<h3>ESTOU AO SEU SERVIÇO.</h3>
			</ContainerText>
			<ContainerIcons $isLoaded={isLoaded}>
				<div>
					<FaPhoneVolume style={{ fontSize: "2rem" }} />
					<h3>Celular</h3>
					<ReflexLink href="tel:38999821883" target="_blank" rel="noreferrer">
						(38)99982-1883
					</ReflexLink>
				</div>
				<div>
					<MdEmail style={{ fontSize: "2rem" }} />
					<h3>Email</h3>
					<ReflexLink
						href="mailto:andresperesdev@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						andresperesdev@gmail.com
					</ReflexLink>
				</div>
				<div>
					<IoLocationSharp style={{ fontSize: "2rem" }} />
					<h3>Endereço</h3>
					<ReflexLink
						href="https://www.google.com/maps?q=Av+Paulista,+1234,+São+Paulo,+SP"
						target="_blank"
						rel="noreferrer"
					>
						Paracatu, MG
					</ReflexLink>
				</div>
				<div>
					<TiSocialLinkedin style={{ fontSize: "2rem" }} />
					<h3>LinkedIn</h3>
					<ReflexLink
						href="https://www.linkedin.com/in/andresperes33/"
						target="_blank"
						rel="noreferrer"
					>
						andresperes33
					</ReflexLink>
				</div>
			</ContainerIcons>
			<ContainerText $isLoaded={isLoaded}>
				<Title>Me mande um email</Title>
				<h3>Minha resposta costuma ser rápida.</h3>
			</ContainerText>
			<ContactForm />
		</ContactContainer>
	);
};

export default Projects;
