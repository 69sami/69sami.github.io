/* =========================================================
   YOUR CONTENT LIVES HERE.
   To update your site later, you only ever need to edit THIS file.
   Do NOT touch index.html / style.css / script.js unless you want
   to change the design itself.

   HOW TO ADD A NEW PROJECT / ACHIEVEMENT / EXPERIENCE ENTRY:
   - Copy one of the existing { ... } blocks inside the array
   - Paste it as a new item (remember the comma between items)
   - Change the text inside
   - Save the file and refresh the page (or re-upload to GitHub)

   HOW TO DELETE ONE:
   - Just delete that whole { ... } block (and its comma)
   ========================================================= */

const PORTFOLIO_DATA = {

  // ---------- BASIC INFO ----------
  name: "Samiullah",
  role: "Electrical Engineering Student",
  tagline: "Final-year EE student with 4+ power sector internships across wind, solar, thermal, and grid protection — seeking a Graduate Trainee Engineer role in power systems or renewable energy.",

  about: `I'm a final-year Electrical Engineering student at Mehran University of Engineering
  and Technology, Jamshoro, with hands-on experience across the power sector — from a
  52.8 MW wind plant to a 50 MW solar facility, an 880 MW thermal station, and grid
  protection systems at 220/132/11kV. I'm currently working on my thesis, an automatic
  hybrid solar cleaning robot, and looking for graduate research or Graduate Trainee
  Engineer opportunities in grid operations, renewable energy, or protection & control systems.`,

  location: "Jamshoro, Pakistan",
  openTo: "Open to: Graduate Trainee Engineer roles · MS/PhD research · Power sector opportunities",

  // Your photo — put the file in the assets folder and point to it here.
  // Leave as "" to hide the photo entirely.
  photo: "assets/photo.jpg",

  // Headline numbers shown in the stats strip. Add/remove/edit freely.
  stats: [
    { value: "4+", label: "Power Sector Internships" },
    { value: "980+ MW", label: "Generation Capacity Experience" },
    { value: "220kV", label: "Grid Protection Systems" },
    { value: "3.8/4.0", label: "CGPA" }
  ],

  // ---------- LINKS ----------
  email: "samiullahpanhwar2005@gmail.com",
  phone: "+92 341 1268529",
  linkedin: "https://linkedin.com/in/sami69",
  github: "",
  resumeFile: "assets/resume.pdf",

  // ---------- SKILLS ----------
  skills: [
    {
      group: "Power Systems",
      items: ["ETAP (SLDs, load flow & short-circuit studies, 0.4kV–132kV)", "Grid Protection Schemes (220/132/11kV)", "Substation & Transmission Systems"]
    },
    {
      group: "Simulation & Embedded",
      items: ["MATLAB/Simulink (15+ simulations)", "Multisim, Proteus", "Arduino, AVR Studio"]
    },
    {
      group: "Programming",
      items: ["C++", "Python (basics)"]
    },
    {
      group: "Languages",
      items: ["Urdu & Sindhi (Native)", "English (B2 — Upper Intermediate)", "German (A1 — Beginner)"]
    }
  ],

  // ---------- EXPERIENCE ----------
  // Your internships — shown as a timeline
  experience: [
    {
      role: "Intern",
      company: "Master Wind Energy Limited",
      location: "Jhimpir, Pakistan",
      period: "May 2026",
      bullets: [
        "Completed on-site internship at a 52.8 MW wind plant with 33 GE turbines, monitoring performance and diagnosing turbine faults including derating and gearbox issues using GE SCADA systems",
        "Participated in annual maintenance procedures and safety drills, including lock-out tag-out",
        "Visited Sachal Wind Energy Limited (50 MW) to benchmark Goldwind turbine technology against GE systems"
      ]
    },
    {
      role: "Intern",
      company: "National Grid Company",
      location: "Hyderabad, Pakistan",
      period: "Jul 2025 – Aug 2025",
      bullets: [
        "Studied protection schemes across 220/132/11kV systems (relays, breakers, transformers); independently modeled the local grid network in ETAP and ran load flow analyses",
        "Reviewed distribution-side operations across feeders, transformers, and metering/billing systems; toured 132kV/220kV transmission towers and substations to map end-to-end power delivery"
      ]
    },
    {
      role: "Intern",
      company: "Gharo Solar Limited",
      location: "Gharo, Pakistan",
      period: "May 2025 – Jul 2025",
      bullets: [
        "Diagnosed and resolved faults (line-to-line short circuits) and solar tracker malfunctions at a 50 MW solar PV plant, progressing from guided to independent troubleshooting",
        "Performed equipment testing (transformers HV/LV, DRM), CT/PT, and GIS SF6 breaker dew point tests; studied PLCs, protection relays, wave traps, and weather monitoring station instrumentation"
      ]
    },
    {
      role: "Intern",
      company: "Jamshoro Power Company Limited",
      location: "Jamshoro, Pakistan",
      period: "Jan 2024",
      bullets: [
        "Gained foundational exposure to thermal power generation at an 880 MW, 4-unit thermal power station, observing electrical systems of boilers, turbines, and generators"
      ]
    }
  ],

  // ---------- PROJECTS ----------
  projects: [
    {
      designator: "PRJ-01",
      title: "Automatic Hybrid Solar Cleaning Robot",
      period: "In Progress — Thesis",
      description: "Designing an automated hybrid (dry + water) cleaning mechanism for solar panels to reduce water usage, targeted at water-scarce regions.",
      tags: ["Thesis", "Renewable Energy", "Robotics"],
      image: "",
      link: ""
    }
    // More projects coming soon — copy the block above to add another.
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      degree: "Bachelor of Electrical Engineering",
      institute: "Mehran University of Engineering and Technology",
      period: "Dec 2022 — Dec 2026",
      details: "CGPA: 3.8/4.0 · Jamshoro, Pakistan"
    }
  ],

  // ---------- LEADERSHIP ----------
  leadership: [
    {
      role: "Secretary",
      org: "IEEE MTT-S MUET Chapter",
      location: "Jamshoro, Pakistan",
      period: "Jan 2025 – May 2027",
      bullets: [
        "Co-lead a core team of 20 organizing technical & community events for a 50+ member chapter, reaching 50–100 attendees per event; collaborated with IEEE WIE, SIGHT, Comsoc and PES",
        "Organized RF and antenna technology sessions featuring international speakers from Italy",
        "Managed event logistics including speaker coordination, budgeting, and online platform setup over a 2+ year term"
      ]
    },
    {
      role: "Class Representative",
      org: "Department of Electrical Engineering, MUET",
      location: "Jamshoro, Pakistan",
      period: "Jul 2024 – Nov 2024",
      bullets: [
        "Served as elected academic liaison between faculty and a class of 44 Electrical Engineering students for one semester",
        "Coordinated with course instructors to resolve timetable conflicts, exam scheduling, and classroom issues on behalf of the class"
      ]
    }
  ],

  // ---------- ACHIEVEMENTS ----------
  achievements: [
    {
      title: "Prime Minister's Youth Laptop Scheme",
      year: "Apr 2026",
      description: "Government of Pakistan — merit-based technology award for high-achieving students."
    },
    {
      title: "Sindh Education Endowment Fund (SEEF) Scholarship",
      year: "Nov 2024",
      description: "Govt. of Sindh — merit-cum-need-based scholarship, renewed annually."
    },
    {
      title: "Merit List Scholarship — Department Top 10",
      year: "Jun 2024",
      description: "MUET — consistently ranked 2nd in department."
    },
    {
      title: "AI Prompts and Python Basics",
      year: "Certification",
      description: "Coursera."
    }
  ]
};
