import type { FC } from "react";
import { useState } from "react";
import {
	CardContainer,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardOverlay,
	CardTitle,
	ImageIcon,
	LinkButton,
	LinkContainer,
	PageContainer,
	ProjectGrid,
} from "./Card.styles";
import { type Project, projects } from "./ProjectsData";
import { techIcons } from "./techIcons";

const ProjectCard: FC<Project> = ({
	title,
	image,
	description,
	github,
	deploy,
	technologies,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<CardContainer
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<CardImage src={image} alt={title} />
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardFooter>
				{technologies.map((tech) => (
					<ImageIcon key={tech} src={techIcons[tech]} alt={tech} />
				))}
			</CardFooter>
			<CardOverlay isHovered={isHovered}>
				<CardDescription>{description}</CardDescription>
				<LinkContainer>
					<LinkButton href={github} target="_blank" rel="noopener noreferrer">
						GitHub
					</LinkButton>
					<LinkButton href={deploy} target="_blank" rel="noopener noreferrer">
						Deploy
					</LinkButton>
				</LinkContainer>
			</CardOverlay>
		</CardContainer>
	);
};

const Card: FC = () => {
	return (
		<PageContainer>
			<ProjectGrid>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</ProjectGrid>
		</PageContainer>
	);
};

export default Card;
