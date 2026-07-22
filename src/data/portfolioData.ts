export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  businessProblem: string;
  solution: string;
  keyInsights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl: string;
  badge: string;
  chartType: 'bar' | 'line' | 'pie' | 'donut' | 'waterfall';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage
    experience: string;
    iconName: string;
    highlights: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  skills: string[];
  badgeColor: string;
  verifyUrl: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Krishna Mehta",
    title: "Data Analyst | Business Intelligence | Power BI | Excel | SQL | Python",
    headline: "Transforming Data Into Business Decisions.",
    subtitle:
      "I build insightful dashboards, analyze business data, and create data-driven solutions using Excel, SQL, Python, and Power BI.",
    email: "krishnamehta.analytics@gmail.com",
    location: "Mumbai, India (Open to Remote & Global Relocation)",
    linkedin: "https://linkedin.com/in/krishna-mehta-analytics",
    github: "https://github.com/krishna-mehta",
    availability: "Available for Full-time Roles & Analytics Consulting",
    bio: [
      "I am an analytical professional with a strong foundation in Quality Assurance and a deep passion for Data Analytics & Business Intelligence.",
      "My background in Manual QA gave me meticulous attention to data integrity, system edge cases, and user requirements. Today, I combine that rigor with modern analytical tools (SQL, Python, Power BI, Advanced Excel) to transform raw data streams into actionable executive decision frameworks.",
      "Whether optimizing sales funnels, uncovering operational bottlenecks, or building interactive executive dashboards, my goal is simple: deliver clear, reliable, and high-impact data stories."
    ]
  },

  stats: [
    { label: "Interactive Dashboards Built", value: 8, suffix: "+" },
    { label: "Data Records Analyzed", value: 250, suffix: "K+" },
    { label: "QA & Data Accuracy Precision", value: 99, suffix: ".8%" },
    { label: "Automated Data Pipelines", value: 12, suffix: "+" },
  ],

  aboutTimeline: [
    {
      year: "Phase 1: Foundation",
      title: "Manual QA Tester @ Whatbytes Technologies",
      description: "Honed precision in data validation, edge-case testing, bug tracking, and user acceptance testing (UAT). Developed an eye for data consistency and defect patterns."
    },
    {
      year: "Phase 2: Transition",
      title: "Pivoted to Business Data Analytics",
      description: "Expanded core toolkit to SQL, Python (Pandas/NumPy), Power BI, and DAX. Applied software quality methodologies to raw datasets, ensuring clean ETL pipelines."
    },
    {
      year: "Phase 3: Impact",
      title: "Building Business Intelligence Solutions",
      description: "Delivering dynamic KPI dashboards, automated reporting, customer retention analysis, and financial performance visualization for decision makers."
    }
  ],

  skillCategories: [
    {
      title: "Analytics Core",
      description: "Core technical tools for data querying, manipulation, and statistical processing.",
      skills: [
        { name: "SQL", level: 92, experience: "Advanced", iconName: "Database", highlights: ["Complex Joins & Subqueries", "CTE & Window Functions", "Data Aggregation & Grouping", "Database Schema Analysis"] },
        { name: "Python", level: 88, experience: "Proficient", iconName: "Code", highlights: ["Pandas & NumPy Data Cleaning", "Matplotlib & Seaborn Analytics", "Automated Scripting", "EDA & Statistical Modeling"] },
        { name: "Advanced Excel", level: 95, experience: "Expert", iconName: "FileSpreadsheet", highlights: ["XLOOKUP / INDEX-MATCH", "Pivot Tables & Slicers", "Power Query ETL", "Dynamic Financial Models"] },
        { name: "Power BI", level: 90, experience: "Advanced", iconName: "BarChart3", highlights: ["DAX Measure Calculations", "Data Modeling (Star Schema)", "Interactive KPI Reports", "Scheduled Refresh Setup"] }
      ]
    },
    {
      title: "Visualization & BI",
      description: "Designing sleek, executive-ready dashboard experiences and stories.",
      skills: [
        { name: "Power BI Dashboards", level: 92, experience: "Advanced", iconName: "LayoutDashboard", highlights: ["Custom Themes & Layouts", "Drill-through & Tooltips", "Role-Based Security", "Mobile Layout Optimization"] },
        { name: "Interactive Charts", level: 90, experience: "Advanced", iconName: "PieChart", highlights: ["Waterfall & Combo Visuals", "Trend Lines & Forecasting", "Cohort Matrix Tables", "Conditional Formatting"] },
        { name: "KPI Frameworks", level: 94, experience: "Expert", iconName: "Activity", highlights: ["Executive Metric Trees", "MoM / YoY Growth Tracking", "Variance Analysis", "Target vs Actual Tracking"] }
      ]
    },
    {
      title: "Developer Tools",
      description: "Modern version control and development environments for robust workflows.",
      skills: [
        { name: "Git & GitHub", level: 85, experience: "Proficient", iconName: "GitBranch", highlights: ["Version Control", "Repository Documentation", "Branching & Releases", "GitHub Projects"] },
        { name: "VS Code", level: 90, experience: "Advanced", iconName: "Terminal", highlights: ["Python Data Workspaces", "Jupyter Notebook Integration", "SQL Query Extensions", "Custom Snippets"] },
        { name: "Google Workspace", level: 95, experience: "Expert", iconName: "Share2", highlights: ["Google Sheets Apps Script", "Collaborative Analytics", "Looker Studio Drafts", "Data Export Workflows"] }
      ]
    },
    {
      title: "Quality & Testing",
      description: "Rigor carried over from Manual QA experience to guarantee high data reliability.",
      skills: [
        { name: "Manual Testing", level: 92, experience: "Advanced", iconName: "CheckSquare", highlights: ["Functional Testing", "Boundary Value Analysis", "Exploratory Testing", "Data Pipeline Validation"] },
        { name: "Test Cases & Scenarios", level: 90, experience: "Advanced", iconName: "FileCheck", highlights: ["Test Matrix Authoring", "Edge-Case Coverage", "Requirement Traceability", "Acceptance Criteria Validation"] },
        { name: "Bug Reporting & QA", level: 95, experience: "Expert", iconName: "Bug", highlights: ["Detailed Defect Reproduction", "Severity & Priority Mapping", "Jira & Trello Management", "Regression Testing"] },
        { name: "UAT & Data Quality", level: 88, experience: "Proficient", iconName: "ShieldCheck", highlights: ["User Acceptance Testing", "Source vs Target Verification", "Null Value Audits", "Data Integrity Checks"] }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "sales-dashboard",
      title: "Sales Performance & Revenue Analytics Dashboard",
      category: "Sales Analytics",
      shortDescription: "Interactive Power BI executive dashboard analyzing multi-region revenue, sales rep performance, and product category profitability.",
      fullDescription: "Built a comprehensive 360-degree sales intelligence solution that ingests transactional sales data across multiple regions. Features drill-down capabilities by sales channel, month-over-month revenue growth indicators, and automated profit margin calculations.",
      businessProblem: "The regional sales management team lacked real-time visibility into underperforming product categories and sales rep conversion rates, leading to delayed quarterly forecasting.",
      solution: "Engineered a normalized data model in Power BI using SQL and Power Query. Created DAX measures for dynamic MoM growth, moving averages, and target variance indicators.",
      keyInsights: [
        "Identified a 22% untapped profit margin boost by reallocating regional marketing to top 3 performing product tiers.",
        "Uncovered sales cycle bottlenecks reducing overall deal velocity in Q3.",
        "Automated monthly reporting, saving the sales operations team over 15 hours per week."
      ],
      technologies: ["Power BI", "DAX", "SQL", "Excel", "Power Query"],
      metrics: [
        { label: "Revenue Analyzed", value: "$4.2M" },
        { label: "Margin Growth", value: "+18.5%" },
        { label: "Reporting Hours Saved", value: "15 hrs/wk" }
      ],
      githubUrl: "https://github.com/krishna-mehta/sales-analytics-powerbi",
      demoUrl: "#sales-demo",
      badge: "Power BI & DAX",
      chartType: "bar"
    },
    {
      id: "hr-analytics",
      title: "HR Workforce & Employee Attrition Intelligence",
      category: "HR Analytics",
      shortDescription: "Predictive HR dashboard identifying employee attrition risks, department salary bands, and performance metrics.",
      fullDescription: "Developed a human resources analytics platform to evaluate employee retention rates, salary equity across departments, and tenure correlations with voluntary resignation trends.",
      businessProblem: "High attrition rates in tech and support departments were driving up recruitment overhead by 28% year-over-year without clear root-cause visibility.",
      solution: "Applied Python (Pandas/Seaborn) for exploratory data analysis and built an interactive dashboard visualizing flight-risk parameters based on commute time, overtime hours, and promotion cadence.",
      keyInsights: [
        "Discovered that employees with >15 hours monthly overtime without promotion within 2 years showed a 3.4x higher resignation probability.",
        "Recommended targeted retention packages that reduced voluntary attrition by 14%.",
        "Standardized salary band benchmarks across 6 business units."
      ],
      technologies: ["Python", "Pandas", "Power BI", "SQL", "Matplotlib"],
      metrics: [
        { label: "Headcount Covered", value: "1,450+" },
        { label: "Attrition Reduced", value: "14%" },
        { label: "Recruitment Savings", value: "$120K" }
      ],
      githubUrl: "https://github.com/krishna-mehta/hr-workforce-analytics",
      demoUrl: "#hr-demo",
      badge: "Python & BI",
      chartType: "pie"
    },
    {
      id: "financial-dashboard",
      title: "Corporate Financial & P&L Health Dashboard",
      category: "Financial Analytics",
      shortDescription: "Executive financial dashboard tracking EBITDA, OpEx distribution, cash flow variance, and revenue forecasts.",
      fullDescription: "Constructed a high-level executive financial portal providing real-time P&L insights, OPEX vs CAPEX breakdown, and scenario forecasting models for strategic budgeting.",
      businessProblem: "Financial reports were fragmented across disconnected Excel spreadsheets, creating audit delays and static quarterly reviews.",
      solution: "Centralized data pipelines into a structured SQL database, automated ETL scripts in Python, and produced a dynamic financial dashboard with live dynamic scenario parameters.",
      keyInsights: [
        "Uncovered $85K in redundant software license expenditure across operational units.",
        "Improved cash flow forecasting accuracy by 24% using rolling 12-month trend models.",
        "Reduced financial statement closing cycle time from 10 days to 2 days."
      ],
      technologies: ["Advanced Excel", "SQL", "Python", "Financial Modeling", "Power BI"],
      metrics: [
        { label: "OpEx Savings", value: "$85K" },
        { label: "Forecast Accuracy", value: "+24%" },
        { label: "Closing Time", value: "-8 Days" }
      ],
      githubUrl: "https://github.com/krishna-mehta/financial-pl-dashboard",
      demoUrl: "#financial-demo",
      badge: "Excel & SQL",
      chartType: "waterfall"
    },
    {
      id: "customer-insights",
      title: "E-Commerce Customer Retention & LTV Segmentation",
      category: "Customer Analytics",
      shortDescription: "RFM (Recency, Frequency, Monetary) segmentation model analyzing customer lifetime value and churn risk.",
      fullDescription: "Processed over 180,000 transaction records to group e-commerce customers into actionable RFM segments, enabling targeted email marketing campaigns and VIP loyalty rewards.",
      businessProblem: "Generic marketing blasts resulted in low open rates (12%) and diminishing customer repeat purchases.",
      solution: "Executed Python scripts for data cleaning, percentile scoring, and K-Means clustering. Exported segment definitions into Power BI for interactive cohort filtering.",
      keyInsights: [
        "Segmented 15% of users as 'At-Risk VIPs', generating $450K in historical revenue.",
        "Personalized re-engagement campaigns lifted repeat order rate by 19%.",
        "Increased Customer Lifetime Value (CLV) benchmark by $140 per active segment user."
      ],
      technologies: ["Python", "SQL", "Power BI", "Scikit-Learn", "Cohort Analysis"],
      metrics: [
        { label: "Transactions Processed", value: "180K+" },
        { label: "Repeat Order Lift", value: "+19%" },
        { label: "CLV Boost", value: "+$140" }
      ],
      githubUrl: "https://github.com/krishna-mehta/rfm-customer-segmentation",
      demoUrl: "#customer-demo",
      badge: "Python & ML",
      chartType: "donut"
    },
    {
      id: "supply-chain",
      title: "Supply Chain Operations & Inventory Optimization",
      category: "Supply Chain",
      shortDescription: "End-to-end logistics dashboard monitoring supplier lead times, stockout risks, and warehouse fulfillment efficiency.",
      fullDescription: "Built an operational command center dashboard that monitors inventory turnover rates, safety stock thresholds, and logistics vendor SLA compliance.",
      businessProblem: "Frequent warehouse stockouts for high-demand items cost an estimated $200K in unfulfilled sales during peak holiday seasons.",
      solution: "Designed dynamic DAX measures calculating Reorder Point (ROP) and Economic Order Quantity (EOQ). Created real-time alert flags for items falling below safety threshold levels.",
      keyInsights: [
        "Prevented zero-stockout occurrences during peak promotional weeks by automating safety stock alerts.",
        "Negotiated revised vendor SLAs after pinpointing lead time variances across 4 primary logistics partners.",
        "Reduced excess inventory storage holding costs by 16%."
      ],
      technologies: ["Power BI", "SQL", "Advanced Excel", "DAX", "Power Query"],
      metrics: [
        { label: "Holding Cost Savings", value: "16%" },
        { label: "Stockout Reduction", value: "99.2%" },
        { label: "SLA Variance", value: "-3.5 Days" }
      ],
      githubUrl: "https://github.com/krishna-mehta/supply-chain-analytics",
      demoUrl: "#supply-demo",
      badge: "Power BI & Ops",
      chartType: "line"
    }
  ] as Project[],

  experience: [
    {
      id: "whatbytes-qa",
      role: "Manual QA Tester",
      company: "Whatbytes Technologies",
      period: "2022 — Present",
      location: "Mumbai, India",
      type: "Full-Time",
      summary: "Responsible for end-to-end web and software quality assurance, test scenario execution, defect tracking, and data validation across production releases.",
      responsibilities: [
        "Authored comprehensive test plans, test cases, and requirement traceability matrices for complex web applications.",
        "Executed manual functional, regression, exploratory, and user acceptance testing (UAT) across multi-device environments.",
        "Validated database integrity using SQL queries to verify backend data transactions, API payloads, and UI data rendering.",
        "Collaborated directly with software engineers, product managers, and UI designers using Jira to log, triage, and retest software defects.",
        "Maintained high precision standards, achieving a 99.8% bug-free deployment record for critical client releases."
      ],
      keyAchievements: [
        "Spearheaded database verification protocols that caught 40+ high-severity data sync issues before production deployment.",
        "Created standardized test documentation templates now used company-wide.",
        "Recognized for top defect detection accuracy and cross-functional team communication."
      ],
      skillsUsed: ["Manual Testing", "Test Cases", "SQL Validation", "Bug Reporting", "Jira", "UAT", "Data Verification"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "google-da",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera / Google",
      issueDate: "2023",
      credentialId: "GDA-KM-98231",
      skills: ["Data Analysis", "R / Python", "SQL", "Tableau", "Data Cleaning", "Spreadsheets"],
      badgeColor: "#4285F4",
      verifyUrl: "https://coursera.org/verify/professional-cert/google-data-analytics"
    },
    {
      id: "power-bi-cert",
      title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      issueDate: "2023",
      credentialId: "MSFT-PL300-88120",
      skills: ["Power BI", "DAX", "Data Modeling", "Power Query", "Dashboard Design", "Row-Level Security"],
      badgeColor: "#F2C811",
      verifyUrl: "https://learn.microsoft.com/credentials/certifications/power-bi-data-analyst-associate/"
    },
    {
      id: "excel-expert",
      title: "Microsoft Office Specialist: Excel Expert (Advanced Excel)",
      issuer: "Microsoft",
      issueDate: "2022",
      credentialId: "MOS-EXCEL-33019",
      skills: ["Pivot Tables", "XLOOKUP", "Power Pivot", "Financial Modeling", "Macros / VBA", "Data Audit"],
      badgeColor: "#107C41",
      verifyUrl: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS"
    },
    {
      id: "sql-cert",
      title: "SQL for Data Science & Advanced Database Analytics",
      issuer: "DataCamp / Udemy",
      issueDate: "2023",
      credentialId: "SQL-ADV-55412",
      skills: ["Complex Queries", "CTE", "Window Functions", "Index Optimization", "PostgreSQL", "MySQL"],
      badgeColor: "#00E5A8",
      verifyUrl: "https://datacamp.com/certificate/sql-advanced"
    },
    {
      id: "python-da",
      title: "Python for Data Science & Data Analysis Masterclass",
      issuer: "DataCamp",
      issueDate: "2023",
      credentialId: "PY-DA-77123",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Exploratory Data Analysis"],
      badgeColor: "#3776AB",
      verifyUrl: "https://datacamp.com/certificate/python-data-analysis"
    }
  ] as Certification[]
};
