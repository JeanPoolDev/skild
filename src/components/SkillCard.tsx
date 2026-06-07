import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	Check,
	Copy,
	MessageSquare,
} from "lucide-react";
import { useState } from "react";
import type { SkillRecord } from "#/interfaces";

export const SkillCard = ({
	authorClerkId,
	authorEmail,
	category,
	createAt,
	description,
	id,
	installCommad,
	slug,
	tags,
	title,
}: SkillRecord) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(installCommad);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<article className="skill-card">
			<Link
				to="/skills"
				tabIndex={-1}
				aria-label={`Abrir ${title}`}
				className="overlay"
			/>

			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red"></div>
						<div className="light amber"></div>
						<div className="light green"></div>
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>

			<div className="body">
				<div className="meta">
					<div className="author">
						<img src="/logo512.png" alt="author avatar" className="avatar" />
						<div className="author-copy">
							<p>Jean Pool</p>
							<p>{new Date(createAt as string).toLocaleDateString()}</p>
						</div>
					</div>
					<p className="category">{category}</p>
				</div>

				<div className="summary">
					<Link to="/skills" className="title-link">
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>

				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{installCommad}</p>
					</div>
					<button
						type="button"
						className="copy"
						aria-label="Copy install command"
						onClick={handleCopy}
					>
						{copied ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>

				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} fill="currentColor" />
							<span>{tags.length}</span>
						</button>
					</div>

					<div className="comments">
						<MessageSquare size={14} />
						<span>{authorEmail ? 1 : 0}</span>
					</div>

					<div className="actions">
						<Link to="/skills" className="open" title={`Abrir ${title}`}>
							<span>Open</span>
							<ArrowUpRight size={14} />
						</Link>
						<button
							disabled
							aria-label="Guardar estado"
							type="button"
							className="save"
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};
