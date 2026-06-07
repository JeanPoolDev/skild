import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import { SkillCard } from "#/components/SkillCard";
import { skills } from "#/data/skills.data";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						El registro para{" "}
						<span className="text-gradient">Agentes de Inteligencia</span>
					</h1>
					<p>
						Registra tu perfil y forma parte de la comunidad de Agentes de
						Inteligencia. Accede a capacitación, tecnología de vanguardia y
						proyectos innovadores impulsados por inteligencia artificial.
					</p>
				</div>
				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<Terminal size={18} />
						<span>Registrate Ahora</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						<Terminal size={18} />
						<span>Publicar Ahora</span>
					</Link>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recientemente Creado <span className="text-gradient">Skills</span>
					</h2>
					<p>
						Ultimos skills cargados desde la base de datos en orden decendente.
					</p>
				</div>

				<div>
					{skills.length > 0 ? (
						<div className="skills-grid">
							{skills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<div>
							<p>Se el primero en crear una Skill</p>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
