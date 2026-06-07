export interface SkillRecord {
	id: string;
	title: string;
	slug: string;
	description: string;
	category: string;
	tags: string[];
	installCommad: string;
	createAt: string | null;
	authorClerkId: string | null;
	authorEmail: string | null;
}
