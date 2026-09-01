export interface Certification {
    id: string;
    name: string;
    image: string;
    image_minimize?: string;
    obtained_date: string;
    description: string;
    site: string;
    link: string;
    pdf?: string;
    status: 'obtained' | 'in_progress' | 'wish';
}
