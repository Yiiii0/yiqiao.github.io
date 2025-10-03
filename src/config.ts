import ramblingData from './data/rambling.json';

export const siteConfig = {
  name: "Yiqiao Zhou",
  title: {
    en: "AI Builder & Product Engineer",
    zh: "AI Builder & Product Engineer"
  },
  description: "Portfolio website of Yiqiao Zhou",
  accentColor: "#1d4ed8",
  social: {
    email: "yiqiaoz@andrew.cmu.edu",
    linkedin: "https://linkedin.com/in/yiqiao-zhou",
    twitter: "",
    github: "https://github.com/Yiiii0",
  },
  aboutMe: {
    en: "Doing the right things rather than just doing things right. Focusing on outcomes over outputs.",
    zh: "做正确的事，而不仅仅是把事做对。关注成果而非产出。"
  },
  keywords: ["LLM", "Agent", "Builder", "AI native"],
  skills: ["Python", "PyTorch", "TensorFlow", "ML/DL", "SQL/Spark", "React", "Django", "AWS", "Docker", "JS", "LLM framework", "Git", "CI/CD", "Nginx", "Airflow", "Elasticsearch", "vectordatabase"],
  rambling: ramblingData,
  experience: [
    {
      company: 'Baidu - <a href="https://github.com/PaddlePaddle/PaddleOCR" target="_blank" rel="noopener noreferrer">PaddleOCR</a>',
      title: {
        en: "AI & Product Engineer Intern (User & Ecosystem Growth for Revenue Generation)",
        zh: "AI & Product Engineer 实习生（用户与生态增长，驱动营收）"
      },
      dateRange: "May 2025 - Aug 2025",
      bullets: {
        en: [
          "Drove user growth (30k+ stars, 708k downloads) for a high-performing OCR product by identifying a key market gap",
          'Led a user-centric strategy shift and launched a new <a href="https://github.com/PaddlePaddle/PaddleOCR/blob/main/docs/version3.x/deployment/mcp_server.en.md" target="_blank" rel="noopener noreferrer">Agent MCP server</a> to expand the user scope',
        ],
        zh: [
          "通过识别关键市场缺口，推动高性能 OCR 产品的用户增长（30k+ stars，708k 下载量）",
          '主导以用户为中心的策略转型，推出全新 <a href="https://github.com/PaddlePaddle/PaddleOCR/blob/main/docs/version3.x/deployment/mcp_server.en.md" target="_blank" rel="noopener noreferrer">Agent MCP server</a> 以扩大用户范围',
        ]
      },
    },
    {
      company: "MicroFun",
      title: {
        en: "AI & Product Engineer Intern (Operational Efficiency & Cost Reduction)",
        zh: "AI & Product Engineer 实习生（运营效率提升与成本削减）"
      },
      dateRange: "Jul 2024 - Sep 2024",
      bullets: {
        en: [
          "Engineered a production-grade, automated AI translation pipeline that cut content localization time by over 70%",
          "Slashed operational costs and accelerated global market entry for mobile games",
        ],
        zh: [
          "构建生产级自动化 AI 翻译流水线，将内容本地化时间缩短超过 70%",
          "大幅降低运营成本，加速手游全球市场进入",
        ]
      },
    },
    {
      company: "Vizzy AI Lab",
      title: {
        en: "AI Application Engineer Intern (Software Development)",
        zh: "AI Application Engineer 实习生（软件开发）"
      },
      dateRange: "Dec 2024 - Jan 2025",
      bullets: {
        en: [
          "Built a real-time intelligence engine with a scalable data architecture using Django, Elasticsearch, and Airflow",
          "Helped e-commerce creators discover and analyze trending content across Most short-video platforms",
        ],
        zh: [
          "使用 Django、Elasticsearch 和 Airflow 构建实时情报引擎和可扩展数据架构",
          "帮助电商创作者发现和分析主流短视频平台的热门内容",
        ]
      },
    },
    {
      company: "Linvest21",
      title: {
        en: "Machine Learning Engineer Intern (LLM Pipeline Optimization)",
        zh: "Machine Learning Engineer 实习生（LLM 流水线优化）"
      },
      dateRange: "May 2024 - Jul 2024",
      bullets: {
        en: [
          "Built a foundational RAG pipeline that optimized LLM runtime by 30%",
          "Engineered a complete CI/CD and high-availability infrastructure on AWS",
        ],
        zh: [
          "构建基础 RAG 流水线，将 LLM 运行时间优化 30%",
          "在 AWS 上构建完整的 CI/CD 和高可用基础设施",
        ]
      },
    },
  ],
  research: [
    {
      company: "Self-Drive Lab | New York University",
      title: {
        en: "Research Assistant, advised by Prof. Feng",
        zh: "Research Assistant，导师：Feng 教授"
      },
      dateRange: "Sep 2024 - May 2025",
      bullets: {
        en: [
          "Enhanced autonomous robot navigation accuracy by integrating VLAD with an ORB-SLAM system",
        ],
        zh: [
          "通过将 VLAD 与 ORB-SLAM 系统集成，提升自主机器人导航精度",
        ]
      },
    },
    {
      company: "AI for Scientific Research Lab | New York University",
      title: {
        en: "Research Assistant, advised by Prof. Samsonau",
        zh: "Research Assistant，导师：Samsonau 教授"
      },
      dateRange: "Jan 2024 - May 2024",
      bullets: {
        en: [
          "Developed a U-Net machine learning workflow that improved feature extraction accuracy from raw experimental data by 25%",
        ],
        zh: [
          "开发 U-Net 机器学习工作流，将原始实验数据的特征提取精度提高 25%",
        ]
      },
    },
    {
      company: "New York University",
      title: {
        en: "TA for CS4613: Intro to Machine Learning",
        zh: "CS4613: Intro to Machine Learning 助教"
      },
      dateRange: "Sep 2024 - May 2025",
      bullets: {
        en: [
          "Mentored and supported 1-students in Machine Learning through project guidance, HW, and office hours.",
        ],
        zh: [
          "通过项目指导、作业辅导和答疑时间，指导和支持学生学习 Machine Learning。",
        ]
      },
    },
    {
      company: "NYU TRIO Program",
      title: {
        en: "Tutor Leader",
        zh: "辅导负责人"
      },
      dateRange: "Jan 2024 - May 2025",
      bullets: {
        en: [
          "Conducted one-on-one tutoring sessions to strengthen students' understanding of core computer science courses.",
        ],
        zh: [
          "开展一对一辅导，加强学生对核心计算机科学课程的理解。",
        ]
      },
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      degree: {
        en: "MS, Artificial Intelligence Engineering",
        zh: "硕士，Artificial Intelligence Engineering"
      },
      dateRange: "Sep 2025 - Dec 2026",
      achievements: {
        en: [
          "Specialized in AI Engineering and Machine Learning Systems",
          "Focus on scalable AI infrastructure and production ML systems",
        ],
        zh: [
          "专注于 AI Engineering 和 Machine Learning Systems",
          "聚焦可扩展 AI 基础设施和生产级 ML 系统",
        ]
      },
    },
    {
      school: "New York University",
      degree: {
        en: "BS, Computer Science, Minor: Math & Electrical Engineering",
        zh: "学士，Computer Science，辅修：Math & Electrical Engineering"
      },
      dateRange: "Sep 2022 - May 2025",
      achievements: {
        en: [
          "GPA: 3.9/4.0",
          "NYU Yearly Dean List 22-23 & 23-24, 24-25",
          "Founder of NYU Quant & Engineering & Math Community",
          "Public Chair of NYU IEEE",
          "E-board of NYUCSSA",
          "HackNYU Hackathon Team",
        ],
        zh: [
          "GPA: 3.9/4.0",
          "NYU 年度院长名单 22-23 & 23-24, 24-25",
          "NYU Quant & Engineering & Math Community 创始人",
          "NYU IEEE Public Chair",
          "NYUCSSA E-board",
          "HackNYU Hackathon Team",
        ]
      },
    },
  ],
};
