import { Certification } from "../interfaces";

export const CERTIFICATIONS_DATA: Certification[] = [
    {
        id: '1',
        name: 'Angular',
        image: 'certif-angular.png',
        image_minimize: 'certif-angular-640-452.png',
        obtained_date: '2026',
        description: $localize`:@@certif_1_desc:Architecture Angular, cycle de vie et modes de rendu (SSR / SSG)
Composants modulaires, liaisons de données, directives et pipes personnalisés
Requêtes HTTP, consommation d'APIs REST, routeur Angular et lazy loading
Formulaires réactifs (ReactiveFormsModule) et validation fine des données
Tests automatisés, composants Angular Material et internationalisation (i18n)`,
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
        description: $localize`:@@certif_2_desc:Architecture applicative en couches et structuration de projets Java modernes
Développement d'APIs RESTful avec contrôleurs Spring MVC et routage
Persistance des données et gestion des entités avec Spring Data JPA / Hibernate
Sécurisation applicative avec Spring Security (authentification & autorisations)
Validation des données, gestion centralisée des erreurs et tests unitaires / d'intégration
Conteneurisation Docker, déploiement Cloud et principes Clean Code & SOLID`,
        site: 'Dyma',
        link: 'https://dyma.fr/',
        pdf: 'certification-spring-boot-GARNIER-BOIDUN-Emmanuel.pdf',
        status: 'obtained'
    },
    {
        id: '3',
        name: $localize`:@@certif_3_name:Principes de base de l'IA`,
        image: 'Certif-Google-IA-1.png',
        image_minimize: 'Certif-Google-IA-1-640-452.png',
        obtained_date: '2026',
        description: $localize`:@@certif_3_desc:Maîtriser les concepts fondamentaux de l'IA générative pour une utilisation professionnelle
Rédiger des prompts structurés et efficaces pour générer des résultats pertinents et de haute qualité
Évaluer la précision et les biais des réponses de l'IA pour garantir un usage éthique et responsable
Identifier les tâches à forte valeur ajoutée à automatiser dans son workflow quotidien`,
        site: 'Google',
        link: 'https://coursera.org/share/c932a51353dfe23a77a3ddc1d8d6cd7f',
        status: 'obtained'
    },
    {
        id: '4',
        name: $localize`:@@certif_4_name:Certificat Professionnel Google IA`,
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_4_desc:Formuler des instructions claires pour l'utiliser comme un partenaire de travail
Comprendre les mécanismes sous-jacents pour exploiter les outils avec confiance et éthique
Mobiliser l'IA pour l'analyse de données, la recherche documentaire et la communication professionnelle
Concevoir des solutions personnalisées via le vibe coding adaptées aux besoins métiers`,
        site: 'Google',
        link: 'https://www.coursera.org/professional-certificates/google-ai',
        status: 'in_progress'
    },
    {
        id: '5',
        name: 'Claude Code',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_5_desc:Maîtriser les fondamentaux des agents IA, LLM et de la boucle agentique Claude Code
Structurer le contexte projet (CLAUDE.md, rules, prompts avancés et gestion des tokens)
Développer avec l'écosystème : protocoles MCP, sous-agents parallèles, skills et hooks d'automatisation
Mener un projet de bout en bout : tests, CI/CD, Git, revues de code et vérification continue`,
        site: 'Dyma',
        link: 'https://dyma.fr/',
        status: 'in_progress'
    },
    {
        id: '6',
        name: 'Mastering Advanced Spring Boot: Microservices & System Design',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_6_desc:Fonctionnement interne : cycle de vie des beans, ApplicationContext et configurations conditionnelles
Architecture modulaire et structuration d'applications Spring Boot d'entreprise
Microservices avec Spring Cloud : découverte de services, communication inter-services, résilience et API Gateway
Stratégies de tests (unitaires, intégration, E2E), automatisation CI et observabilité`,
        site: 'Board Infinity',
        link: 'https://www.coursera.org/learn/advanced-spring-boot-development',
        status: 'wish'
    },
    {
        id: '7',
        name: 'Generative AI for Software Development Skills Certificate',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_7_desc:Ingénierie de prompts avancée pour développeurs et pair-programming avec LLM
Génération assistée de code, refactoring et écriture de tests unitaires
Revue de code automatisée, débogage et détection de failles de sécurité
Intégration d'assistants IA dans l'IDE et automatisation du workflow de dev`,
        site: 'DeepLearning.AI',
        link: 'https://www.coursera.org/professional-certificates/generative-ai-for-software-development',
        status: 'wish'
    },
    {
        id: '8',
        name: 'AWS Certified Developer',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_8_desc:Déploiement et sécurisation d'applications et microservices dans le cloud AWS
Gestion des services serverless (Lambda, API Gateway), bases de données (DynamoDB, RDS) et stockage S3
Mise en place de pipelines CI/CD et surveillance applicative via CloudWatch et X-Ray`,
        site: 'AWS',
        link: 'https://aws.amazon.com/certification/certified-developer-associate/',
        status: 'wish'
    },
    {
        id: '9',
        name: 'Docker Certified Associate (DCA)',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_9_desc:Création, optimisation et sécurisation des images de conteneurs Docker (Multi-stage builds)
Orchestration multi-conteneurs avec Docker Compose et gestion des réseaux et volumes
Déploiement, monitoring et maintenance d'infrastructures conteneurisées`,
        site: 'Mirantis',
        link: 'https://training.mirantis.com/certification/dca-certification-exam/',
        status: 'wish'
    },
    {
        id: '10',
        name: 'Google Cloud Professional Cloud Developer',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_10_desc:Conception et déploiement d'applications cloud-natives scalables sur GCP
Conteneurisation et orchestration managée avec Cloud Run et Google Kubernetes Engine (GKE)
Persistance avec bases managées : Cloud SQL, Cloud Spanner et Firestore
Automatisation CI/CD avec Cloud Build et monitoring via Google Cloud Observability`,
        site: 'Google Cloud',
        link: 'https://www.coursera.org/professional-certificates/preparing-for-google-cloud-cloud-developer-professional-certificate',
        status: 'in_progress'
    },
    {
        id: '11',
        name: 'Software Design and Architecture Specialization',
        image: '',
        obtained_date: '2026',
        description: $localize`:@@certif_11_desc:Conception orientée objet avancée et application rigoureuse des principes SOLID
Maîtrise des Design Patterns du GoF (Création, Structure, Comportement)
Architectures logicielles modernes : microservices, SOA, événementielle et modélisation UML
Gestion de la dette technique, découplage et maintenabilité des systèmes distribués`,
        site: 'University of Alberta',
        link: 'https://www.coursera.org/specializations/software-design-architecture',
        status: 'wish'
    }
];