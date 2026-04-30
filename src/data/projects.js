const projects = [
    {
      id:"portfolio-website",
      title: "Portfolio Website",
      categories: ["Development"],
      shortDescription: "Personal portfolio built with React, Bootstrap, and Vite.",
      longDescription:
        "Designed and built a multi-page personal portfolio site using React, React Router, and React Bootstrap. Features include a responsive projects page with filterable categories, a typing animation hero section, scroll-triggered timeline animations, and an AI chatbot powered by the Claude API.",
      techStack: ["React", "Bootstrap", "Vite", "JavaScript"],
      images: ["/p171/images/blank.png"],
      link: "https://cs571-s26.github.io/p171/",
    },
    {
      id:"greenguide",
      title: "GreenGuide",
      categories: ["Development"],
      shortDescription: "AI chatbot that gives environmentally friendly travel tips.",
      longDescription:
        "Awarded a full scholarship as an AI/ML Scholar to develop GreenGuide, an AI-powered chatbot providing eco-friendly travel recommendations. Built in 3 days as part of a team — created wireframes, divided tasks, and pitched the project to software engineers and managers. Deployed on Hugging Face Spaces.",
      techStack: ["Python", "HuggingFace", "HTML", "CSS"],
      images: [
        "/p171/images/green-guide.png"
      ],
      link: "https://huggingface.co/spaces/GreenGuide/GreenGuide_2/tree/main",
    },
    {
      id: "handwriting",
      title: "Handwriting OCR",
      categories: ["Development"],
      shortDescription: "Web app that converts handwritten notes into typed text.",
      longDescription:
        "Built as part of the Stuyvesant Google Mentorship Program, this platform lets users upload photos of handwritten notes and converts them to typed text using a trained Tesseract OCR model. Designed and developed with a team, then presented to 100+ students and Google engineers.",
      techStack: ["Python", "Django", "Tesseract"],
      images: ["/p171/images/handwriting.png"],
      link: "https://github.com/HuiWenWeng/handwriting-converter",
    },
    {
      id: "kwk",
      title: "Kode With Klossy",
      categories: ["Leadership", "Development"],
      shortDescription: "Instructor Assistant teaching Python and AI/ML to 30+ students in New York.",
      longDescription:
        "Taught core Python and AI/ML concepts — including algorithms, datasets, and neural networks — in Google Colab to 30+ students. Mentored teams in building mission-driven chatbots using Python, Hugging Face, and Retrieval-Augmented Generation (RAG), guiding projects from ideation to a public showcase at the Apple Fifth Avenue store. Also led community-building activities, tech culture discussions, and coding practice sessions.",
      techStack: ["Python", "HuggingFace", "Google Colab", "RAG"],
      images: ["/p171/images/kode-with-klossy.png"],
      link: "https://www.kodewithklossy.com/",
    },
    {
      id: "waisi",
      title: "Wisconsin AI Safety Initiative",
      categories: ["Research", "Leadership"],
      shortDescription: "Technical Lead building an AI safety curriculum at UW-Madison.",
      longDescription:
        "Selected as Technical Lead and Safety Scholar of the Wisconsin AI Safety Initiative (WAISI). Designed and taught an 8-week AI safety fundamentals curriculum, and led weekly sessions engaging students in reading and discussing cutting-edge research papers in AI safety.",
      techStack: ["AI Safety", "Curriculum Design", "Research"],
      images: ["/p171/images/wisconsin-ai-safety.png"],
      link: "https://waisi.org/",
    },
  ];

  export default projects;