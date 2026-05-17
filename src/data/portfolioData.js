// Portfolio Data - Personnalisez ces informations

export const personalInfo = {
  name: "ETABA ETABA ULRICH BERCI JR",
  title: "Développeur Full Stack",
  tagline: "Je crée des expériences web modernes, performantes et élégantes",
  email: "etababerci@gmail.com",
  phone: "+237658910589",
  location: "Yaoundé, Cameroun",
  github: "https://github.com/Etaba24",
  linkedin: "https://linkedin.com/in/votre-profil",
  cvUrl: "/cv.pdf",
  bio: `Passionné par le développement web depuis plus de 3 ans, je conçois et développe 
    des applications modernes qui combinent performance technique et expérience utilisateur 
    exceptionnelle. J'aime résoudre des problèmes complexes avec des solutions élégantes.`,
  availableForWork: true,
};

export const skills = [
  {
    category: "Frontend",
    // icon: "🎨",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "CSS / SASS", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    // icon: "⚙️",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Laravel / PHP", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "Outils & DevOps",
    // icon: "🛠️",
    items: [
      { name: "Git / GitHub", level: 70 },
      { name: "Docker", level: 50 },
      { name: "Linux", level: 75 },
      // { name: "Figma", level: 60 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Application Finance",
    description:
      "Une application de gestion financière complète avec tableau de bord analytique, suivi des dépenses, et rapports visuels en temps réel.",
    tags: ["Laravel", "React", "MySQL", "Chart.js"],
    github: "https://github.com/",
    live: "https://example.com",
    featured: true,
    color: "from-purple-500 to-cyan-500",
    image: null,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Plateforme e-commerce moderne avec gestion des stocks, paiement en ligne, et panneau d'administration complet.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/",
    live: "https://example.com",
    featured: true,
    color: "from-blue-500 to-purple-500",
    image: null,
  },
  {
    id: 3,
    title: "Social Dashboard",
    description:
      "Tableau de bord d'analyse des réseaux sociaux avec métriques en temps réel et rapports automatisés.",
    tags: ["React", "TypeScript", "D3.js", "API"],
    github: "https://github.com/",
    live: "https://example.com",
    featured: false,
    color: "from-cyan-500 to-green-500",
    image: null,
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Application de gestion de tâches avec collaboration en équipe, deadlines, et notifications en temps réel.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/",
    live: "https://example.com",
    featured: false,
    color: "from-orange-500 to-pink-500",
    image: null,
  },
];

export const experience = [
  {
    id: 1,
    role: "Développeur Full Stack",
    company: "Startup Tech",
    period: "2024 – Présent",
    description:
      "Développement et maintenance d'applications web avec React et Laravel. Mise en place de CI/CD, optimisation des performances et gestion des équipes.",
    tags: ["React", "Laravel", "Docker", "CI/CD"],
    current: true,
  },
  {
    id: 2,
    role: "Développeur Frontend",
    company: "Agence Digitale",
    period: "2023 – 2024",
    description:
      "Création d'interfaces web modernes et responsives pour divers clients. Collaboration avec des designers et intégration d'APIs.",
    tags: ["Vue.js", "CSS", "APIs", "Figma"],
    current: false,
  },
  {
    id: 3,
    role: "Stagiaire Développeur Web",
    company: "PME Locale",
    period: "2022 – 2023",
    description:
      "Développement de fonctionnalités pour le site web de l'entreprise. Apprentissage des bonnes pratiques et du travail en équipe.",
    tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    current: false,
  },
];

export const stats = [
  { label: "Projets réalisés", value: "15+" },
  { label: "Années d'expérience", value: "3+" },
  { label: "Clients satisfaits", value: "12+" },
  { label: "Commits GitHub", value: "50+" },
];
