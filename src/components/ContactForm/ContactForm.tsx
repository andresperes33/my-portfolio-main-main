import emailjs from "emailjs-com";
import type React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, Input, TextArea } from "./ContactForm.styles";

const isValidEmail = (email: string): boolean => {
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!emailRegex.test(email)) {
		return false;
	}
	const [, domain] = email.split("@");
	const validDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
	if (!validDomains.includes(domain.toLowerCase())) {
		return false;
	}

	return true;
};

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		assunto: "",
		message: "",
	});
	const [isSending, setIsSending] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Formulário submetido");

		if (!isValidEmail(formData.email)) {
			toast.error("Por favor, insira um email válido.");
			return;
		}

		setIsSending(true);

		try {
			console.log("Iniciando envio de email");
			const result = await emailjs.sendForm(
				"service_zyb642p",
				"template_jedfg9g",
				e.currentTarget as HTMLFormElement,
				"tMYWyOEtaht5vC1ju",
			);

			console.log("Resposta do EmailJS:", result);

			if (result.text === "OK") {
				toast.success("Mensagem enviada com sucesso!");
				setFormData({ name: "", email: "", assunto: "", message: "" });
			} else {
				throw new Error("Resposta inesperada do servidor");
			}
		} catch (error) {
			console.error("Erro detalhado ao enviar e-mail:", error);
			toast.error(`Erro ao enviar mensagem: ${(error as Error).message}`);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<>
			<ToastContainer autoClose={3000} />
			<Form onSubmit={handleSubmit}>
				<div>
					<Input
						type="text"
						name="name"
						placeholder="Nome"
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<Input
						type="text"
						name="assunto"
						placeholder="Assunto"
						value={formData.assunto}
						onChange={handleChange}
						required
					/>
				</div>
				<TextArea
					name="message"
					placeholder="Mensagem"
					rows={5}
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<Button type="submit" disabled={isSending}>
					{isSending ? "Enviando..." : "Enviar"}
				</Button>
			</Form>
		</>
	);
};

export default ContactForm;
