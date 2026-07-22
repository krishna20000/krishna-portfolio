export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  driveUrl?: string;
  githubUrl?: string;
  demoUrl: string;
  badge: string;
  isUpcoming?: boolean;
  imageUrl?: string;
  chartType: 'bar' | 'line' | 'pie' | 'donut' | 'waterfall';
}

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  status: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  location?: string;
  bullets: string[];
  skillsGained?: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Krishna Mehta",
    title: "Data Analyst | Business Intelligence | Power BI | Excel | SQL | Python",
    headline: "Transforming Data Into Business Decisions.",
    subtitle:
      "Aspiring Data Analyst with a background in Manual Quality Assurance and a strong interest in transforming raw data into meaningful business insights.",
    email: "mehtakrishna1710@gmail.com",
    location: "India (Open to Remote & On-Site Roles in India)",
    linkedin: "https://linkedin.com/in/krishna-mehta-analytics",
    github: "https://github.com/krishna20000",
    availability: "Actively Seeking Entry-Level Data Analytics Opportunities in India / Remote",
    photoUrl: "/krishna-mehta.jpg",

    aboutParagraphs: [
      "I'm an aspiring Data Analyst with a background in Manual Quality Assurance and a strong interest in transforming raw data into meaningful business insights. I enjoy solving problems through data analysis, building interactive dashboards, and helping organizations make informed, data-driven decisions.",
      "My journey into analytics began with testing software, where I developed a strong eye for detail, accuracy, and process improvement. While working as a Manual QA Tester, I realized I was most interested in understanding patterns, measuring performance, and using data to improve products and workflows. This led me to transition into Data Analytics.",
      "I continuously improve my analytical skills by building projects, learning modern analytics tools, and applying best practices in business intelligence and visualization."
    ],

    careerObjective:
      "My goal is to build a successful career in Data Analytics by solving real business problems through data. I am actively seeking opportunities where I can apply analytical thinking, continue learning modern BI technologies, and contribute to business growth with meaningful insights."
  },

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Jain University (Online)",
      timeline: "2025 — 2027",
      status: "Currently Pursuing",
      badge: "Post-Graduate"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Parul University",
      timeline: "2022 — 2025",
      status: "Graduated",
      badge: "Graduate"
    }
  ] as EducationItem[],

  coreStrengths: [
    "Analytical Thinking",
    "Detail-Oriented",
    "Problem Solving",
    "Fast Learner",
    "Process Improvement",
    "Data Visualization",
    "Communication",
    "Team Collaboration",
    "Continuous Learning",
    "Adaptability"
  ],

  currentlyLearning: [
    "Advanced Excel",
    "Power BI",
    "SQL",
    "Python for Data Analytics",
    "Business Intelligence",
    "Dashboard Design",
    "Data Visualization Best Practices"
  ],

  interests: [
    "Data Analytics",
    "Business Intelligence",
    "Dashboard Development",
    "Process Optimization",
    "Technology",
    "Continuous Learning"
  ],

  skillsCategorized: [
    {
      title: "Data Analytics",
      iconName: "Database",
      skills: [
        { name: "Microsoft Excel", badge: "Core" },
        { name: "Power BI", badge: "Core" },
        { name: "SQL", badge: "Core" },
        { name: "Python", badge: "Learning" }
      ]
    },
    {
      title: "Data Visualization",
      iconName: "BarChart3",
      skills: [
        { name: "Interactive Dashboards", badge: "Advanced" },
        { name: "KPI Reporting", badge: "Advanced" },
        { name: "Business Intelligence", badge: "Core" },
        { name: "Data Storytelling", badge: "Core" },
        { name: "Charts & Visual Analytics", badge: "Advanced" }
      ]
    },
    {
      title: "Spreadsheet & Analytics",
      iconName: "FileSpreadsheet",
      skills: [
        { name: "Pivot Tables & Pivot Charts", badge: "Proficient" },
        { name: "XLOOKUP & VLOOKUP", badge: "Proficient" },
        { name: "INDEX & MATCH", badge: "Proficient" },
        { name: "Conditional Formatting", badge: "Proficient" },
        { name: "Data Validation & Cleaning", badge: "Proficient" },
        { name: "Basic Power Query", badge: "Proficient" }
      ]
    },
    {
      title: "Testing & Quality Assurance",
      iconName: "CheckSquare",
      skills: [
        { name: "Manual Testing", badge: "QA Experience" },
        { name: "Functional Testing", badge: "QA Experience" },
        { name: "Regression Testing", badge: "QA Experience" },
        { name: "User Acceptance Testing (UAT)", badge: "QA Experience" },
        { name: "Bug Reporting", badge: "QA Experience" },
        { name: "Test Case Design", badge: "QA Experience" }
      ]
    },
    {
      title: "Development Tools",
      iconName: "Terminal",
      skills: [
        { name: "Git & GitHub", badge: "Tools" },
        { name: "Visual Studio Code", badge: "Tools" },
        { name: "Google Workspace", badge: "Tools" }
      ]
    }
  ],

  projects: [
    {
      id: "sales-performance",
      title: "Sales Performance Dashboard",
      category: "Power BI Analytics",
      shortDescription: "Designed an interactive Power BI dashboard to analyze supermarket sales performance using KPIs, charts, and business insights.",
      fullDescription: "Built an end-to-end Supermarket Sales Dashboard in Power BI analyzing total income (₹31.43K), total quantity (11K), and average rating (6.99). Ingests transactional data across cities (Delhi, Hyderabad, Mumbai), payment channels (Cash, E-wallet, Credit card), and product lines to uncover revenue distribution and rating variances.",
      highlights: [
        "KPI Cards: ₹31.43K Income, 11K Total Quantity, 6.99 Avg Rating",
        "City Gross Income Breakdown (Delhi ₹15.5K, Hyderabad ₹9.5K, Mumbai ₹6.1K)",
        "Payment Method Distribution (Cash ₹9.5K, E-wallet ₹5.8K, Credit card ₹3.3K)",
        "Product Line Income & Unit Price Benchmarking Matrix",
        "Average Rating Trends across Product Categories",
        "Interactive Visual Filters & Slicers"
      ],
      technologies: ["Power BI", "DAX", "Excel", "Data Visualization"],
      driveUrl: "https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link",
      demoUrl: "#sales-demo",
      badge: "Featured Live Project",
      isUpcoming: false,
      imageUrl: "/sales-dashboard-real.png",
      chartType: "bar"
    },
    {
      id: "hr-analytics",
      title: "HR Analytics Dashboard",
      category: "Power BI (Upcoming)",
      shortDescription: "Analyzing workforce metrics such as employee distribution, attrition, department performance, and hiring trends through Power BI.",
      fullDescription: "Currently developing a workforce intelligence dashboard to track employee demographics, department distribution, attrition factors, and recruitment pipeline efficiency.",
      highlights: [
        "Workforce Headcount Distribution",
        "Employee Attrition Analysis",
        "Departmental Performance Benchmarks",
        "Hiring & Recruitment Metrics"
      ],
      technologies: ["Power BI", "Excel", "Data Analytics"],
      driveUrl: "https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link",
      demoUrl: "#hr-demo",
      badge: "Upcoming Project",
      isUpcoming: true,
      chartType: "pie"
    },
    {
      id: "financial-analytics",
      title: "Financial Analytics Dashboard",
      category: "BI & Excel (Upcoming)",
      shortDescription: "Building a financial reporting dashboard with revenue analysis, profit trends, expense monitoring, and KPI tracking.",
      fullDescription: "Designing a comprehensive financial reporting framework capturing revenue trajectories, operating expenses, profit margins, and budget vs actual performance.",
      highlights: [
        "Revenue Trajectory & Profit Trends",
        "Expense Category Breakdown",
        "EBITDA & Financial Health KPIs",
        "Variance & Budget Analysis"
      ],
      technologies: ["Excel", "Power BI", "Financial Modeling"],
      driveUrl: "https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link",
      demoUrl: "#financial-demo",
      badge: "Upcoming Project",
      isUpcoming: true,
      chartType: "waterfall"
    },
    {
      id: "customer-insights",
      title: "Customer Insights Dashboard",
      category: "SQL & Analytics (Upcoming)",
      shortDescription: "Creating customer segmentation and purchasing behavior analysis to support better business decisions.",
      fullDescription: "Analyzing buyer purchase frequency, order volume, and customer lifetime value segments to empower strategic marketing and retention strategies.",
      highlights: [
        "Customer Lifetime Value (CLV)",
        "Purchase Frequency & Volume",
        "Customer Behavioral Segmentation",
        "Repeat Purchase Rates"
      ],
      technologies: ["SQL", "Power BI", "Excel"],
      driveUrl: "https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link",
      demoUrl: "#customer-demo",
      badge: "Upcoming Project",
      isUpcoming: true,
      chartType: "donut"
    },
    {
      id: "supply-chain",
      title: "Supply Chain Dashboard",
      category: "Logistics Analytics (Upcoming)",
      shortDescription: "Monitoring inventory, logistics, supplier performance, and operational KPIs through interactive reporting.",
      fullDescription: "Creating a logistics operations dashboard monitoring stock turnover, safety inventory thresholds, vendor delivery lead times, and fulfillment efficiency.",
      highlights: [
        "Inventory Turnover Rates",
        "Supplier SLA & Lead Time Variance",
        "Stockout Risk Alerts",
        "Operational Fulfillment Metrics"
      ],
      technologies: ["Power BI", "SQL", "Excel"],
      driveUrl: "https://drive.google.com/file/d/1EqXXajoAYUZP06tHW3AM_QxMrEjxL4mn/view?usp=drive_link",
      demoUrl: "#supply-demo",
      badge: "Upcoming Project",
      isUpcoming: true,
      chartType: "line"
    }
  ] as Project[],

  experienceList: [
    {
      id: "whatbytes-qa",
      company: "WhatBytes",
      role: "Manual QA Tester",
      period: "September 2025 — March 2026",
      duration: "7 months",
      location: "Remote",
      bullets: [
        "Analyzed application behavior to identify functional defects and improve software quality.",
        "Worked extensively with structured datasets, test reports, and defect tracking to identify recurring issues.",
        "Collaborated with developers to investigate root causes using analytical thinking and detailed reporting.",
        "Created structured documentation and reports that improved issue tracking and team communication."
      ],
      skillsGained: ["Analytical Thinking", "Data Investigation", "Root Cause Analysis", "Defect Documentation"]
    },
    {
      id: "whatbytes-fe",
      company: "WhatBytes",
      role: "Frontend Developer",
      period: "September 2025 — November 2025",
      duration: "3 months",
      location: "Remote",
      bullets: [
        "Built and maintained responsive UI components across a live product, contributing to a consistent user experience across screen sizes and browsers.",
        "Applied QA thinking to frontend code by writing self-tested components and validating output against design specs before handing off to the QA pipeline.",
        "Collaborated in an Agile team environment, participating in sprint planning and daily stand-ups to align on delivery timelines and quality checkpoints."
      ],
      skillsGained: ["UI Components", "Self-Testing Code", "Agile & Sprint Workflows", "Design Specification Audit"]
    },
    {
      id: "devfrend",
      company: "Devfrend Web Solutions",
      role: "Junior Frontend Developer",
      period: "May 2025 — June 2025",
      duration: "2 months",
      location: "India",
      bullets: [
        "Developed client-facing web pages from wireframes, translating design requirements into functional, cross-browser-compatible HTML/CSS/JS code.",
        "Identified and resolved UI inconsistencies during development, reducing QA rework in the handoff phase and improving first-submission quality."
      ],
      skillsGained: ["Wireframe Translation", "Cross-Browser Compatibility", "UI Defect Reduction", "Clean Code Standards"]
    },
    {
      id: "acciojob",
      company: "AccioJob",
      role: "Software Developer Trainee",
      period: "October 2024 — May 2025",
      duration: "8 months",
      location: "India",
      bullets: [
        "Completed an intensive 8-month full-stack training program, building projects in JavaScript and core web technologies while developing a structured approach to problem-solving.",
        "Gained hands-on exposure to SDLC, Agile workflows, and collaborative development practices that now underpin my QA and testing mindset."
      ],
      skillsGained: ["Structured Problem-Solving", "SDLC Fundamentals", "JavaScript & Web Tech", "Testing Mindset"]
    }
  ] as ExperienceItem[]
};
