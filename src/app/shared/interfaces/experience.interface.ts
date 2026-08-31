import { Skill } from "./skills.interface";

export interface Experience {
    id: string;
    company: string;
    logo: string;
    role: string;
    period: string;
    resume: string;
    description: string;
    skills: Skill[];
}
