export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new opportunities · Barcelona, Spain",
      title: "Technical Support Specialist | IT & Automation",
      subtitle:
        "Bridging the gap between Support and Engineering — through exhaustive technical analysis, deep product understanding, and systematic flow redesign.",
      talk: "Let's Talk",
      linkedin: "LinkedIn",
      project: "Live Project",
    },
    stats: [
      { value: "↓56%", label: "Engineering Escalations", desc: "Zendesk workflow redesign & docs" },
      { value: "↓89%", label: "Manual Report Tickets", desc: "n8n + Telegram automation pipeline" },
      { value: "3", label: "Support Languages", desc: "ES · FR · EN simultaneously" },
      { value: "2+", label: "Years in B2B SaaS", desc: "iGaming & AI-enabled platforms" },
    ],
    experience: {
      label: "Career",
      title: "Professional Experience",
      subtitle: "6+ years across technical support, infrastructure, and operations.",
      impact: "Impact",
      sectors: [
        {
          key: "saas",
          label: "IT Support — B2B SaaS",
          description: "iGaming · AI-enabled HR · Cloud infrastructure",
          color: "indigo",
          jobs: [
            {
              company: "PlaylogiQ",
              role: "IT Support Specialist (L3)",
              period: "Jan 2026 – Present",
              location: "Barcelona · Hybrid",
              achievements: [
                "Own end-to-end L3 technical support across payments, KYC, access management, and transaction-status workflows in a B2B iGaming SaaS environment.",
                "Perform structured RCA through log analysis, JSON inspection, and browser debugging with Chrome DevTools; validate API integrations and webhooks in Postman before escalation.",
                "Troubleshoot IAM/access issues (roles, permissions, account recovery) and manage user accounts in Active Directory.",
                "Designed and rolled out a new Zendesk triage/escalation workflow — custom fields, tags, macros, routing rules — to standardise ticket quality and reduce unnecessary Engineering escalations.",
                "Built an automated workflow using a multi-port GSM/4G LTE gateway and secure VPN to convert bank confirmation SMS into JSON and forward via HTTPS API for real-time transaction processing.",
                "Developed an automated workflow for company email signatures using Google Workspace API and Node.js, generating HTML signatures from CSV user data.",
              ],
              kpis: ["↓56% tickets escalated to Engineering", "↓18% escalations to L3", "Real-time SMS payment processing"],
            },
            {
              company: "PlaylogiQ",
              role: "IT Customer Support Specialist",
              period: "Apr 2025 – Jan 2026",
              location: "Barcelona · Hybrid",
              achievements: [
                "Provided multilingual B2B support (Spanish, French, English) via chat and email — onboarding, account access, KYC, deposits/withdrawals, and transaction issues.",
                "Managed ticketing in Zendesk with structured triage, prioritisation, and clean escalation handoffs to Level 2 and Level 3.",
                "Built an automated Player Report workflow (Report Chatbot) using n8n + Telegram, eliminating repetitive manual report export requests.",
                "Built an automated workflow to review Zendesk tickets using n8n and ChatGPT via OpenAI API — sentiment analysis, quality scoring, and suggested agent replies.",
              ],
              kpis: ["↓89% report-request tickets", "Faster KPI calculation", "Multilingual: ES / FR / EN"],
            },
            {
              company: "LeanTech",
              role: "IT Customer Support Specialist",
              period: "2024 – Apr 2025",
              location: "Remote",
              achievements: [
                "Managed tickets in Zendesk applying structured triage, prioritisation, and clean escalations to L2/L3 through Zendesk and Jira, ensuring full case follow-up.",
                "Audited AI agent conversations to identify quality gaps — intent mismatches, missing context, unclear responses — and proposed improvements.",
                "Identified recurring issues and converted them into documentation, FAQs, and SOPs to reduce repeated user questions.",
                "Collaborated closely with Product and Engineering teams to escalate complex issues, document bugs with solid evidence, and follow through until fixes were implemented.",
              ],
              kpis: [],
            },
          ],
        },
        {
          key: "infra",
          label: "Electrical Infrastructure & Telecom",
          description: "Fiber optics · GSM networks · Electrical systems",
          color: "cyan",
          jobs: [
            {
              company: "Effaiges Energy",
              role: "Telecommunications Technician",
              period: "2022 – 2023",
              location: "Auvergne-Rhône-Alpes, France",
              achievements: [
                "Deployed fiber optic infrastructure in industrial and remote areas.",
                "Performed fusion splicing, OTDR testing, and fiber termination to ensure high-speed connectivity.",
                "Installed GSM network equipment, aligned RF antennas, and configured transmission systems on telecom towers to optimise mobile signal coverage.",
                "Installed access control and video surveillance systems.",
                "Managed structured cabling (Cat6/Cat6A and Cat7), routers, and switches in data centre racks.",
              ],
              kpis: [],
            },
            {
              company: "Generalitat de Catalunya",
              role: "Electrical Technician",
              period: "2018 – 2020",
              location: "L'Hospitalet de Llobregat, Spain",
              achievements: [
                "Installed and maintained electrical systems in residential, commercial, and industrial environments.",
                "Ensured installations complied with REBT regulations and safety standards.",
                "Read electrical blueprints to route conduits and install wiring.",
                "Assembled electrical panels, circuit breakers, and three-phase power distribution systems.",
                "Diagnosed electrical faults using multimeters, insulation testers, and diagnostic tools.",
              ],
              kpis: [],
            },
          ],
        },
        {
          key: "ops",
          label: "Operations & Team Management",
          description: "Retail · Semi-luxury · Supply chain",
          color: "violet",
          jobs: [
            {
              company: "JOTT",
              role: "B2C Sales Advisor — Semi-Luxury",
              period: "2023 – 2024",
              location: "Spain",
              achievements: [
                "Delivered personalised service in a semi-luxury fashion environment, improving customer experience and loyalty.",
                "Assisted in product selection and management of special client requests.",
                "Built lasting client relationships, increasing returning customers and positive reviews.",
                "Supported inventory management and after-sales service.",
              ],
              kpis: [],
            },
            {
              company: "Super U",
              role: "Store Deputy Manager",
              period: "2021 – 2022",
              location: "Auvergne-Rhône-Alpes, France",
              achievements: [
                "Managed a team of 18 people, optimising workflows and inventory management.",
                "Ensured shelves were stocked and organised to improve the customer experience.",
                "Handled customer queries and complaints, improving satisfaction scores.",
                "Coordinated with supply chain to prevent stock shortages.",
                "Supported training, scheduling, and performance evaluation of team members.",
              ],
              kpis: [],
            },
            {
              company: "Super U",
              role: "Commercial Employee",
              period: "2020 – 2021",
              location: "Auvergne-Rhône-Alpes, France",
              achievements: [
                "Maintained shelf standards and inventory management.",
                "Applied FIFO protocols, reducing waste and stock shortages.",
                "Provided customer assistance and supported promotional campaigns.",
              ],
              kpis: [],
            },
          ],
        },
      ],
    },

    education: {
      label: "Training",
      title: "Education & Certifications",
      certifications: "Certifications",
      viewProject: "View live project",
      items: [
        {
          degree: "Bachelor's Degree in Computer Systems Engineering",
          institution: "UOC – Universitat Oberta de Catalunya",
          period: "Starting Sep 2026",
          description: "Upcoming enrolment.",
          highlight: null,
          tags: ["Upcoming"],
        },
        {
          degree: "Backend Development Bootcamp",
          institution: "CIFO – Centres d'Innovació i Formació Ocupacional",
          period: "Jul 2025 – Oct 2025",
          description:
            "Intensive backend programme focused on PHP and Laravel — RESTful API design, MVC architecture, Eloquent ORM, database migrations, and deployment workflows.",
          highlight: null,
          tags: ["PHP", "Laravel", "MongoDB"],
        },
        {
          degree: "Database Optimisation with  SQL",
          institution: "IT Academy de Barcelona Activa",
          period: "2024",
          description: "Query optimisation, indexing strategies, and complex joins on production-scale datasets.",
          highlight: null,
          tags: ["SQL", "Databases"],
        },
        {
          degree: "Frontend Development Bootcamp",
          institution: "IT Academy de Barcelona Activa",
          period: "Sep 2024 – Jun 2025",
          description:
            "Built responsive web applications with React, JavaScript, and TypeScript. Styled with Tailwind CSS and Bootstrap. Deployed projects via Vercel.",
          highlight:
            "Capstone: Real-time SBB Dashboard — live departure/arrival boards, connection routing, and searchable directory across 500+ Swiss transit stations.",
          tags: ["React", "TypeScript", "Tailwind"],
        },
        {
          degree: "Higher Technician — Industrial Automation & Robotics",
          institution: "Instituto Llobregat",
          period: "Sep 2023 – Jun 2025",
          description:
            "Electrical, pneumatic, and hydraulic systems; PLC programming (TIA Portal, Ladder, SCL, Grafcet); industrial robotics and electromechanical systems.",
          highlight: null,
          tags: ["PLCs", "Robotics", "TIA Portal"],
        },
        {
          degree: "Technical Diploma in Electrical & Automated Systems",
          institution: "Instituto Llobregat",
          period: "Sep 2017 – Jun 2019",
          description:
            "REBT regulations, industrial automation, electrotechnics, home automation, solar PV installations, and ICT infrastructure in buildings.",
          highlight: null,
          tags: ["REBT", "Home Automation", "Electricidad","Telecommunications"],
        },
      ],
      certs: [
        { name: "Google IT Support Professional Certificate", issuer: "Google" },
        { name: "AWS Cloud Fundamentals: Core Services & Architecture", issuer: "AWS" },
        { name: "ELEE0109 Low Voltage Electrical Installations  Certification", issuer: "Gornal Activa" }
      ],
    },

    skills: {
      label: "Competencies",
      title: "Stack & Skills",
      subtitle: "Built through hands-on experience in support, development, and industrial automation.",
      languages: "Languages",
      categories: [
        {
          key: "support",
          label: "Support & Incident Management",
          color: "indigo",
          items: [
            "Technical Support", "Incident Management", "Root Cause Analysis",
            "SLA Management", "Escalation Management", "Triage", "ITIL / ITSM",
            "Zendesk", "Jira", "Active Directory", "IAM / Access Control","Google Workspace Admin", "Microsoft 365 Admin",
          ],
        },
        {
          key: "tools",
          label: "Technical Tools",
          color: "cyan",
          items: [
            "Postman", "Chrome DevTools", "SQL", "AWS", "MongoDB",
            "AWS CloudWatch","Microsoft Teams", "Slack","Google Workspace",
          ],
        },
        {
          key: "apis",
          label: "Integration & APIs",
          color: "violet",
          items: [
            "REST API", "Webhook Validation", "JSON / XML Inspection",
            "Log Analysis", "API Debugging", "Postman Collections", "OAuth 2.0", "HTTPS / TLS",
          ],
        },
        {
          key: "automation",
          label: "Automation & AI",
          color: "emerald",
          items: [
            "n8n", "OpenAI API", "AI Agents", "Workflow Automation",
            "AI Conversation Auditing", "SMS-to-API Pipelines", "Chatbot Development",
          ],
        },
        {
          key: "dev",
          label: "Development",
          color: "amber",
          items: [
            "JavaScript", "TypeScript", "Node.js", "React", "PHP", "Laravel",
            "HTML / CSS", "Tailwind CSS", "Bootstrap", "Styled Components",
            "Git / GitHub", "Firebase", "Vercel", "Vite",
          ],
        },
        {
          key: "industrial",
          label: "Industrial & Automation",
          color: "rose",
          items: [
            "TIA Portal", "KOP / Ladder", "SCL", "Grafcet",
            "AutoCAD", "EPLAN", "PLCs", "Industrial Robotics & Automation", "REBT",
            "EcoStruxure Machine Expert", "Unity Pro", "ROBOGUIDE (Fanuc)","Frequency Drives (VFD)", "Automated Work Cells",
          ],
        },
      ],
      languageList: [
        { key: "es", lang: "Spanish", level: "Native" },
        { key: "ca", lang: "Catalan", level: "Native" },
        { key: "fr", lang: "French", level: "C1" },
        { key: "en", lang: "English", level: "B2" },
        { key: "it", lang: "Italian", level: "A2" },
      ],
    },

    chatbot: {
      welcome: "Hi! I'm Juan's virtual assistant. What would you like to know about him?",
      assistant: "Juan's Assistant",
      online: "Online",
      quickLabel: "Quick questions:",
      questions: [
        {
          label: "What's his core technical expertise?",
          answer:
            "Juan specialises in deep technical troubleshooting for B2B SaaS — API/webhook debugging with Postman, log analysis, root cause analysis, and IAM management. At PlaylogiQ his exhaustive technical analysis and systematic Zendesk redesign cut Engineering-escalated tickets by 56%.",
        },
        {
          label: "What's his standout achievement?",
          answer:
            "Redesigning PlaylogiQ's Zendesk escalation workflow — combining deep product knowledge, structured RCA, and documentation — reduced tickets to Engineering by 56%. He also automated Player Reports with n8n + Telegram, eliminating 89% of manual requests.",
        },
        {
          label: "What automation projects has he built?",
          answer:
            "Three key builds: 1) GSM/4G LTE gateway + VPN that converts bank SMS into JSON for real-time payment validation. 2) n8n + Telegram bot eliminating manual player report exports. 3) OpenAI API pipeline scoring Zendesk conversations for quality.",
        },
        {
          label: "What languages does he speak?",
          answer:
            "Juan speaks Spanish and Catalan natively, French at C1, English at B2, and basic Italian (A2). He has managed live B2B support simultaneously in Spanish, French, and English.",
        },
        {
          label: "How to get in touch?",
          answer: "📧 juanaliswork@gmail.com\n📱 +34 666 771 135\n💼 linkedin.com/in/juan-alís-1309aa345",
        },
      ],
    },

    footer: {
      role: "Technical Support Specialist · Barcelona",
      built: "Built with Next.js, Tailwind CSS & Framer Motion",
      email: "Email",
      project: "Project",
    },
  },

  /* ════════════════════════════════════════════════
     ESPAÑOL
  ════════════════════════════════════════════════ */
  es: {
    nav: {
      experience: "Experiencia",
      education: "Estudios",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      badge: "Abierto a nuevas oportunidades · Barcelona, España",
      title: "Especialista en Soporte Técnico | IT & Automatización",
      subtitle:
        "Cerrando la brecha entre Soporte e Ingeniería — mediante análisis técnico exhaustivo, comprensión profunda del producto y rediseño sistemático de flujos.",
      talk: "Hablemos",
      linkedin: "LinkedIn",
      project: "Ver Proyecto",
    },
    stats: [
      { value: "↓56%", label: "Escalaciones a Ingeniería", desc: "Rediseño del flujo Zendesk y documentación" },
      { value: "↓89%", label: "Tickets manuales eliminados", desc: "Automatización n8n + Telegram" },
      { value: "3", label: "Idiomas de soporte", desc: "ES · FR · EN simultáneamente" },
      { value: "2+", label: "Años en B2B SaaS", desc: "iGaming y plataformas con IA" },
    ],
    experience: {
      label: "Trayectoria",
      title: "Experiencia Profesional",
      subtitle: "Más de 6 años en soporte técnico, infraestructura y operaciones.",
      impact: "Impacto",
      sectors: [
        {
          key: "saas",
          label: "Soporte IT — B2B SaaS",
          description: "iGaming · Plataformas HR con IA · Infraestructura cloud",
          color: "indigo",
          jobs: [
            {
              company: "PlaylogiQ",
              role: "Especialista en Soporte IT (L3)",
              period: "Ene 2026 – Presente",
              location: "Barcelona · Híbrido",
              achievements: [
                "Gestión completa del soporte técnico L3 en pagos, KYC, gestión de accesos y flujos de estado de transacciones en un entorno B2B iGaming SaaS.",
                "Ejecuto análisis de causa raíz (RCA) estructurado mediante análisis de logs, inspección JSON y debugging con Chrome DevTools; valido integraciones de API y webhooks con Postman antes de escalar.",
                "Resuelvo problemas de IAM/accesos (roles, permisos, recuperación de cuentas) y administro cuentas de usuario en Active Directory.",
                "Diseñé y desplegué un nuevo flujo de triage/escalación en Zendesk — campos personalizados, etiquetas, macros, reglas de enrutamiento — para estandarizar la calidad de tickets y reducir escalaciones innecesarias a Ingeniería.",
                "Construí un flujo automatizado usando un gateway GSM/4G LTE multipuerto y VPN segura para convertir SMS bancarios en JSON y enviarlos vía HTTPS API para procesamiento de pagos en tiempo real.",
                "Desarrollé un flujo automatizado para firmas de correo corporativas usando Google Workspace API y Node.js, generando firmas HTML desde datos CSV de usuarios.",
              ],
              kpis: ["↓56% tickets escalados a Ingeniería", "↓18% escalaciones a L3", "Pagos en tiempo real desde SMS"],
            },
            {
              company: "PlaylogiQ",
              role: "Especialista en Soporte al Cliente IT",
              period: "Abr 2025 – Ene 2026",
              location: "Barcelona · Híbrido",
              achievements: [
                "Soporte B2B multilingüe (Español, Francés, Inglés) por chat y correo — onboarding, acceso a cuentas, KYC, depósitos/retiros y problemas de transacciones.",
                "Gestioné tickets en Zendesk con triage estructurado, priorización y handoffs limpios a Nivel 2 y Nivel 3.",
                "Construí un flujo automatizado de Player Reports (Report Chatbot) usando n8n + Telegram, eliminando solicitudes manuales repetitivas de exportación de reportes.",
                "Construí un flujo automatizado para revisar tickets de Zendesk usando n8n y ChatGPT vía OpenAI API — análisis de sentimiento, puntuación de calidad y sugerencias de respuestas mejoradas.",
              ],
              kpis: ["↓89% tickets de solicitud de reportes", "Cálculo de KPIs más rápido", "Multilingüe: ES / FR / EN"],
            },
            {
              company: "LeanTech",
              role: "Especialista en Soporte al Cliente IT",
              period: "2024 – Abr 2025",
              location: "Remoto",
              achievements: [
                "Gestioné tickets en Zendesk aplicando triage estructurado, priorización y escalaciones limpias a L2/L3 mediante Zendesk y Jira, asegurando seguimiento completo de cada caso.",
                "Audité conversaciones de agentes de IA para identificar gaps de calidad — desajustes de intención, contexto faltante, respuestas poco claras — y propuse mejoras.",
                "Identifiqué problemas recurrentes y los convertí en documentación, FAQs y SOPs para reducir consultas repetidas.",
                "Colaboré estrechamente con los equipos de Producto e Ingeniería para escalar problemas complejos, documentar bugs con evidencias sólidas y hacer seguimiento hasta la resolución.",
              ],
              kpis: [],
            },
          ],
        },
        {
          key: "infra",
          label: "Infraestructura Eléctrica y Telecom",
          description: "Fibra óptica · Redes GSM · Sistemas eléctricos",
          color: "cyan",
          jobs: [
            {
              company: "Effaiges Energy",
              role: "Técnico en Telecomunicaciones",
              period: "2022 – 2023",
              location: "Auvergne-Rhône-Alpes, Francia",
              achievements: [
                "Desplegué infraestructura de fibra óptica en zonas industriales y remotas.",
                "Realicé fusión de fibra, pruebas OTDR y terminación de fibra para garantizar conectividad de alta velocidad.",
                "Instalé equipos de red GSM, alineé antenas RF y configuré sistemas de transmisión en torres de telecomunicaciones para optimizar la cobertura de señal móvil.",
                "Instalé sistemas de control de acceso y videovigilancia.",
                "Gestioné cableado estructurado (Cat6/Cat6A y Cat7), routers y switches en racks de centros de datos.",
              ],
              kpis: [],
            },
            {
              company: "Generalitat de Catalunya",
              role: "Técnico Electricista",
              period: "2018 – 2020",
              location: "L'Hospitalet de Llobregat, España",
              achievements: [
                "Instalé y mantuve sistemas eléctricos en entornos residenciales, comerciales e industriales.",
                "Aseguré que las instalaciones cumplieran con la normativa REBT y los estándares de seguridad.",
                "Interpreté planos eléctricos para trazar conductos e instalar cableado.",
                "Monté cuadros eléctricos, interruptores automáticos y sistemas de distribución trifásica.",
                "Diagnostiqué averías eléctricas usando multímetros, testers de aislamiento y herramientas de diagnóstico.",
              ],
              kpis: [],
            },
          ],
        },
        {
          key: "ops",
          label: "Operaciones y Gestión de Equipos",
          description: "Retail · Semi-luxury · Cadena de suministro",
          color: "violet",
          jobs: [
            {
              company: "JOTT",
              role: "Asesor de Ventas B2C — Semi-Luxury",
              period: "2023 – 2024",
              location: "España",
              achievements: [
                "Presté servicio personalizado en un entorno de moda semi-luxury, mejorando la experiencia del cliente y la fidelización.",
                "Asistí en la selección de productos y gestión de solicitudes especiales de clientes.",
                "Construí relaciones duraderas con clientes, aumentando los clientes recurrentes y las reseñas positivas.",
                "Apoyé la gestión de inventario y el servicio postventa.",
              ],
              kpis: [],
            },
            {
              company: "Super U",
              role: "Subgerente de Tienda",
              period: "2021 – 2022",
              location: "Auvergne-Rhône-Alpes, Francia",
              achievements: [
                "Gestioné un equipo de 18 personas, optimizando flujos de trabajo y la gestión de inventario.",
                "Aseguré que los lineales estuvieran bien abastecidos y organizados para mejorar la experiencia del cliente.",
                "Atendí consultas y reclamaciones de clientes, mejorando los índices de satisfacción.",
                "Coordiné con la cadena de suministro para prevenir roturas de stock.",
                "Apoyé la formación, planificación y evaluación del desempeño de los miembros del equipo.",
              ],
              kpis: [],
            },
            {
              company: "Super U",
              role: "Empleado Comercial",
              period: "2020 – 2021",
              location: "Auvergne-Rhône-Alpes, Francia",
              achievements: [
                "Mantuve los estándares de las estanterías y la gestión de inventario.",
                "Apliqué protocolos FIFO, reduciendo el desperdicio y las roturas de stock.",
                "Proporcioné asistencia al cliente y apoyé las campañas promocionales.",
              ],
              kpis: [],
            },
          ],
        },
      ],
    },

    education: {
      label: "Formación",
      title: "Estudios y Certificaciones",
      certifications: "Certificaciones",
      viewProject: "Ver proyecto en directo",
      items: [
        {
          degree: "Grado en Ingeniería de Sistemas Informáticos",
          institution: "UOC – Universitat Oberta de Catalunya",
          period: "A partir de Sep 2026",
          description: "Próxima matriculación.",
          highlight: null,
          tags: ["Próximo"],
        },
        {
          degree: "Bootcamp de Desarrollo Backend",
          institution: "CIFO – Centres d'Innovació i Formació Ocupacional",
          period: "Jul 2025 – Oct 2025",
          description:
            "Programa intensivo de backend centrado en PHP y Laravel — diseño de API RESTful, arquitectura MVC, Eloquent ORM, migraciones de base de datos y flujos de despliegue.",
          highlight: null,
          tags: ["PHP", "Laravel", "MongoDB"],
        },
        {
          degree: "Optimización de Bases de Datos con SQL",
          institution: "IT Academy de Barcelona Activa",
          period: "2024",
          description: "Optimización de consultas, estrategias de indexación y joins complejos en conjuntos de datos a escala de producción.",
          highlight: null,
          tags: ["SQL", "Bases de datos"],
        },
        {
          degree: "Bootcamp de Desarrollo Frontend",
          institution: "IT Academy de Barcelona Activa",
          period: "Sep 2024 – Jun 2025",
          description:
            "Construí aplicaciones web responsive con React, JavaScript y TypeScript. Estilos con Tailwind CSS y Bootstrap. Proyectos desplegados en Vercel.",
          highlight:
            "Proyecto final: Real-time SBB Dashboard — tableros de salidas/llegadas en tiempo real, enrutamiento de conexiones y directorio de más de 500 estaciones de tránsito suizo.",
          tags: ["React", "TypeScript", "Tailwind"],
        },
        {
          degree: "Grado superior en Automatización y Robótica Industrial",
          institution: "Instituto Llobregat",
          period: "Sep 2023 – Jun 2025",
          description:
            "Sistemas eléctricos, neumáticos e hidráulicos; programación de PLCs (TIA Portal, Ladder, SCL, Grafcet); robótica industrial y sistemas electromecánicos.",
          highlight: null,
          tags: ["PLCs", "Robótica", "TIA Portal"],
        },
        {
          degree: "Grado Medio en Instalaciones Eléctricas y Sistemas Automatizados",
          institution: "Instituto Llobregat",
          period: "Sep 2017 – Jun 2019",
          description:
            "Normativa REBT, automatización industrial, electrotecnia, domótica, instalaciones fotovoltaicas e infraestructuras TIC en edificios.",
          highlight: null,
          tags: ["REBT", "Domótica", "Electricidad","Telecomunicaciones"],
        },
      ],
      certs: [
        { name: "Google IT Support Professional Certificate", issuer: "Google" },
        { name: "AWS Cloud Fundamentals: Servicios Principales y Arquitectura", issuer: "AWS" },
        { name: "ELEE0109 Montaje y Mantenimiento de Instalaciones Eléctricas de Baja Tensión", issuer: "Gornal Activa" }
      ],
    },

    skills: {
      label: "Competencias",
      title: "Stack y Habilidades",
      subtitle: "Adquiridas a través de experiencia en soporte técnico, desarrollo y automatización industrial.",
      languages: "Idiomas",
      categories: [
        {
          key: "support",
          label: "Soporte y Gestión de Incidencias",
          color: "indigo",
          items: [
            "Soporte Técnico", "Gestión de Incidencias", "Análisis de Causa Raíz",
            "Gestión de SLA", "Gestión de Escalaciones", "Triage", "ITIL / ITSM",
            "Zendesk", "Jira", "Active Directory", "IAM / Control de Acceso", "Google Workspace Admin", "Microsoft 365 Admin",
          ],
        },
        {
          key: "tools",
          label: "Herramientas Técnicas",
          color: "cyan",
          items: [
            "Postman", "Chrome DevTools", "SQL", "AWS", "MongoDB",
            "AWS CloudWatch", "Google Workspace", "Microsoft Teams", "Slack",
          ],
        },
        {
          key: "apis",
          label: "Integración y APIs",
          color: "violet",
          items: [
            "REST API", "Validación de Webhooks", "Inspección JSON / XML",
            "Análisis de Logs", "Depuración de APIs", "Colecciones Postman", "OAuth 2.0", "HTTPS / TLS",
          ],
        },
        {
          key: "automation",
          label: "Automatización e IA",
          color: "emerald",
          items: [
            "n8n", "OpenAI API", "Agentes de IA", "Automatización de Flujos",
            "Auditoría de Conversaciones IA", "Pipelines SMS-a-API", "Desarrollo de Chatbots",
          ],
        },
        {
          key: "dev",
          label: "Desarrollo",
          color: "amber",
          items: [
            "JavaScript", "TypeScript", "Node.js", "React", "PHP", "Laravel",
            "HTML / CSS", "Tailwind CSS", "Bootstrap", "Styled Components",
            "Git / GitHub", "Firebase", "Vercel","Vite",
          ],
        },
        {
          key: "industrial",
          label: "Industrial y Automatización",
          color: "rose",
          items: [
            "TIA Portal", "KOP / Ladder", "SCL", "Grafcet",
            "AutoCAD", "EPLAN", "PLCs", "Robótica y Automatización Industrial ", "REBT", "EcoStruxure Machine Expert",
            "Unity Pro", "ROBOGUIDE (Fanuc)", "Variadores de Frecuencia (VFD)", "Cèlulas Automatizadas",
          ],
        },
      ],
      languageList: [
        { key: "es", lang: "Español", level: "Nativo" },
        { key: "ca", lang: "Catalán", level: "Nativo" },
        { key: "fr", lang: "Francés", level: "C1" },
        { key: "en", lang: "Inglés", level: "B2" },
        { key: "it", lang: "Italiano", level: "A2" },
      ],
    },

    chatbot: {
      welcome: "¡Hola! Soy el asistente virtual de Juan. ¿Qué te gustaría saber sobre él?",
      assistant: "Asistente de Juan",
      online: "En línea",
      quickLabel: "Preguntas rápidas:",
      questions: [
        {
          label: "¿Cuál es su experiencia técnica?",
          answer:
            "Juan se especializa en troubleshooting técnico profundo para plataformas B2B SaaS — depuración de APIs/webhooks con Postman, análisis de logs, análisis de causa raíz (RCA) y gestión IAM. En PlaylogiQ, su análisis exhaustivo y el rediseño sistemático del flujo Zendesk redujeron los tickets escalados a Ingeniería en un 56%.",
        },
        {
          label: "¿Cuál es su mayor logro?",
          answer:
            "El rediseño del flujo de escalación en Zendesk de PlaylogiQ — combinando conocimiento profundo del producto, RCA estructurado y documentación — redujo un 56% los tickets a Ingeniería. También automatizó los Player Reports con n8n + Telegram, eliminando el 89% de las solicitudes manuales.",
        },
        {
          label: "¿Qué proyectos de automatización ha construido?",
          answer:
            "Tres proyectos clave: 1) Gateway GSM/4G LTE + VPN que convierte SMS bancarios en JSON para validación de pagos en tiempo real. 2) Bot n8n + Telegram que eliminó las exportaciones manuales de reportes. 3) Pipeline con OpenAI API que evalúa conversaciones de Zendesk y sugiere mejores respuestas.",
        },
        {
          label: "¿Qué idiomas habla?",
          answer:
            "Juan habla español y catalán de forma nativa, francés nivel C1, inglés B2 e italiano básico (A2). Ha gestionado soporte B2B en vivo simultáneamente en español, francés e inglés.",
        },
        {
          label: "¿Cómo contactarlo?",
          answer: "📧 juanaliswork@gmail.com\n📱 +34 666 771 135\n💼 linkedin.com/in/juan-alís-1309aa345",
        },
      ],
    },

    footer: {
      role: "Especialista en Soporte Técnico · Barcelona",
      built: "Construido con Next.js, Tailwind CSS y Framer Motion",
      email: "Email",
      project: "Proyecto",
    },
  },
} as const;

export type T = typeof translations.en;
