import ramblingData from './data/rambling.json';

export const siteConfig = {
  name: "Yiqiao Zhou",
  title: "AI Builder & Product Engineer",
  description: "Portfolio website of Yiqiao Zhou",
  accentColor: "#1d4ed8",
  social: {
    email: "yiqiaoz@andrew.cmu.edu",
    linkedin: "https://linkedin.com/in/yiqiao-zhou",
    twitter: "",
    github: "https://github.com/Yiiii0",
  },
  aboutMe:
    "Doing the right things rather than just doing things right. Focusing on outcomes over outputs.",
  keywords: ["LLM", "Agent", "Builder", "AI native"],
  skills: ["Python", "PyTorch", "TensorFlow", "ML/DL", "SQL/Spark", "React", "Django", "AWS", "Docker", "JS", "LLM framework", "Git", "CI/CD", "Nginx", "Airflow", "Elasticsearch", "vectordatabase"],
  rambling: ramblingData,
  experience: [
    {
      company: "Baidu",
      title: "AI & Product Engineer Intern (User & Ecosystem Growth for Revenue Generation)",
      dateRange: "May 2025 - Aug 2025",
      bullets: [
        "Drove user growth (30k+ stars, 708k downloads) for a high-performing OCR product by identifying a key market gap",
        "Led a user-centric strategy shift and launched a new Agent MCP server to expand the user scope",
      ],
    },
    {
      company: "MicroFun",
      title: "AI & Product Engineer Intern (Operational Efficiency & Cost Reduction)",
      dateRange: "Jul 2024 - Sep 2024",
      bullets: [
        "Engineered a production-grade, automated AI translation pipeline that cut content localization time by over 70%",
        "Slashed operational costs and accelerated global market entry for mobile games",
      ],
    },
    {
      company: "Vizzy AI Lab",
      title: "AI Application Engineer Intern (Software Development)",
      dateRange: "Dec 2024 - Jan 2025",
      bullets: [
        "Built a real-time intelligence engine with a scalable data architecture using Django, Elasticsearch, and Airflow",
        "Helped e-commerce creators discover and analyze trending content across Most short-video platforms",
      ],
    },
    {
      company: "Linvest21",
      title: "Machine Learning Engineer Intern (LLM Pipeline Optimization)",
      dateRange: "May 2024 - Jul 2024",
      bullets: [
        "Built a foundational RAG pipeline that optimized LLM runtime by 30%",
        "Engineered a complete CI/CD and high-availability infrastructure on AWS",
      ],
    },
  ],
  research: [
    {
      company: "Self-Drive Lab | New York University",
      title: "Research Assistant, advised by Prof. Feng",
      dateRange: "Sep 2024 - May 2025",
      bullets: [
        "Enhanced autonomous robot navigation accuracy by integrating VLAD with an ORB-SLAM system",
      ],
    },
    {
      company: "AI for Scientific Research Lab | New York University",
      title: "Research Assistant, advised by Prof. Samsonau",
      dateRange: "Jan 2024 - May 2024",
      bullets: [
        "Developed a U-Net machine learning workflow that improved feature extraction accuracy from raw experimental data by 25%",
      ],
    },
    {
      company: "New York University",
      title: "TA for CS4613: Intro to Machine Learning",
      dateRange: "Sep 2024 - May 2025",
      bullets: [
        "Mentored and supported 1-students in Machine Learning through project guidance, HW, and office hours.",
      ],
    },
    {
      company: "NYU TRIO Program",
      title: "Tutor Leader",
      dateRange: "Jan 2024 - May 2025",
      bullets: [
        "Conducted one-on-one tutoring sessions to strengthen students' understanding of core computer science courses.",
      ],
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: "MS, Artificial Intelligence Engineering",
      dateRange: "Sep 2025 - Dec 2026",
      achievements: [
        "Specialized in AI Engineering and Machine Learning Systems",
        "Focus on scalable AI infrastructure and production ML systems",
      ],
    },
    {
      school: "New York University",
      degree: "BS, Computer Science, Minor: Math & Electrical Engineering",
      dateRange: "Sep 2022 - May 2025",
      achievements: [
        "GPA: 3.9/4.0",
        "NYU Yearly Dean List 22-23 & 23-24, 24-25",
        "Founder of NYU Quant & Engineering & Math Community",
        "Public Chair of NYU IEEE",
        "E-board of NYUCSSA",
        "HackNYU Hackathon Team",
      ],
    },
  ],
};
