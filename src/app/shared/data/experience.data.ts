import { Experience } from "../interfaces";

export const EXPERIENCES_DATA: Experience[] = [
    {
        id: '1',
        name: 'CGI – Bordeaux',
        logo: 'cgi.png',

        title: $localize`:@@exp_1_title:Développeur Java Full Stack (Alternance)`,

        period: $localize`:@@exp_1_period:09/2023 – 07/2026`,

        resume: $localize`:@@exp_1_resume:Développement d'applications web Java / Spring Boot / Angular et modernisation d'un logiciel desktop Java Swing en environnement Agile.`,

        description: $localize`:@@exp_1_desc:Développement d'applications web métiers et modernisation d'un logiciel de comparaison de documents PDF.`,

        missions: [
            {
                title: $localize`:@@exp_1_web_title:Applications web métiers`,
                period: '09/2024 – 07/2026',
                technologies: 'Java 21 · Spring Boot · Angular · MySQL',
                summary: $localize`:@@exp_1_web_summary:Contribution au développement d'applications métiers pour des projets grands comptes.`,
                highlights: [
                    $localize`:@@exp_1_web_ui:Développement de composants Angular et de formulaires avec validation, connectés aux API via HttpClient.`,
                    $localize`:@@exp_1_web_api:Conception d'API REST Spring Boot, structuration des échanges avec des DTO et persistance MySQL avec Spring Data JPA.`,
                    $localize`:@@exp_1_web_architecture:Organisation du back-end par domaines fonctionnels, avec séparation des responsabilités entre Controller, Service et Repository.`,
                    $localize`:@@exp_1_web_tests:Tests unitaires des services et des cas d'erreur avec JUnit, Mockito et AssertJ.`,
                ],
            },
            {
                title: $localize`:@@exp_1_desktop_title:Modernisation d'un logiciel Java / Swing`,
                period: '09/2023 – 09/2024',
                technologies: 'Java 17 · Swing · JUnit · AssertJ',
                summary: $localize`:@@exp_1_desktop_summary:Évolution d'un logiciel de comparaison de PDF et de détection d'anomalies.`,
                highlights: [
                    $localize`:@@exp_1_desktop_analysis:Analyse de l'existant et rédaction de la documentation technique.`,
                    $localize`:@@exp_1_desktop_engine:Adaptation du moteur de comparaison au traitement de plusieurs documents par exécution.`,
                    $localize`:@@exp_1_desktop_ui:Contribution à la refonte de l'interface et de la navigation entre les fichiers analysés.`,
                    $localize`:@@exp_1_desktop_quality:Automatisation des rapports Excel d'anomalies, refactorisation des traitements et ajout de tests unitaires.`,
                ],
            },
        ],

        skills: [
            {
                name: 'Java',
                icon: 'devicon-java-plain colored',
                category: 'backend'
            },
            {
                name: 'Spring Boot',
                icon: 'devicon-spring-original colored',
                category: 'backend'
            },
            {
                name: 'Angular',
                icon: 'devicon-angularjs-plain colored',
                category: 'frontend'
            },
            {
                name: 'TypeScript',
                icon: 'devicon-typescript-plain colored',
                category: 'frontend'
            },
            {
                name: 'Swing',
                icon: 'devicon-java-plain',
                category: 'backend'
            },
            {
                name: 'MySQL',
                icon: 'devicon-mysql-original colored',
                category: 'backend'
            },
            {
                name: 'Docker',
                icon: 'devicon-docker-plain colored',
                category: 'devops'
            },
            {
                name: 'Git',
                icon: 'devicon-git-plain colored',
                category: 'tools'
            },
            {
                name: 'GitLab',
                icon: 'devicon-gitlab-plain colored',
                category: 'tools'
            },
            {
                name: 'JUnit / Mockito / AssertJ',
                icon: 'check_circle',
                category: 'tools'
            },
            {
                name: 'TDD',
                icon: 'verified',
                category: 'tools'
            },
            {
                name: 'Agile / Scrum',
                icon: 'groups',
                category: 'tools'
            }
        ]
    },
    {
        id: '2',
        name: 'ElementRoot – Pau',
        logo: 'elementroot.png',

        title: $localize`:@@exp_2_title:Développeur Web (Stage)`,

        period: $localize`:@@exp_2_period:01/2023 – 02/2023`,

        resume: $localize`:@@exp_2_resume:Développement d'une application web de gestion de cabinet dentaire avec PHP, Symfony et Doctrine ORM.`,

        description: $localize`:@@exp_2_desc:Développement d'une application web dédiée à la gestion des dossiers patients d'un cabinet dentaire.`,

        missions: [
            {
                title: $localize`:@@exp_2_patient_title:Gestion des dossiers patients`,
                period: '01/2023 – 02/2023',
                technologies: 'PHP · Symfony · Doctrine ORM · MySQL',
                summary: $localize`:@@exp_2_patient_summary:Mise en œuvre des parcours de saisie, de consultation et de mise à jour des données patients.`,
                highlights: [
                    $localize`:@@exp_2_patient_forms:Conception et intégration des formulaires de gestion des patients avec Symfony.`,
                    $localize`:@@exp_2_patient_backend:Développement des traitements back-end en PHP pour la validation et le traitement des données.`,
                    $localize`:@@exp_2_patient_data:Gestion de la persistance des dossiers patients avec Doctrine ORM et MySQL.`,
                    $localize`:@@exp_2_patient_ui:Intégration des interfaces utilisateur avec Twig, HTML, CSS et Bootstrap.`,
                ],
            },
        ],

        skills: [
            {
                name: 'Symfony',
                icon: 'devicon-symfony-original',
                category: 'backend'
            },
            {
                name: 'PHP',
                icon: 'devicon-php-plain colored',
                category: 'backend'
            },
            {
                name: 'Doctrine ORM',
                icon: 'storage',
                category: 'backend'
            },
            {
                name: 'Twig',
                icon: 'code',
                category: 'frontend'
            },
            {
                name: 'HTML5',
                icon: 'devicon-html5-plain colored',
                category: 'frontend'
            },
            {
                name: 'CSS3',
                icon: 'devicon-css3-plain colored',
                category: 'frontend'
            },
            {
                name: 'Bootstrap',
                icon: 'devicon-bootstrap-plain colored',
                category: 'frontend'
            },
            {
                name: 'MySQL',
                icon: 'devicon-mysql-original colored',
                category: 'backend'
            }
        ]
    },
    {
        id: '3',
        name: 'Madness Escape Game – Pau',
        logo: 'madness.png',

        title: $localize`:@@exp_3_title:Développeur Web (Stage)`,

        period: $localize`:@@exp_3_period:05/2022 – 06/2022`,

        resume: $localize`:@@exp_3_resume:Conception et développement d'un mini-jeu web interactif en HTML, CSS, JavaScript, PHP et MySQL.`,

        description: $localize`:@@exp_3_desc:Conception et développement d'un mini-jeu web interactif destiné aux joueurs d'un escape game.`,

        missions: [
            {
                title: $localize`:@@exp_3_game_title:Mini-jeu interactif et classement des équipes`,
                period: '05/2022 – 06/2022',
                technologies: 'HTML5 · CSS3 · JavaScript · PHP · MySQL',
                summary: $localize`:@@exp_3_game_summary:Développement des mécaniques de jeu et d'un classement reposant sur l'enregistrement des scores.`,
                highlights: [
                    $localize`:@@exp_3_game_ui:Conception et intégration de l'interface du jeu en HTML5 et CSS3.`,
                    $localize`:@@exp_3_game_interactions:Développement des interactions et des mécaniques de jeu en JavaScript vanilla.`,
                    $localize`:@@exp_3_game_backend:Implémentation de la logique métier côté serveur en PHP.`,
                    $localize`:@@exp_3_game_data:Conception de la base MySQL pour l'enregistrement des scores et le classement des équipes.`,
                ],
            },
        ],
        skills: [
            {
                name: 'JavaScript',
                icon: 'devicon-javascript-plain colored',
                category: 'frontend'
            },
            {
                name: 'HTML5',
                icon: 'devicon-html5-plain colored',
                category: 'frontend'
            },
            {
                name: 'CSS3',
                icon: 'devicon-css3-plain colored',
                category: 'frontend'
            },
            {
                name: 'PHP',
                icon: 'devicon-php-plain colored',
                category: 'backend'
            },
            {
                name: 'MySQL',
                icon: 'devicon-mysql-original colored',
                category: 'backend'
            }
        ]
    },
    {
        id: '5',
        name: 'Sup de Vinci – Bordeaux',
        logo: 'supdevinci.png',
        title: $localize`:@@exp_5_title:Master – Développeur Full Stack`,
        period: $localize`:@@exp_5_period:08/2024 – Présent`,
        resume: $localize`:@@exp_5_resume:Formation en développement Full Stack avancé.`,
        description: $localize`:@@exp_5_desc:Approfondissement des architectures logicielles
Développement Full Stack avancé avec Java, Spring Boot, Angular et React
Pratiques DevOps : conteneurisation, CI/CD, orchestration et cloud
Pilotage de projets d'envergure et méthodologies agiles avancées`,
        school: true,
        skills: [
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'Spring Boot', icon: 'devicon-spring-original colored', category: 'backend' },
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'ReactJS', icon: 'devicon-react-original colored', category: 'frontend' },
            { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devops' },
            { name: 'Agile / Scrum', icon: 'groups', category: 'tools' },
        ]
    },
    {
        id: '6',
        name: 'CESI – Bordeaux',
        logo: 'cesi.png',
        title: $localize`:@@exp_6_title:Bachelor Concepteur Développeur d’Applications`,
        period: $localize`:@@exp_6_period:09/2023 – 09/2024`,
        resume: $localize`:@@exp_6_resume:Conception, modélisation et déploiement d'applications logicielles et web.`,
        description: $localize`:@@exp_6_desc:Conception et modélisation d'architectures d'applications sécurisées (UML, Merise)
Développement d'applications d'entreprise en Java / Spring Boot et Angular
Gestion et requêtage optimisé de bases de données relationnelles (MySQL)
Mise en place de tests automatisés et intégration continue
Pilotage de projets, gestion du temps, du budget et des choix techniques`,
        school: true,
        skills: [
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'Spring Boot', icon: 'devicon-spring-original colored', category: 'backend' },
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
            { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
            { name: 'JUnit / Mockito', icon: 'check_circle', category: 'backend' },
            { name: 'Agile / Scrum', icon: 'groups', category: 'tools' },
        ]
    },
    {
        id: '7',
        name: 'Lycée Saint-John Perse – Pau',
        logo: 'saint-john-perse.png',
        title: $localize`:@@exp_7_title:BTS SIO (SLAM – Solutions Logicielles et Applications Métiers)`,
        period: $localize`:@@exp_7_period:08/2021 – 06/2023`,
        resume: $localize`:@@exp_7_resume:Fondamentaux du développement logiciel, modélisation de données et web.`,
        description: $localize`:@@exp_7_desc:Programmation orientée objet et algorithmique (Java, PHP, JavaScript)
Modélisation, administration et requêtage de bases de données SQL
Développement d'interfaces web responsives (HTML5, CSS3, JS) et frameworks PHP
Travail en équipe, gestion de versions avec Git et gestion de projets informatiques`,
        school: true,
        skills: [
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'PHP', icon: 'devicon-php-plain colored', category: 'backend' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'frontend' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
            { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
            { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
        ]
    },
    {
        id: '8',
        name: 'Lycée Saint Cricq – Pau',
        logo: 'saint-cricq.png',
        title: $localize`:@@exp_8_title:BAC STI2D (Sciences et Technologies de l’Industrie et du Dév. Durable)`,
        period: $localize`:@@exp_8_period:08/2019 – 06/2021`,
        resume: $localize`:@@exp_8_resume:Formation technologique axée sur les systèmes numériques et l'innovation.`,
        description: $localize`:@@exp_8_desc:Initiation à l'algorithmique, à la logique de programmation et aux microcontrôleurs
Découverte des réseaux informatiques et de la transmission de données
Découverte des langages Python et HTML / CSS / JS
Travail en mode projet, modélisation et démarches d'éco-conception`,
        school: true,
        skills: [
            { name: $localize`:@@skill_algo:Algorithmique`, icon: 'code', category: 'backend' },
            { name: 'Python', icon: 'devicon-python-plain colored', category: 'backend' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'frontend' },
            { name: $localize`:@@skill_sys_num:Systèmes numériques`, icon: 'memory', category: 'tools' },
            { name: $localize`:@@skill_reseaux:Réseaux`, icon: 'lan', category: 'tools' },
        ]
    },
];
