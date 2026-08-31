import { Experience } from "../interfaces";

export const EXPERIENCES_DATA: Experience[] = [
    {
        id: '1',
        company: 'CGI – Bordeaux',
        logo: 'cgi.png',
        role: 'Développeur Java Full Stack (Alternance)',
        period: '09/2023 – Présent',
        resume: "Développement Full Stack Java Spring Boot & Angular au sein d'une équipe Agile.",
        description: `• Conception et développement d'APIs REST avec Java et Spring Boot.
• Couverture de code et qualité logicielle avec tests unitaires et d'intégration (JUnit, AssertJ, Mockito).
• Développement de composants et interfaces réactives sous Angular.
• Modélisation et gestion de bases de données relationnelles avec MySQL.
• Conteneurisation des environnements et services avec Docker.
• Collaboration active au sein d'une équipe en méthodologie Agile / Scrum.`,
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
        company: 'ElementRoot – Pau',
        logo: 'elementroot.png',
        role: 'Développeur Web (Stage)',
        period: '01/2023 – 02/2023',
        resume: "Création de formulaires clients avec Symfony et initiation au développement web professionnel.",
        description: `• Conception et intégration de formulaires clients dynamiques avec le framework Symfony.
• Initiation aux bonnes pratiques de développement web et architecture MVC en environnement professionnel.
• Manipulation et requêtage de base de données MySQL.`,
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
        company: 'Madness Escape Game – Pau',
        logo: 'madness.png',
        role: 'Développeur Web (Stage)',
        period: '05/2022 – 06/2022',
        resume: "Développement d'un jeu web interactif en HTML, CSS, JavaScript et PHP pour un escape game.",
        description: `• Conception et programmation complète d'un jeu web interactif pour les joueurs d'escape game.
• Développement de l'UX interactive et des fonctionnalités de gameplay en JavaScript / CSS.
• Traitement et gestion des scores / énigmes côté serveur en PHP.`,
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
        company: 'Intermarché – Pau',
        logo: 'inter.png',
        role: 'Caissier polyvalent (CDI temps partiel)',
        period: '08/2022 – 06/2023',
        resume: "Gestion de la relation client, travail d'équipe et rigueur en parallèle des études.",
        description: `• Accueil et gestion de la relation client, encaissement et tenue de caisse.
• Travail en équipe, sens du service et autonomie en poste.
• Rigueur, polyvalence et ponctualité sur un rythme soutenu en parallèle du BTS.`,
        skills: [
            { name: 'Relation client', icon: 'support_agent', category: 'soft-skills' },
            { name: 'Travail en équipe', icon: 'groups', category: 'soft-skills' },
            { name: 'Rigueur & Organisation', icon: 'verified', category: 'soft-skills' },
        ]
    }
];
