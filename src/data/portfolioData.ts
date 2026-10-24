import { Project, ShowcaseSite, SkillCategory, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Drashti Patel',
  title: 'Frontend Developer',
  subtitle: 'React & Frontend Specialist',
  degree: 'MSc Information Technology',
  graduationDate: 'July 2026',
  experienceDuration: '6-Month MERN Stack Internship',
  email: 'drashti8042@gmail.com',
  github: 'https://github.com/Dr1507',
  linkedin: 'https://www.linkedin.com/in/drashti-patel-48834724b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  location: 'Ahmedabad / Remote, India',
  availability: 'Available for Full-time Roles & Contracts',
  bio: 'MSc IT graduate with six months of hands-on MERN Stack internship experience. Specialized in architecting scalable backend APIs with Node.js & Express, designing resilient MongoDB data models, and crafting high-performance, pixel-perfect user interfaces with React.js, Redux, and Tailwind CSS.',
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'quiz-management-system',
    title: 'Role-Based Quiz Management System',
    subtitle: 'Enterprise-grade assessment platform with granular access control',
    category: 'Full-Stack MERN',
    role: 'Lead Full Stack Developer',
    description: 'A comprehensive, role-based examination and quiz portal enabling administrators to curate assessments manually or via bulk spreadsheet import, while candidates experience timed attempts, instant grading, and automated notifications.',
    problem: 'Educators and corporate trainers struggled with manual test authoring, paper score tracking, and test integrity issues across different departments.',
    solution: 'Engineered a secure multi-role MERN system featuring Excel/CSV parser integration, strictly enforced attempt timers, atomic MongoDB submission pipelines, and automated email score reports.',
    keyFeatures: [
      'Role-based JWT authentication separating Super Admin, Instructors, and Candidates',
      'Bulk question ingestion via Excel (.xlsx) and CSV parsing with schema validation',
      'Anti-cheat attempt constraints: single-session lockout, countdown timer, and tab-blur detection',
      'Instant automated scoring engine with detailed answer-by-answer performance metrics',
      'Automated email notification service dispatching certificate & score summaries via Nodemailer',
      'Instructor analytics dashboard tracking pass rates, question difficulty indices, and score distributions'
    ],
    technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer'],
    liveDemoUrl: '#demo-quiz',
    githubUrl: 'https://github.com/drashtipatel/quiz-management-system',
    metrics: '99.8% Scoring Accuracy · 10x Faster Ingestion via CSV',
    featured: true,
    accentColor: '#C6FF00'
  },
  {
    id: 'homico-service-booking',
    title: 'HOMICO — Service Booking Platform',
    subtitle: 'On-demand home services marketplace with dual-role dashboards',
    category: 'Full-Stack MERN',
    role: 'Full Stack Engineer',
    description: 'A two-sided home services marketplace connecting homeowners with verified technicians (electricians, plumbers, cleaners, painters). Features live scheduling, transparent cost estimates, and real-time status dispatch.',
    problem: 'Homeowners experience opaque pricing and unreliable scheduling when hiring trade professionals, while service providers lack streamlined order tracking.',
    solution: 'Designed an end-to-end MERN application with dynamic service discovery, slot-based booking calendars, role-tailored dashboards for clients & service providers, and status state machines.',
    keyFeatures: [
      'Catalog discovery by service tier, category, price filtering, and provider ratings',
      'Interactive date-and-timeslot booking engine preventing double-booking overlaps',
      'Dedicated Customer & Provider role-based portals with live status badges (Pending, Accepted, In-Progress, Completed)',
      'Simulated payment checkout integration with invoice receipt generation',
      'Customer review and rating feedback loop with verified booking verification'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Lucide React'],
    liveDemoUrl: '#demo-homico',
    githubUrl: 'https://github.com/drashtipatel/homico-service-booking',
    metrics: 'Dual Role Architecture · Real-time Booking State Machine',
    featured: true,
    accentColor: '#C6FF00'
  },
  {
    id: 'location-qr-generator',
    title: 'Location QR Generator',
    subtitle: 'Dynamic geolocation encoder & map-integrated QR code studio',
    category: 'React.js',
    role: 'Frontend Architect',
    description: 'A modern, client-side utility application that transforms geographic coordinates, addresses, and Google Maps location pins into high-resolution, branded QR codes ready for print and mobile navigation.',
    problem: 'Physical businesses, event organizers, and delivery hubs need a frictionless way for visitors to scan a code and instantly launch turn-by-turn navigation without typing complex URLs.',
    solution: 'Developed a responsive React utility using the HTML5 Canvas API and browser Geolocation to encode geo-URIs and Google Maps deep-links with customizable dot styling and vector SVG/PNG export.',
    keyFeatures: [
      'One-click browser geolocation auto-detection with fallback manual latitude/longitude input',
      'Google Maps & Apple Maps URI scheme integration for instant mobile navigation trigger',
      'Live dynamic QR preview with custom canvas color theming and logo embed support',
      'Multi-format export supporting PNG, SVG, and high-DPI print resolutions',
      'Offline-capable client-side architecture with zero external telemetry or tracking'
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Canvas API', 'Lucide React', 'Vite'],
    liveDemoUrl: '#demo-location-qr',
    githubUrl: 'https://github.com/drashtipatel/location-qr-generator',
    metrics: 'Instant Client-side Encoding · Zero Latency Canvas Engine',
    featured: true,
    accentColor: '#C6FF00'
  }
];

export const LIVE_SHOWCASE_SITES: ShowcaseSite[] = [
  {
    id: 'fablead-technolab',
    name: 'Fablead Developers Technolab',
    client: 'Technology Agency',
    technology: 'React.js',
    category: 'Agency',
    description: 'Corporate web presence and enterprise software engineering portfolio featuring responsive interactive UI, service showcase grids, and client case studies.',
    liveUrl: 'https://fableadtechnolab.com',
    role: 'Frontend Developer',
    deliverables: ['Custom responsive components', 'Smooth motion animations', 'Client lead inquiry forms']
  },
  {
    id: 'fablead-studio',
    name: 'Fablead Studio',
    client: 'Creative & Brand Studio',
    technology: 'React.js',
    category: 'Agency',
    description: 'Minimalist, avant-garde design agency website spotlighting visual identity, UI/UX design case studies, and brand narrative experiences.',
    liveUrl: 'https://fableadstudio.com',
    role: 'Frontend Developer',
    deliverables: ['Dark minimalist aesthetic', 'Project masonry gallery', 'Interactive micro-interactions']
  },
  {
    id: 'shrishti-trip',
    name: 'Shrishti Trip',
    client: 'Travel & Tourism Portal',
    technology: 'WordPress',
    category: 'Travel & Hospitality',
    description: 'Curated travel portal offering domestic and international tour packages, customizable itinerary view, and inquiry booking capture.',
    liveUrl: 'https://shrishtitrip.com',
    role: 'Web Developer',
    deliverables: ['Custom tour package layouts', 'Responsive inquiry system', 'SEO & performance tuning']
  },
  {
    id: 'fablead-ecommerce',
    name: 'Fablead Ecommerce',
    client: 'Multi-Product Online Store',
    technology: 'React.js',
    category: 'E-Commerce',
    description: 'High-performance e-commerce frontend with category filtering, cart management, product variants, and seamless checkout flow.',
    liveUrl: 'https://fableadecommerce.com',
    role: 'Full Stack Contributor',
    deliverables: ['Product catalog grid', 'Stateful shopping cart', 'Responsive checkout interface']
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    client: 'Modern Digital Venture',
    technology: 'React.js',
    category: 'Corporate',
    description: 'Futuristic product landing page with dynamic interactive sections, feature matrices, and dark mode interface styling.',
    liveUrl: 'https://phoenixdigital.io',
    role: 'Frontend Developer',
    deliverables: ['High-contrast UI design', 'Responsive grid architecture', 'Cross-browser optimization']
  },
  {
    id: 'miners-arms',
    name: 'Miners Arms',
    client: 'Hospitality & Dining Pub',
    technology: 'WordPress',
    category: 'Travel & Hospitality',
    description: 'Heritage dining and gastro-pub web presence featuring seasonal menus, table reservation inquiries, and venue gallery.',
    liveUrl: 'https://theminersarms.co.uk',
    role: 'Web Developer',
    deliverables: ['Interactive food & drinks menu', 'Table booking form', 'Mobile-first layout']
  },
  {
    id: 'policy-sarthi',
    name: 'Policy Sarthi',
    client: 'Insurance & Advisory Platform',
    technology: 'React.js',
    category: 'Corporate',
    description: 'FinTech insurance comparison and advisory portal facilitating instant premium calculations and advisor consultation requests.',
    liveUrl: 'https://policysarthi.com',
    role: 'Frontend Developer',
    deliverables: ['Policy comparison tables', 'Instant quote calculator UI', 'Secure lead capture']
  },
  {
    id: 'the-royal-ivy',
    name: 'The Royal Ivy Bar & Grill',
    client: 'Fine Dining & Lounge',
    technology: 'WordPress',
    category: 'Travel & Hospitality',
    description: 'Atmospheric restaurant website highlighting culinary specials, private event bookings, and an interactive cocktail menu.',
    liveUrl: 'https://theroyalivy.com',
    role: 'Web Developer',
    deliverables: ['Luxury typography pairing', 'Event space inquiry flow', 'Location & hours map embed']
  },
  {
    id: 'creative-campus',
    name: 'Creative Campus',
    client: 'EdTech & Learning Hub',
    technology: 'React.js',
    category: 'EdTech',
    description: 'Modern educational portal showcasing specialized technology courses, student curriculum tracks, and enrollment applications.',
    liveUrl: 'https://creativecampus.edu',
    role: 'Frontend Developer',
    deliverables: ['Course syllabus explorer', 'Admission registration flow', 'Student testimonials grid']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Crafting responsive, accessible, and high-performance user interfaces',
    skills: [
      { name: 'React.js', level: 'Advanced', highlight: 'Hooks, Context API, Suspense, Custom Hooks, Functional Components', icon: 'Atom' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Async/Await, Closures, DOM Manipulation, Event Loop, Modules', icon: 'Code' },
      { name: 'Redux / Redux Toolkit', level: 'Proficient', highlight: 'Global State Management, Slices, createAsyncThunk, Store Architecture', icon: 'Layers' },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: 'Utility-First Architecture, Custom Design Systems, Responsive Grids', icon: 'Palette' },
      { name: 'HTML5 & Semantic Web', level: 'Expert', highlight: 'Semantic Layouts, Accessibility (a11y), SEO Best Practices', icon: 'Layout' },
      { name: 'CSS3 & Modern Layouts', level: 'Advanced', highlight: 'Flexbox, CSS Grid, Transitions, Keyframes, Dark Mode', icon: 'Sparkles' }
    ]
  },
  {
    title: 'Backend & API Architecture',
    description: 'Building secure, scalable, and modular server-side applications',
    skills: [
      { name: 'Node.js', level: 'Proficient', highlight: 'Event-driven Runtime, Asynchronous I/O, File System, Server Setup', icon: 'Server' },
      { name: 'Express.js', level: 'Proficient', highlight: 'Middleware Pipelines, Router Modules, Error Handling, CORS', icon: 'Cpu' },
      { name: 'RESTful APIs', level: 'Advanced', highlight: 'CRUD Endpoints, Status Codes, Request Validation, JSON Schema', icon: 'Network' },
      { name: 'JWT & Role Auth', level: 'Proficient', highlight: 'JSON Web Tokens, Password Hashing (bcrypt), RBAC Middleware', icon: 'ShieldCheck' }
    ]
  },
  {
    title: 'Database Management',
    description: 'Designing normalized & denormalized NoSQL database structures',
    skills: [
      { name: 'MongoDB', level: 'Proficient', highlight: 'Document Collections, Indexes, CRUD Operations, Cloud Atlas', icon: 'Database' },
      { name: 'Mongoose ODM', level: 'Proficient', highlight: 'Schema Modeling, Validation Rules, Population, Aggregation Pipelines', icon: 'HardDrive' }
    ]
  },
  {
    title: 'Tools, Workflow & Version Control',
    description: 'Industry-standard developer tooling and collaboration practices',
    skills: [
      { name: 'Git', level: 'Advanced', highlight: 'Branching Strategies, Merge Workflows, Rebasing, Conflict Resolution', icon: 'GitBranch' },
      { name: 'GitHub', level: 'Advanced', highlight: 'Pull Requests, Code Review, Repository Management, CI/CD Actions', icon: 'Github' },
      { name: 'Postman', level: 'Proficient', highlight: 'API Testing, Environment Variables, Collection Runner', icon: 'Send' },
      { name: 'VS Code & Tooling', level: 'Expert', highlight: 'Linters, Prettier, Debugger, Vite Bundler, NPM Scripts', icon: 'Terminal' }
    ]
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'mern-internship',
    title: 'MERN Stack Developer Intern',
    role: 'Full Stack MERN Intern',
    company: 'Fablead Developers Technolab',
    location: 'Ahmedabad, India (On-site / Hybrid)',
    period: 'January 2026 – June 2026',
    duration: '6 Months Full-Time Internship',
    type: 'internship',
    highlights: [
      'Engineered and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      'Constructed RESTful API endpoints with input validation, role-based authorization, and centralized error handling.',
      'Developed pixel-perfect, responsive user interfaces translating Figma designs into clean Tailwind CSS and React code.',
      'Streamlined global client state using Redux Toolkit, reducing unnecessary re-renders across data-heavy dashboards.',
      'Collaborated within an Agile engineering team participating in daily standups, code reviews, and Git branch workflows.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'Git', 'REST APIs']
  },
  {
    id: 'msc-it',
    title: 'Master of Science in Information Technology (MSc IT)',
    role: 'Postgraduate Student',
    company: 'Department of Computer Science & IT',
    location: 'Gujarat, India',
    period: '2024 – July 2026',
    duration: '2 Years Postgraduate Degree',
    type: 'education',
    highlights: [
      'Successfully graduated in July 2026 with a specialized focus on Advanced Web Technologies and Software Engineering.',
      'Core Coursework: Advanced Database Management Systems, Cloud Computing, Full-Stack Architecture, Data Structures & Algorithms, Network Security.',
      'Completed comprehensive capstone project architecting a cloud-deployed MERN application with automated assessment pipelines.'
    ],
    technologies: ['Full-Stack Systems', 'Database Architecture', 'Software Engineering', 'Network Security']
  }
];
