import { Skill } from "./skills.interface";

export interface Project {
    id: string;
    name: string;
    image: string;
    date: string;
    description: string;
    repo?: string;
    live?: string;
    type: 'formation' | 'school' | 'personal';
    skills: Skill[];
}