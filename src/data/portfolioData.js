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
  bio: "Computer Science student at Michigan State University's Honors College with hands-on experience in backend systems, cloud infrastructure, and AI-powered tools. I love building real solutions — from network security monitors to LLM-powered clinical tools.",
  email: "nanakwame200217@outlook.com",
  github: "https://github.com/blackheart-5",
  linkedin: "https://www.linkedin.com/in/paul-k-tsekpo",
  location: "East Lansing, MI",
  availableForWork: true,
};

// Skills are grouped by category
export const skills = {
  "Languages": ["Python", "C", "C++", "JavaScript", "TypeScript", "WebAssembly"],
  "Frameworks & Data": [
    "React", "Node.js", "FastAPI", "Flask", "REST APIs", "MongoDB",
    "SQLite/SQL", "PostgreSQL", "NumPy", "pandas",
  ],
  "Systems & Infrastructure": [
    "AWS", "Docker", "Linux", "Git", "CI/CD", "System Design",
    "Object-Oriented Design", "Concurrency", "Wireshark", "Agile",
  ],
  "Security & Testing": [
    "Threat Modeling", "Access Control", "Pytest", "GoogleTest", "Performance Optimization",
  ],
};

export const coursework = [
  "Probability & Statistics", "Matrix Algebra", "Multivariable Calculus",
  "Algorithms & Data Structures", "Operating Systems", "Computer Networks",
  "Computer Architecture", "Computer Security", "Software Engineering",
];

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
      "Built a distributed load balancer with consistent hashing and health-check failover, benchmarked at 5,000+ req/sec locally across simulated node failures, using Claude Code to accelerate tradeoff analysis and debugging",
      "Prototyped a real-time location tracking service handling GPS state updates across 100+ concurrent drivers, implementing efficient data streaming to maintain sub-second update latency",
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
    liveDemo: "https://literacy-app-ten.vercel.app",
    image: null,
    video: null,
    featured: false,
  },
  {
    id: 5,
    title: "CryptoTracker",
    description:
      "A real-time cryptocurrency dashboard built with React 18, tracking the top 100 coins by market cap with live prices and 24h changes auto-refreshing every 60s via the CoinGecko API. Features interactive Chart.js price-history charts (7/30/90-day), searchable coins, and a full portfolio module with holdings, weighted-average cost basis, profit/loss, and a doughnut allocation chart — all persisted per user in localStorage.",
    technologies: ["React", "JavaScript", "Chart.js", "CoinGecko API", "localStorage"],
    github: "https://github.com/blackheart-5/crpyto-tracker",
    liveDemo: "https://crpyto-tracker-blackheart-5.vercel.app",
    image: null,
    video: null,
    featured: false,
  },
  {
    id: 6,
    title: "Limit Order Book Simulator",
    description:
      "A C++ matching engine sustaining 8.8M orders/sec at 30ns median latency, exposed to Python via pybind11 for order-flow simulation and market impact measurement. Cut cancellation latency 3.3x by replacing hash-based lookups with index-based order tracking.",
    technologies: ["C++", "Python", "pybind11"],
    github: "https://github.com/blackheart-5/order_sim",
    liveDemo: "https://order-sim.onrender.com/",
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
      "Maintaining a 3.80 GPA while pursuing a B.S. in Computer Science with a Minor in Business within the highly selective Honors College at MSU.",
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
