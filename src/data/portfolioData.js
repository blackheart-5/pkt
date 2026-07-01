// ============================================================
// PORTFOLIO DATA
// ============================================================

export const personalInfo = {
  name: "Paul Kwame Tsekpo",
  title: "Software Developer",
  // Roles cycle in the Hero typing animation — keep at least one
  roles: [
    "Software Developer",
    "Computer Science Student",
    "Problem Solver",
    "Systems Engineer",
  ],
  bio: "Computer Science Engineering student at Michigan State University's Honors College with hands-on experience in backend systems, cloud infrastructure, and AI-powered tools. I love building real solutions — from network security monitors to LLM-powered clinical tools.",
  email: "nanakwame200217@outlook.com",
  github: "https://github.com/blackheart-5",
  linkedin: "https://www.linkedin.com/in/paul-k-tsekpo",
  twitter: "",           // leave empty to hide
  location: "East Lansing, MI",
  availableForWork: true,
};

// Skills are grouped by category
export const skills = {
  "Programming Languages": ["Python", "C++", "JavaScript", "TypeScript", "SQL", "C"],
  "Frameworks & Tools": [
    "React", "Next.js", "Node.js", "Flask", "FastAPI", "Django",
    "AWS S3", "Docker", "TensorFlow", "MongoDB", "SQLAlchemy",
    "Git", "Bash", "D3.js", "Postman", "boto3", "Claude Code", "GitHub Copilot",
  ],
  "Testing & Processes": [
    "Unit Testing", "Pytest", "Google Test", "Debugging",
    "ETL Pipelines", "CI/CD", "SDLC",
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Michigan State University, College of Engineering",
    companyUrl: "https://engineering.msu.edu",
    period: "September 2025 – Present",
    location: "East Lansing, MI",
    description: [
      "Streamlined Docker multi-environment pipelines with PowerShell automation, improving deployment consistency and reducing environment setup time by 40%",
      "Enhanced CI/CD pipeline stability via Git version control and code reviews, resolving deployment bugs across multiple environments",
      "Built an AWS S3 file storage system with access policies, reduced manual backup by 30% under high traffic",
      "Resolved network and authentication failures using Wireshark and system logs, restoring access for 1000+ users",
    ],
    technologies: ["Docker", "PowerShell", "AWS S3", "Git", "CI/CD"],
  },
  {
    id: 2,
    role: "Software Research Engineer Intern",
    company: "Michigan State University, Honors College",
    companyUrl: "https://honorscollege.msu.edu",
    period: "August 2023 – May 2025",
    location: "East Lansing, MI",
    description: [
      "Developed an LLM-powered assessment tool in Python using Google Cloud APIs, increasing response throughput by 35% for Alzheimer's memory assessments",
      "Built a microservice prediction API with Flask and TensorFlow to detect memory decline patterns, improving clinical accuracy by 15%",
      "Designed an ETL pipeline using SQLite and SQLAlchemy to ingest and normalize 10,000+ patient records, improving diagnostic accuracy by 10%",
    ],
    technologies: ["Python", "Google Cloud APIs", "Flask", "TensorFlow", "SQLite", "SQLAlchemy"],
  },
  {
    id: 3,
    role: "Software Engineer Fellow",
    company: "UBER Career Prep",
    companyUrl: "https://www.uber.com",
    period: "January 2025 – December 2025",
    location: "Remote",
    description: [
      "Completed a fellowship applying C++ and SQL to solve data-structure and system-design problems, deepening understanding of algorithmic trade-offs",
      "Collaborated with Uber engineers using AWS S3 and React to model scalable distributed systems, improving system throughput and scalability",
      "Leveraged Claude Code as an AI coding assistant to improve LLM usage in SDLC workflows, accelerating development and system design",
    ],
    technologies: ["C++", "SQL", "AWS S3", "React", "Claude Code"],
  },
  {
    id: 4,
    role: "Undergraduate Teaching Assistant",
    company: "Michigan State University Computer Science Department",
    companyUrl: "https://www.cse.msu.edu",
    period: "March 2024 – Present",
    location: "East Lansing, MI",
    description: [
      "Led a team to integrate diagrams of DSA & Object-oriented programming, increasing class participation by 25%",
      "Implemented Pytest unit tests for coding assessments, validating code consistency across student submissions",
    ],
    technologies: ["Python", "Pytest", "DSA", "OOP"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Network-Trace",
    description:
      "A real-time network security monitoring system built in Python using raw ICMP sockets. Detects RTT anomalies, packet loss, and threat intelligence data across distributed nodes via FastAPI streaming. (~400+ hours)",
    technologies: ["Python", "FastAPI", "ICMP", "D3.js", "ASN/Threat Intelligence"],
    github: "https://github.com/blackheart-5/network_mapping-simulator",
    liveDemo: "https://network-mapping-simulator-frontend.onrender.com/",
    image: null,
    video: null,
    featured: true,
  },
  {
    id: 2,
    title: "OS-Simulator",
    description:
      "A C11 system-level simulator implementing deterministic process scheduling, concurrency control, virtual memory, and IPC. Features an SV39-style page table walker, Round-Robin/Stride schedulers, Banker's deadlock detection across up to 8 threads, and a 512-byte ring-buffer pipe. (~200+ hours)",
    technologies: ["C", "C11", "OS Concepts", "Concurrency", "Virtual Memory"],
    github: "https://github.com/blackheart-5/os-simulator",
    liveDemo: "",
    image: null,
    video: null,
    featured: true,
  },
  {
    id: 3,
    title: "Image Storage & Retrieval REST API",
    description:
      "A production-grade REST API built in Python using Flask and boto3, managing cloud infrastructure for concurrent file retrieval and uploads via AWS S3. (~60 hours)",
    technologies: ["Python", "Flask", "boto3", "AWS S3"],
    github: "https://github.com/blackheart-5/Image-Storage-API-with-AWS-S3",
    liveDemo: "",
    image: null,
    video: null,
    featured: false,
  },
  {
    id: 4,
    title: "Literacy-App",
    description:
      "A full-stack learning platform built with Next.js and MongoDB. Increased active users by 60% in 3 months. Features a spaced repetition algorithm in JavaScript that improved long-term vocabulary retention by 35%. (~100 hours)",
    technologies: ["Next.js", "MongoDB", "JavaScript", "React"],
    github: "https://github.com/blackheart-5/Literacy-App",
    liveDemo: "",
    image: null,
    video: null,
    featured: false,
  },
];

export const openSourceContributions = [
  {
    id: 2,
    project: "dosbox-staging",
    repo: "https://github.com/dosbox-staging/dosbox-staging/pull/4930",
    period: "June 2026 – Present",
    type: "Open-Source Contribution",
    description: [
      "Added log_type and log_path config options to the [dosbox] section, enabling users to route logs to console, file, or both.",
      "Implemented file logging via Loguru's add_file API with Append mode, storing logs in a logs/ subfolder of the platform config directory.",
      "Resolved reviewer feedback on cross-platform path handling by using get_config_dir() for correct file placement on Windows, macOS, and Linux.",
    ],
    technologies: ["C++", "Loguru", "DOSBox", "Open Source"],
  },
  {
    id: 1,
    project: "Microsoft MarkItDown",
    repo: "https://github.com/microsoft/markitdown",
    period: "June 2026 – Present",
    type: "Open-Source Contribution",
    description: [
      "Improved archive-processing security by implementing ZIP validation checks to prevent zip bomb attacks and excessive recursive extraction.",
      "Improved converter maintainability by replacing dynamic configuration passing with a typed context abstraction.",
      "Preserved plugin compatibility while updating converter interfaces to support the new configuration model.",
    ],
    technologies: ["Python", "Security", "API Design", "Open Source"],
  },
];

export const achievements = [
  {
    id: 1,
    title: "5x Dean's Showcase of Stars – Gold Award",
    description:
      "Received the Gold Award five times from the MSU College of Engineering's Dean's Showcase of Stars, recognizing outstanding academic and project performance.",
    date: "2023 – Present",
    icon: "trophy",
  },
  {
    id: 2,
    title: "GPA: 3.80 – Michigan State University Honors College",
    description:
      "Maintaining a 3.80 GPA while pursuing a B.S. in Computer Science Engineering within the highly selective Honors College at MSU.",
    date: "2023 – Present",
    icon: "star",
  },
  {
    id: 3,
    title: "UBER Career Prep Fellowship",
    description:
      "Selected for the competitive UBER Career Prep Fellowship, where I collaborated with Uber engineers on scalable distributed systems and deepened expertise in system design.",
    date: "January 2025 – December 2025",
    icon: "certificate",
  },
  {
    id: 4,
    title: "600+ Hour Independent Project – Network-Trace",
    description:
      "Invested 400+ hours building a production-level real-time network security monitoring system from scratch, spanning Python sockets, FastAPI streaming, and threat intelligence enrichment.",
    date: "September 2025 – April 2026",
    icon: "code",
  },
];
