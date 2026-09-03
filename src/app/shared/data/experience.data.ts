import { Experience } from "../interfaces";

export const EXPERIENCES_DATA: Experience[] = [
    {
        id: '1',
        name: 'CGI – Bordeaux',
        logo: 'cgi.png',
        title: $localize`:@@exp_1_title:Développeur Java Full Stack (Alternance)`,
        period: $localize`:@@exp_1_period:09/2023 – 07/2026`,
        resume: $localize`:@@exp_1_resume:Développement Full Stack Java Spring Boot & Angular et refonte d'applications logicielles en équipe Agile`,
        description: $localize`:@@exp_1_desc:Projet éditique & traitement documentaire (Java / Swing) :
Modernisation d'une application desktop de comparaison de documents PDF et détection automatisée d'anomalies de mise en page
Développement du moteur de comparaison en masse, navigation ergonomique des résultats et génération de rapports
Réduction significative des temps de traitement et refonte validée par le client interne
Pratique du TDD sur les nouveaux modules, tests d'intégration (JUnit, AssertJ, Mockito) et revues de code systématiques
Travail en équipe de 3 en méthodologie Scrum (sprints de 2 semaines, démos et ajustements continus des priorités)

Projets web Full Stack pour grands comptes (Spring Boot & Angular) :
Conception et développement de formulaires dynamiques complexes et évolutions applicatives métier
Développement d'APIs REST avec Java / Spring Boot connectées à une base de données MySQL
Intégration front-end sous Angular, composants modulaires, validation réactive et conteneurisation Docker`,
        skills: [
            { name: 'Java', icon: 'devicon-java-plain colored', category: 'backend' },
            { name: 'Spring Boot', icon: 'devicon-spring-original colored', category: 'backend' },
            { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
            { name: 'Swing', icon: 'devicon-java-plain', category: 'backend' },
            { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
            { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'devops' },
            { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
            { name: 'JUnit / Mockito', icon: 'check_circle', category: 'backend' },
            { name: 'TDD', icon: 'verified', category: 'backend' },
            { name: 'Agile / Scrum', icon: 'groups', category: 'tools' },
        ]
    },
    {
        id: '2',
        name: 'ElementRoot – Pau',
        logo: 'elementroot.png',
        title: $localize`:@@exp_2_title:Développeur Web (Stage)`,
        period: $localize`:@@exp_2_period:01/2023 – 02/2023`,
        resume: $localize`:@@exp_2_resume:Développement de fonctionnalités back-end et intégration de formulaires dynamiques sous Symfony et PHP`,
        description: $localize`:@@exp_2_desc:Conception et développement de formulaires clients dynamiques et sécurisés avec le framework Symfony
Validation des entrées utilisateurs et traitement côté serveur en PHP
Modélisation, requêtage et persistance des données sous MySQL via Doctrine ORM
Intégration d'interfaces web responsives et ergonomiques en HTML5 / CSS3
Application des principes d'architecture MVC et initiation aux bonnes pratiques de développement logiciel professionnel`,
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
        title: $localize`:@@exp_3_title:Développeur Web (Stage)`,
        period: $localize`:@@exp_3_period:05/2022 – 06/2022`,
        resume: $localize`:@@exp_3_resume:Développement d'une application web interactive de mini-jeu en JavaScript, PHP et MySQL pour un escape game`,
        description: $localize`:@@exp_3_desc:Conception et programmation complète d'une application web de mini-jeu interactive destinée aux joueurs de l'escape game
Développement des mécaniques de gameplay en temps réel et animations fluides en JavaScript vanilla
Création d'une interface utilisateur immersive et responsive avec HTML5 et CSS3
Développement back-end en PHP pour le traitement des énigmes et la logique métier
Conception de la base de données MySQL pour l'enregistrement et le classement dynamique des scores des équipes`,
        skills: [
            { name: 'PHP', icon: 'devicon-php-plain colored', category: 'backend' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'frontend' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
            { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'backend' },
            { name: 'UX / Gameplay', icon: 'sports_esports', category: 'frontend' },
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
