import { IoLogoWhatsapp } from "react-icons/io";
import { WhatsButton } from "./ButtonWhats.styles";

const ButtonWhatsapp = () => {
	const whatsappLink =
		"https://wa.me/5538999821883?text=Olá%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!";
	return (
		<WhatsButton>
			<a href={whatsappLink} target="_blank" rel="noopener noreferrer">
				<IoLogoWhatsapp style={{ color: "#25D366", fontSize: "1.5rem" }} />
			</a>
		</WhatsButton>
	);
};

export default ButtonWhatsapp;
