import { Skill } from "./skills.interface";

export interface ExperienceMission {
    title: string;
    period: string;
    technologies: string;
    summary: string;
    highlights: string[];
}

export interface Experience {
    id: string;
    name: string;
    logo: string;
    title: string;
    period: string;
    resume: string;
    description: string;
    missions?: ExperienceMission[];
    school?: boolean;
    skills: Skill[];
}
