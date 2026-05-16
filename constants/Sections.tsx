export const experience = [
  {
    id: 1,
    company: "BeFiSc Pvt Ltd · Noida",
    role: "Frontend Developer",
    period: "Sep 2025 – Present",
    subline: "Intern → Full-Time",
    current: true,
    points: [
      "Architected responsive web apps using React.js, Next.js, Zustand, and Tailwind CSS",
      "Convert Figma designs into pixel-perfect, production-ready UI components",
      "Developed and published a Google Sheets Add-on on Google Workspace Marketplace with live users",
      "Automated backend workflows via Google Apps Script, reducing manual work significantly",
      "Built and managed WordPress-based websites for design-driven projects",
    ],
    tags: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "Google Apps Script", "WordPress"],
  },
  {
    id: 2,
    company: "Thixpro Technologies · Noida",
    role: "Software Developer",
    period: "Nov 2024 – Sep 2025",
    subline: "11 months",
    current: false,
    points: [
      "Spearheaded full development lifecycle of web applications without senior oversight",
      "Built web-based games with third-party gaming API integrations for interactive gameplay",
      "Developed full-stack apps (React.js + Node.js + SQL) and deployed on AWS EC2",
      "Handled frontend, backend, and database management entirely end-to-end",
    ],
    tags: ["React.js", "Node.js", "SQL", "MongoDB", "AWS EC2", "3rd Party APIs"],
  },
];

export const projects = [
  {
    id: 1,
    num: "01",
    cat: "SaaS · Live Product",
    name: "BounceProof",
    desc: "Full-featured email validation dashboard — validate bulk emails via file upload or manual input with real-time results. Built a polling mechanism for live validation status per email.",
    highlight: "Implemented RBAC with Admin/User roles + published Google Sheets Add-on on Workspace Marketplace",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Google Apps Script", "RBAC", "Polling"],
  },
  {
    id: 2,
    num: "02",
    cat: "SaaS · PDF Tech",
    name: "TamperProof",
    desc: "PDF integrity checker with full frontend pre-validation — file size check, password-protection detection, and conditional password input before backend submission.",
    highlight: "Integrated WebSocket to stream live tamper-detection progress to the UI in real time",
    tags: ["React.js", "Next.js", "Tailwind CSS", "WebSocket", "PDF Processing"],
  },
  {
    id: 3,
    num: "03",
    cat: "Web App · Fintech",
    name: "Loan EMI Calculator",
    desc: "A fully frontend loan website with a custom EMI calculator built from scratch. Features a side-by-side EMI comparison against another loan provider's calculation.",
    highlight: "Custom financial calculation engine — no external library, pure JavaScript math",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 4,
    num: "04",
    cat: "Full-Stack · Gaming",
    name: "Web Gaming Platform",
    desc: "Interactive browser-based gaming platform with games playable directly in the browser. Integrated third-party gaming APIs to activate and serve external game content seamlessly.",
    highlight: "Deployed on AWS EC2 — full stack from React frontend to Node.js backend",
    tags: ["React.js", "Node.js", "JavaScript", "3rd Party APIs", "AWS EC2"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Zustand / Redux", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API Design", "WebSocket", "Google Apps Script"],
  },
  {
    category: "Database & Cloud",
    items: ["MySQL / SQL", "MongoDB", "AWS EC2", "Google Workspace"],
  },
  {
    category: "Concepts & Tools",
    items: ["RBAC", "Polling Mechanisms", "Git / GitHub", "WordPress", "Figma → Code"],
  },
];

export const skillBars = [
  { name: "React.js / Next.js", level: "Advanced", pct: 92 },
  { name: "JavaScript (ES6+)", level: "Advanced", pct: 90 },
  { name: "Tailwind CSS / Styling", level: "Advanced", pct: 88 },
  { name: "Node.js / REST APIs", level: "Proficient", pct: 75 },
  { name: "AWS EC2 / Deployment", level: "Proficient", pct: 68 },
];

export const marqueeItems = [
  "React.js", "Next.js", "Node.js", "Tailwind CSS", "AWS EC2",
  "Zustand", "WebSocket", "Google Apps Script", "MySQL", "MongoDB", "RBAC", "REST APIs",
];

export const aboutCards = [
  { icon: "🚀", title: "Promoted on Merit", desc: "Started as an intern at BeFiSc, promoted to full-time for independently delivering production-ready features." },
  { icon: "🌐", title: "Live on Google Marketplace", desc: "Published a Google Sheets Add-on used by real users — not just a project, but a live product." },
  { icon: "⚡", title: "Full-Stack Capable", desc: "Frontend-specialist with backend depth — React, Node.js, SQL, AWS EC2 deployments end-to-end." },
  { icon: "🔌", title: "Advanced Integrations", desc: "WebSocket for real-time updates, polling mechanisms, Google Apps Script automation, third-party gaming APIs." },
];