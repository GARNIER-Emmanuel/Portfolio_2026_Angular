import { Project } from "../interfaces";

export const PROJECT_DATA: Project[] = [
    {
        id: 'portfolio-2026',
        name: 'Portfolio 2026',
        date: '2026',
        image: 'wood_background.jpg',
        description: $localize`:@@project_portfolio_desc:Portfolio personnel bilingue (FR/EN)
Architecture moderne Angular Signals & Zoneless
Stylisé avec Tailwind CSS v4 & Material Theming`,
        repo: 'https://github.com/GARNIER-Emmanuel/Portfolio_2026_Angular',
        type: 'personal',
        skills: [
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'frontend' },
        ],
    },
    {
        id: '1',
        name: $localize`:@@project_1_name:Certification Angular`,
        image: 'certif-angular-640-452.png',
        date: '2026',
        description: $localize`:@@project_1_desc:Certification Dyma validée en 2026
Maîtrise approfondie des Standalone Components, Signals réactifs, Control Flow et formulaires typés`,
        type: 'formation',
        repo: 'https://github.com/GARNIER-Emmanuel/dyma-cocktails',
        skills: [
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
            { name: 'Signals / RxJS', icon: 'bolt', category: 'frontend' },
        ],
    },
    {
        id: '2',
        name: $localize`:@@project_2_name:Certification Spring Boot`,
        image: 'certif-spring-boot-640-452.png',
        date: '2026',
        description: $localize`:@@project_2_desc:Certification Dyma validée
Développement d’APIs REST sécurisées, persistance relationnelle avec JPA / Hibernate et Spring Security`,
        type: 'formation',
        repo: 'https://github.com/GARNIER-Emmanuel/dyma-tennis',
        skills: [
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'Spring Boot', icon: 'devicon-spring-original colored', category: 'backend' },
            { name: 'Spring Security', icon: 'security', category: 'backend' },
        ],
    },
    {
        id: '3',
        name: 'JobTracker',
        date: '2026',
        image: 'certif-spring-boot-640-452.png',
        description: $localize`:@@project_3_desc:Plateforme modulaire de suivi des candidatures
Backend Spring Boot 3 & Neon PostgreSQL (Flyway, TDD)
Frontend Angular Standalone (Signals, PrimeNG)`,
        repo: 'https://github.com/GARNIER-Emmanuel/JobTracker',
        type: 'personal',
        skills: [
            { name: 'Spring Boot 3', icon: 'devicon-spring-original colored', category: 'backend' },
            { name: 'Angular Signals', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'backend' },
            { name: 'PrimeNG', icon: 'palette', category: 'frontend' },
            { name: 'TDD / Flyway', icon: 'check_circle', category: 'tools' },
        ],
    },
    {
        id: '4',
        name: 'CineMatch',
        date: '2026',
        image: 'certif-angular-640-452.png',
        description: $localize`:@@project_4_desc:Site web de recommandation cinématographique interactive (swipe duo synchronisé, roulette 3D, flux Letterboxd)
Frontend Angular Glassmorphism
Backend NestJS & TMDB API sous Docker`,
        type: 'personal',
        skills: [
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'NestJS', icon: 'devicon-nestjs-plain colored', category: 'backend' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
            { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devops' },
            { name: 'Vitest / TMDB', icon: 'movie', category: 'tools' },
        ],
    },
    {
        id: '5',
        name: "Gem's Coach",
        date: '2026',
        image: 'SportPro.png',
        description: $localize`:@@project_5_desc:PWA de coaching et suivi de musculation hors-ligne
Calculs métaboliques avancés (BMR, TDEE, 1RM)
Pour ma routine sportive personnelle`,
        live: 'https://gem-s-coach.vercel.app/',
        type: 'personal',
        skills: [
            { name: 'React 19 / Vite', icon: 'devicon-react-original colored', category: 'frontend' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'frontend' },
            { name: 'PWA / Recharts', icon: 'fitness_center', category: 'tools' },
        ],
    },
    {
        id: '6',
        name: 'FeedlyReader',
        image: 'FeedlyReader.png',
        date: '2024',
        description: $localize`:@@project_6_desc:Agrégateur de flux RSS intelligent avec catégorisation thématique des actualités
Développé avec React et Next.js
Pour ma veille personnelle`,
        type: 'personal',
        skills: [
            { name: 'React', icon: 'devicon-react-original colored', category: 'frontend' },
            { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'frontend' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
        ],
    },
    {
        id: '7',
        name: "Immo'Bill",
        image: 'ProjetImmo.png',
        date: '2023',
        description: $localize`:@@project_7_desc:Application mobile Android de gestion locative et réservation de villas
Modélisation SQL avec JMerise et gestion de projet via diagramme de Gantt`,
        type: 'school',
        skills: [
            { name: 'Android', icon: 'devicon-android-plain colored', category: 'frontend' },
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'SQL / Merise', icon: 'dataset', category: 'backend' },
        ],
    },
    {
        id: '8',
        name: 'Form Dentiste Symfony',
        date: '2023',
        image: '',
        description: $localize`:@@project_8_desc:Gestion de cabinet dentaire (dossiers patients, planification des rendez-vous et rôles sécurisés)
Développée avec Symfony 6.2, Doctrine ORM, Twig, Bootstrap et MySQL`,
        repo: 'https://github.com/GARNIER-Emmanuel/form_dentiste_symfony',
        type: 'school',
        skills: [
            { name: 'Symfony 6', icon: 'devicon-symfony-original', category: 'backend' },
            { name: 'PHP 8', icon: 'devicon-php-plain colored', category: 'backend' },
            { name: 'Doctrine / MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
            { name: 'Bootstrap / Twig', icon: 'devicon-bootstrap-plain colored', category: 'frontend' },
            { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devops' },
        ],
    },
];