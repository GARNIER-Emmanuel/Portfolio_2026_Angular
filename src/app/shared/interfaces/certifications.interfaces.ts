export interface Certification {
    id: string;
    name: string;
    image: string;
    obtained_date: string;
    description: string;
    site: string;
    link: string;
    status: 'obtained' | 'in_progress';
}
