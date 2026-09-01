import { Experience } from "../interfaces";

export const EXPERIENCES_DATA: Experience[] = [
    {
        id: '1',
        name: 'CGI – Bordeaux',
        logo: 'cgi.png',
        title: 'Développeur Java Full Stack (Alternance)',
        period: '09/2023 – 07/2026',
        resume: "Développement Full Stack Java Spring Boot & Angular au sein d'une équipe Agile.",
        description: `Conception et développement d'APIs REST avec Java et Spring Boot
Couverture de code et qualité logicielle avec tests unitaires et d'intégration (JUnit, AssertJ, Mockito)
Développement de composants et interfaces réactives sous Angular
Modélisation et gestion de bases de données relationnelles avec MySQL
Conteneurisation des environnements et services avec Docker
Collaboration active au sein d'une équipe en méthodologie Agile / Scrum`,
        skills: [
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'Spring Boot', icon: 'devicon-spring-original colored', category: 'backend' },
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
            { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devops' },
            { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
            { name: 'JUnit / Mockito', icon: 'check_circle', category: 'backend' },
            { name: 'Agile / Scrum', icon: 'groups', category: 'tools' },
        ]
    },
    {
        id: '2',
        name: 'ElementRoot – Pau',
        logo: 'elementroot.png',
        title: 'Développeur Web (Stage)',
        period: '01/2023 – 02/2023',
        resume: "Création de formulaires clients avec Symfony et initiation au développement web professionnel.",
        description: `Conception et intégration de formulaires clients dynamiques avec le framework Symfony
Initiation aux bonnes pratiques de développement web et architecture MVC en environnement professionnel
Manipulation et requêtage de base de données MySQL`,
        skills: [
            { name: 'Symfony', icon: 'devicon-symfony-original', category: 'backend' },
            { name: 'PHP', icon: 'devicon-php-plain colored', category: 'backend' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
            { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
        ]
    },
    {
        id: '3',
        name: 'Madness Escape Game – Pau',
        logo: 'madness.png',
        title: 'Développeur Web (Stage)',
        period: '05/2022 – 06/2022',
        resume: "Développement d'un jeu web interactif en HTML, CSS, JavaScript et PHP pour un escape game.",
        description: `Conception et programmation complète d'un jeu web interactif pour les joueurs d'escape game
Développement de l'UX interactive et des fonctionnalités de gameplay en JavaScript / CSS
Traitement et gestion des scores / énigmes côté serveur en PHP`,
        skills: [
            { name: 'PHP', icon: 'devicon-php-plain colored', category: 'backend' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'frontend' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
            { name: 'UX / Gameplay', icon: 'devices', category: 'frontend' },
        ]
    },
    {
        id: '4',
        name: 'Intermarché – Pau',
        logo: 'inter.png',
        title: 'Caissier polyvalent (CDI temps partiel)',
        period: '08/2022 – 06/2023',
        resume: "Gestion de la relation client, travail d'équipe et rigueur en parallèle des études.",
        description: `Accueil et gestion de la relation client, encaissement et tenue de caisse
Travail en équipe, sens du service et autonomie en poste
Rigueur, polyvalence et ponctualité sur un rythme soutenu en parallèle du BTS`,
        skills: [
            { name: 'Relation client', icon: 'support_agent', category: 'soft-skills' },
            { name: 'Travail en équipe', icon: 'groups', category: 'soft-skills' },
            { name: 'Rigueur & Organisation', icon: 'verified', category: 'soft-skills' },
        ]
    },
    {
        id: '5',
        name: 'Sup de Vinci – Bordeaux',
        logo: 'supdevinci.png',
        title: 'Master – Développeur Full Stack',
        period: '08/2024 – Présent',
        resume: "Formation d'ingénierie logicielle et développement Full Stack avancé.",
        description: `Approfondissement des architectures logicielles et des patrons de conception (Design Patterns)
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
        title: 'Bachelor Concepteur Développeur d’Applications',
        period: '09/2023 – 09/2024',
        resume: "Conception, modélisation et déploiement d'applications logicielles et web.",
        description: `Conception et modélisation d'architectures d'applications sécurisées (UML, Merise)
Développement d'applications d'entreprise en Java / Spring Boot et Angular
Gestion et requêtage optimisé de bases de données relationnelles (MySQL)
Mise en place de tests automatisés et intégration continue`,
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
        title: 'BTS SIO (SLAM – Solutions Logicielles et Applications Métier)',
        period: '08/2021 – 06/2023',
        resume: "Fondamentaux du développement logiciel, modélisation de données et web.",
        description: `Programmation orientée objet et algorithmique (Java, PHP, JavaScript)
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
        title: 'BAC STI2D (Sciences et Technologies de l’Industrie et du Dév. Durable)',
        period: '08/2019 – 06/2021',
        resume: "Formation technologique axée sur les systèmes numériques et l'innovation.",
        description: `Initiation à l'algorithmique, à la logique de programmation et aux microcontrôleurs
Découverte des réseaux informatiques et de la transmission de données
Travail en mode projet, modélisation et démarches d'éco-conception`,
        school: true,
        skills: [
            { name: 'Algorithmique', icon: 'code', category: 'backend' },
            { name: 'Systèmes numériques', icon: 'memory', category: 'tools' },
            { name: 'Réseaux', icon: 'lan', category: 'tools' },
        ]
    },
];
