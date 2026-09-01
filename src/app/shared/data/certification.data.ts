import { Certification } from "../interfaces";

export const CERTIFICATIONS_DATA: Certification[] = [
    {
        id: '1',
        name: 'Angular',
        image: 'certif-angular.png',
        image_minimize: 'certif-angular-640-452.png',
        obtained_date: '2026',
        description: 'Certification validée sur Angular',
        site: 'Dyma',
        link: 'https://dyma.fr/',
        pdf: 'certification-angular-GARNIER-BOIDUN-Emmanuel.pdf',
        status: 'obtained'
    },
    {
        id: '2',
        name: 'Spring Boot',
        image: 'certif-spring-boot.png',
        image_minimize: 'certif-spring-boot-640-452.png',
        obtained_date: '2026',
        description: 'Certification validée sur Spring Boot',
        site: 'Dyma',
        link: 'https://dyma.fr/',
        pdf: 'certification-spring-boot-GARNIER-BOIDUN-Emmanuel.pdf',
        status: 'obtained'
    },
    {
        id: '3',
        name: 'HTML - CSS',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Maîtriser les standards HTML5 sémantiques et le CSS3 moderne
Concevoir des layouts fluides et responsives avec Flexbox et CSS Grid
Structurer et optimiser ses feuilles de styles avec le préprocesseur Sass
Intégrer des interfaces complexes et adaptées à tous types d'écrans`,
        site: 'Dyma',
        link: 'https://dyma.fr/',
        status: 'in_progress'
    },
    {
        id: '4',
        name: 'TypeScript',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Typage statique avancé : interfaces, types personnalisés et génériques
Configuration et maîtrise du compilateur TypeScript (tsc / tsconfig)
Exploitation de l'inférence de type et des fonctionnalités ESNext
Débogage efficace et architecture d'applications robustes`,
        site: 'Dyma',
        link: 'https://dyma.fr/',
        status: 'in_progress'
    },
    {
        id: '5',
        name: 'Claude Code',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Maîtriser les fondamentaux des agents IA, LLM et de la boucle agentique Claude Code
Intégrer et configurer Claude Code : CLI, VS Code, règles de sécurité, sandbox et permissions
Structurer le contexte projet (CLAUDE.md, rules, prompts avancés et gestion des tokens)
Développer avec l'écosystème : protocoles MCP, sous-agents parallèles, skills et hooks d'automatisation
Mener un projet de bout en bout : tests, CI/CD, Git, revues de code et vérification continue`,
        site: 'Dyma',
        link: 'https://dyma.fr/',
        status: 'in_progress'
    },
    {
        id: '6',
        name: 'Principes de base de l\'IA',
        image: 'certif-google-ai.png',
        obtained_date: '2026',
        description: `Maîtriser les concepts fondamentaux de l'IA générative pour une utilisation professionnelle
Rédiger des prompts structurés et efficaces pour générer des résultats pertinents et de haute qualité
Évaluer la précision et les biais des réponses de l'IA pour garantir un usage éthique et responsable
Identifier les tâches à forte valeur ajoutée à automatiser dans son workflow quotidien`,
        site: 'Coursera',
        link: 'https://www.coursera.org/learn/google-ai-fundamentals',
        status: 'wish'
    },
    {
        id: '7',
        name: 'Certificat Professionnel Google IA',
        image: 'certif-agile.png',
        obtained_date: '2026',
        description: `Collaborer efficacement avec l'IA : formuler des instructions claires pour l'utiliser comme un partenaire de travail
Utilisation responsable : comprendre les mécanismes sous-jacents pour exploiter les outils avec confiance et éthique
Compétences clés : mobiliser l'IA pour l'analyse de données, la recherche documentaire et la communication professionnelle
Création d'applications : concevoir des solutions personnalisées via le vibe coding adaptées aux besoins métiers`,
        site: 'Coursera',
        link: 'https://www.coursera.org/professional-certificates/google-ai',
        status: 'wish'
    },
    {
        id: '8',
        name: 'AWS Certified Developer - Associate',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Déploiement et sécurisation d'applications et microservices dans le cloud AWS
Gestion des services serverless (Lambda, API Gateway), bases de données (DynamoDB, RDS) et stockage S3
Mise en place de pipelines CI/CD et surveillance applicative via CloudWatch et X-Ray`,
        site: 'Amazon Web Services',
        link: 'https://aws.amazon.com/certification/certified-developer-associate/',
        status: 'wish'
    },
    {
        id: '9',
        name: 'Oracle Certified Professional Java SE 17/21',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Maîtrise approfondie des fonctionnalités avancées de Java moderne (Records, Pattern Matching, Sealed Classes)
Programmation orientée objet, gestion de la mémoire, Garbage Collector et Concurrency
Flux de données (Streams), I/O, NIO.2, JDBC et modularité logicielle (JPMS)`,
        site: 'Oracle',
        link: 'https://education.oracle.com/oracle-certified-professional-java-se-17-developer/pexam_1Z0-829',
        status: 'wish'
    },
    {
        id: '10',
        name: 'Professional Scrum Master (PSM I)',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Maîtrise approfondie du framework Scrum, des rôles, des artefacts et des événements
Facilitation des processus agiles et résolution des blocages au sein des équipes de développement
Optimisation de la productivité et de la livraison de valeur continue`,
        site: 'Scrum.org',
        link: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification',
        status: 'wish'
    },
    {
        id: '11',
        name: 'Docker Certified Associate (DCA)',
        image: 'certif-spring-boot.png',
        obtained_date: '2026',
        description: `Création, optimisation et sécurisation des images de conteneurs Docker (Multi-stage builds)
Orchestration multi-conteneurs avec Docker Compose et gestion des réseaux et volumes
Déploiement, monitoring et maintenance d'infrastructures conteneurisées`,
        site: 'Docker',
        link: 'https://www.docker.com/',
        status: 'wish'
    }
]