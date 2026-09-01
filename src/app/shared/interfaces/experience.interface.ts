import { Skill } from "./skills.interface";

export interface Experience {
    id: string;
    name: string;
    logo: string;
    title: string;
    period: string;
    resume: string;
    description: string;
    school?: boolean;
    skills: Skill[];
}
