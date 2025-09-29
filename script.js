// Data
const nameElement = document.getElementById("hero-title");

const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const width = entry.contentRect.width;

    if (width == 0) {
      if (nameElement.textContent === "Full Stack Developer") {
        nameElement.textContent = "Carlos Santos ";
      } else {
        nameElement.textContent = "Full Stack Developer";
      }
    }
  }
});

observer.observe(nameElement);

const projects = [
  {
    id: 1,
    title: "SIGAF - Sistema de Gerenciamento de Ativos Físicos",
    description:
      "Sistema completo para gestão de ativos físicos e patrimônio empresarial. Rastreia bens via QRCode, controla depreciação, manutenções, movimentações e gera termos de responsabilidade.",
    longDescription:
      " Plataforma completa para controle patrimonial com rastreabilidade, depreciação contábil, manutenção, movimentação de bens e auditoria. O <b>SIGAF</b> permite o gerenciamento do ciclo de vida completo de ativos físicos empresariais — desde aquisição, uso e manutenção, até a baixa e histórico contábil. Ideal para empresas que precisam atender a auditorias, controlar perdas e manter conformidade fiscal (CFC, LGPD, ISO, etc.).<br><br><b>🎯 Funcionalidades principais</b><br>-Gestão completa de ativos físicos (TI, frota, imóveis, mobiliário, EPIs etc)<br>-Controle de depreciação contábil com base na Resolução CFC 1.177/09<br>-Inventário físico e check-in/out via smartphone<br>-Manutenção preventiva e corretiva com laudos<br>-Termo de responsabilidade gerado em PDF<br>-Transferência entre setores/filiais com histórico<br>-Logs de auditoria detalhados (quem, o que, quando)<br>-Suporte a multi-empresas (multi-tenancy SaaS)<br><br><b>🧱 Tecnologias</b><br><b>🧠 Backend:</b> Laravel 10+, MySQL/PostgreSQL, Spatie packages<br><b>📱 Frontend:</b> Angular 20 / Ionic 7 (Mobile-first)<br><b>🔒 Segurança:</b> Laravel Sanctum, RBAC, Activity Log, uploads assinados<br><b>🧪 Status:</b> Projeto em desenvolvimento<br>Projeto ainda sendo criado telas e lógica de front-end, sempre pensando na segurança.<br><br>🟢Metodologia:</b> Projeto desenvolvido com o Trello para ajudar com o desenvolvimento",
    image: ["images/login_sigaf.jpg", "images/dashboard_sigaf.jpg"],
    technologies: ["Angular", "Ionic", "Laravel", "MySQL", "TypeScript"],
    demoUrl: "",
    githubUrl: "",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Site De Noticas",
    description:
      "Plataforma de notícias com funcionalidades completas de autenticação e registro de usuários, implementada com alto nível de segurança, abrangendo criptografia de dados, proteção contra CSRF, prevenção de injeções SQL, e mitigação de vulnerabilidades XSS.",
    longDescription:
      "Desenvolvimento de um protótipo de site de notícias, permitindo que os usuários se autentiquem, publiquem, editem e excluam suas publicações. Este projeto, com o objetivo de ser acessível ao público, foi desenvolvido com rigorosas medidas de segurança no código, incluindo proteção contra vulnerabilidades como CSRF, injeção de SQL e XSS.",
    image: "images/teste.png",
    technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/johndoe/taskmanager",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    longDescription:
      "An elegant weather dashboard that provides detailed weather information and forecasts. Features include location-based weather, interactive maps, weather alerts, and historical data visualization. Built with modern React patterns and responsive design.",
    image: "images/teste.png",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/johndoe/weather",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Content management system for bloggers and writers",
    longDescription:
      "A powerful content management system designed for bloggers and content creators. Features include a rich text editor, media management, SEO optimization, comment system, and analytics dashboard. Built with a headless architecture for maximum flexibility.",
    image: "images/teste.jpg",
    technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
    demoUrl: "https://blog.example.com",
    githubUrl: "https://github.com/johndoe/blog-cms",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio site with smooth animations",
    longDescription:
      "A modern portfolio website showcasing projects and skills. Features smooth animations, responsive design, dark mode support, and optimized performance. Built with Next.js and deployed on Vercel for lightning-fast loading times.",
    image: "images/teste.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/johndoe/portfolio",
    category: "Frontend",
  },
  {
    id: 6,
    title: "API Gateway",
    description: "Microservices API gateway with authentication",
    longDescription:
      "A robust API gateway solution for microservices architecture. Includes rate limiting, authentication, request/response transformation, and monitoring. Built with Node.js and Redis for high performance and scalability.",
    image: "images/teste.jpg",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
    demoUrl: "https://api.example.com",
    githubUrl: "https://github.com/johndoe/api-gateway",
    category: "Backend",
  },
];

const technologies = [
  {
    category: "Frontend",
    description: "Tecnologias de desenvolvimento front-end",
    skills: [
      {
        name: "Angular",
        level: "Intermediário",
        icon: '<img src="icones SVG/angular.svg" class="h-6 w-6"/>',
      },
      {
        name: "Ionic",
        level: "Avançado",
        icon: '<img src="icones SVG/ionic.svg" class="h-6 w-6"/>',
      },
      {
        name: "TypeScript",
        level: "Intermediário",
        icon: '<img src="icones SVG/typescript.svg" class="h-6 w-6"/>',
      },
      {
        name: "Tailwind CSS",
        level: "Intermediário",
        icon: '<img src="icones SVG/tailwind.svg" class="h-6 w-6"/>',
      },
      {
        name: "bootstrap",
        level: "Avançado",
        icon: '<img src="icones SVG/bootstrap.svg" class="h-6 w-6"/>',
      },
      {
        name: "Figma",
        level: "Básico",
        icon: '<img src="icones SVG/figma.svg" class="h-6 w-6"/>',
      },
    ],
  },
  {
    category: "Backend",
    description: "Tecnologias de servidor e banco de dados",
    skills: [
      {
        name: "Laravel",
        level: "Intermediário",
        icon: '<img src="icones SVG/laravel.svg" class="h-6 w-6"/>',
      },
      {
        name: "C#",
        level: "Básico",
        icon: '<img src="icones SVG/csharp.svg" class="h-6 w-6"/>',
      },
      {
        name: "MySQL",
        level: "Intermediário",
        icon: '<img src="icones SVG/mysql.svg" class="h-6 w-6"/>',
      },
      {
        name: "Oracle Database",
        level: "Intermediário",
        icon: '<img src="icones SVG/sqlServer.svg" class="h-6 w-6"/>',
      },
      {
        name: "PHP",
        level: "Intermediário",
        icon: '<img src="icones SVG/php.svg" class="h-6 w-6"/>',
      },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Ferramentas e tecnologias de suporte",
    skills: [
      {
        name: "Linux",
        level: "Básico",
        icon: '<img src="icones SVG/linux.svg" class="h-6 w-6"/>',
      },
      {
        name: "AWS",
        level: "Básico",
        icon: '<img src="icones SVG/aws.svg" class="h-6 w-6"/>',
      },
      {
        name: "Git",
        level: "Avançado",
        icon: '<img src="icones SVG/git.svg" class="h-6 w-6"/>',
      },
      {
        name: "Apache Server",
        level: "Básico",
        icon: '<img src="icones SVG/apache.svg" class="h-6 w-6"/>',
      },
    ],
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Evento de IA com AWS",
    excerpt:
      "Aprenda as melhores práticas para estruturar grandes aplicações React com gerenciamento de estado adequado e arquitetura de componentes.",
    date: "2024-01-15",
    tags: ["Cloud", "AWS", "IA"],
    image: "images/teste.jpg",
  },
  {
    id: 2,
    title: "Leitura do Livro Clear Code",
    excerpt:
      "Uma análise aprofundada do livro 'Clean Code' de Robert C. Martin, com foco em princípios de design e melhores práticas de codificação.",
    date: "2024-01-10",
    tags: ["Clean Code", "Design Patterns", "Coding Practices"],
    image: "images/teste.png",
  },
  {
    id: 3,
    title:
      "Cursos para aprimorar suas habilidades em Angular, Laravel e TypeScript",
    excerpt:
      "Descubra técnicas avançadas de TypeScript que o ajudarão a escrever um código mais sustentável e seguro em termos de tipos.",
    date: "2024-01-05",
    tags: ["TypeScript", "Qualidade de Código", "Desenvolvimento"],
    image: "images/teste.jpg",
  },
  {
    id: 4,
    title: "Projeto SIGAF",
    excerpt:
      "Projeto de Gerenciamento de pratrimônio público, controle de estoque, compras e vendas.",
    date: "2023-12-28",
    tags: ["Performance", "Optimization", "Web Development"],
    image: "images/teste.png",
  },
  {
    id: 5,
    title: "Ceminarios de Qualidade ISO 9001, anticorrupção e LGPD",
    excerpt:
      "Explore as últimas novidades sobre a ISO 9001, práticas de anticorrupção e conformidade com a LGPD.",
    date: "2023-12-20",
    tags: ["ISO 9001", "Anticorrupção", "LGPD"],
    image: "images/teste.png",
  },
];

const additionalSkills = [
  "Responsive Design",
  "RESTful APIs",
  "GraphQL",
  "Microservices",
  "Test-Driven Development",
  "Agile Methodology",
  "UI/UX Design",
  "Performance Optimization",
  "SEO",
  "Accessibility",
  "CI/CD",
  "Code Review",
  "Technical Writing",
  "Team Leadership",
  "Responsive Design",
  "RESTful APIs",
  "GraphQL",
  "Microservices",
  "Test-Driven Development",
  "Agile Methodology",
  "UI/UX Design",
  "Performance Optimization",
  "SEO",
  "Accessibility",
  "CI/CD",
  "Code Review",
  "Technical Writing",
  "Team Leadership",
];

// Initialize Lucide icons
lucide.createIcons();

// Theme functionality
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const html = document.documentElement;

  function toggleTheme() {
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light"
    );
    lucide.createIcons();
    window.location.reload();
  }

  themeToggle.addEventListener("click", toggleTheme);
  themeToggleMobile.addEventListener("click", toggleTheme);

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
}

// Smooth scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu if open
    document.getElementById("mobile-nav").classList.add("hidden");
    document.getElementById("menu-icon").classList.remove("hidden");
    document.getElementById("close-icon").classList.add("hidden");
  }
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add(
        "bg-background/80",
        "backdrop-blur-md",
        "border-b",
        "border-border"
      );
    } else {
      header.classList.remove(
        "bg-background/80",
        "backdrop-blur-md",
        "border-b",
        "border-border"
      );
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}

// Generate projects
function generateProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  let currentFilter = "all";

  function renderProjects() {
    const filteredProjects =
      currentFilter === "all"
        ? projects
        : projects.filter((p) => p.category === currentFilter);

    projectsGrid.innerHTML = filteredProjects
      .map(
        (project, index) => `
                    <div class="project-card card-hover bg-card rounded-xl overflow-hidden shadow-lg fade-in" data-category="${
                      project.category
                    }" style="animation-delay: ${index * 100}ms;">
                        <div class="relative overflow-hidden rounded-t-lg group">
                            <img src="${
                              Array.isArray(project.image)
                                ? project.image[0]
                                : project.image
                            }" alt="${
          project.title
        }" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button onclick="openProjectModal(${
                                  project.id
                                })" class="btn-primary px-4 py-2 rounded-md mr-2">
                                    <i data-lucide="eye" class="mr-2 h-4 w-4"></i>
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <h3 class="text-lg font-semibold text-foreground">${
                                  project.title
                                }</h3>
                                <span class="badge badge-secondary">${
                                  project.category
                                }</span>
                            </div>
                            <p class="text-muted-foreground mb-4">${
                              project.description
                            }</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.technologies
                                  .slice(0, 3)
                                  .map(
                                    (tech) =>
                                      `<span class="badge badge-outline text-xs">${tech}</span>`
                                  )
                                  .join("")}
                                ${
                                  project.technologies.length > 3
                                    ? `<span class="badge badge-outline text-xs"> + ${
                                        project.technologies.length - 3
                                      }</span>`
                                    : ""
                                }
                            </div>
                            <div class="flex gap-2">
                                <a 
                ${
                  project.demoUrl === ""
                    ? "onclick='openProjetoIndisponivel()'"
                    : 'href="' + project.demoUrl + '"'
                } 
                target="_blank" rel="noopener noreferrer" class="btn-primary px-6 py-3 rounded-md">
                  <i data-lucide="external-link" class="mr-2 h-4 w-4"></i>
                  Ver Demo
                </a>
                <a 
                ${
                  project.githubUrl === ""
                    ? "onclick='openProjetoIndisponivel()'"
                    : 'href="' + project.githubUrl + '"'
                }
                target="_blank" rel="noopener noreferrer" class="btn-outline px-6 py-3 rounded-md">
                  <i data-lucide="github" class="mr-2 h-4 w-4"></i>
                  Visualizar Código
                </a>
                                    </div>
                                </div>
              </div>
                `
      )
      .join("");

    lucide.createIcons();
    initScrollAnimations();
  }

  // Filter functionality
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.className = "filter-btn btn-outline px-6 py-2 rounded-full mb-2";
      });
      btn.className = "filter-btn btn-primary px-6 py-2 rounded-full mb-2";

      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  renderProjects();
}

const modalProjetoIndisponivel = document.getElementById(
  "modalProjetoIndisponivel"
);
const closeProjetoIndisponivel = document.getElementById(
  "closeProjetoIndisponivel"
);

function openProjetoIndisponivel() {
  modalProjetoIndisponivel.classList.remove("hidden");
  document.body.style.overflow = "hidden";

}
closeProjetoIndisponivel.addEventListener("click", () => {
  modalProjetoIndisponivel.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Project modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  // Certifique-se de que project.images seja um array de URLs de imagem
  const images = Array.isArray(project.image) ? project.image : [project.image]; // Se 'project.images' não for um array, cria um com a única imagem

  // Carrossel de imagens com loop 'for'
  let carouselContent = "";
  for (let i = 0; i < images.length; i++) {
    carouselContent += `
      <div class="carousel-item w-full">
        <img src="${images[i]}" alt="Image ${
      i + 1
    }" class="w-full object-cover rounded-lg mb-6">
      </div>`;
  }

  const carousel = `
    <div id="indicators-carousel" class="relative w-full" data-carousel="static">
      <div class="flex overflow-hidden">
        ${carouselContent}
      </div>
      <button id="prev" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
      <button id="next" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
    </div>
  `;

  modalContent.innerHTML = `
    <h2 class="text-2xl font-bold text-foreground mb-4">${project.title}</h2>
    <p class="text-muted-foreground text-base mb-6">${
      project.longDescription
    }</p>
    
    ${carousel}

    <div class="space-y-4">
      <div>
        <h4 class="font-semibold mb-2">Tecnologias Utilizadas:</h4>
        <div class="flex flex-wrap gap-2">
          ${project.technologies
            .map((tech) => `<span class="badge badge-secondary">${tech}</span>`)
            .join("")}
        </div>
      </div>
      <div class="flex gap-4 pt-4">
        <a 
        ${
          project.demoUrl === ""
            ? "onclick='openProjetoIndisponivel()'"
            : 'href="' + project.demoUrl + '"'
        } 
        target="_blank" rel="noopener noreferrer" class="btn-primary px-6 py-3 rounded-md">
          <i data-lucide="external-link" class="mr-2 h-4 w-4"></i>
          Ver Demo
        </a>
        <a 
        ${
          project.githubUrl === ""
            ? "onclick='openProjetoIndisponivel()'"
            : 'href="' + project.githubUrl + '"'
        }
        target="_blank" rel="noopener noreferrer" class="btn-outline px-6 py-3 rounded-md">
          <i data-lucide="github" class="mr-2 h-4 w-4"></i>
          Visualizar Código
        </a>
      </div>
    </div>
  `;

  // Abrir o modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Impede o scroll de fundo

  // Adicionar funcionalidade de fechar o modal ao clicar fora dele
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Controlar navegação do carrossel
  let currentIndex = 0;
  const totalImages = images.length;

  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  // Atualizar o carrossel para exibir a imagem correta
  function updateCarousel() {
    const items = document.querySelectorAll(".carousel-item");

    // Ocultar todas as imagens e exibir a imagem correspondente ao índice
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }

  // Navegar para a imagem anterior
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  // Navegar para a próxima imagem
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  updateCarousel(); // Iniciar com a primeira imagem visível

  lucide.createIcons(); // Cria os ícones usando lucide (como o ícone do GitHub e demo)
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Generate technologies
function generateTechnologies() {
  const technologiesGrid = document.getElementById("technologies-grid");

  function getLevelColor(level) {
    switch (level) {
      case "Expert":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      case "Avançado":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Básico":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    }
  }

  technologiesGrid.innerHTML = technologies
    .map(
      (category, categoryIndex) => `
                <div class="card-hover bg-card rounded-xl shadow-lg p-6 fade-in visible" style="animation-delay: ${
                  categoryIndex * 200
                }ms;">
                    <h3 class="text-xl font-semibold text-foreground mb-2">${
                      category.category
                    }</h3>
                    <p class="text-muted-foreground mb-6">${
                      category.description
                    }</p>
                    <div class="space-y-4 ">
                        ${category.skills
                          .map(
                            (skill, skillIndex) => `
                            <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cards-skill" style="animation-delay: ${
                              categoryIndex * 200 + skillIndex * 50
                            }ms;">
                                <div class="flex items-center space-x-3">
                                    <span class="text-2xl">${skill.icon}</span>
                                    <span class="font-medium text-foreground">${
                                      skill.name
                                    }</span>
                                </div>
                                <span class="badge ${getLevelColor(
                                  skill.level
                                )}">${skill.level}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
    )
    .join("");
}

// Generate blog posts
function generateBlogPosts() {
  const blogGrid = document.getElementById("blog-grid");

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  blogGrid.innerHTML = blogPosts
    .map(
      (post, index) => `
                <div class="card-hover bg-card rounded-xl overflow-hidden shadow-lg fade-in visible cursor-pointer" style="animation-delay: ${
                  index * 100
                }ms;">
                    <div class="relative overflow-hidden rounded-t-lg group">
                        <img src="${
                          post.image || "/placeholder.svg?height=200&width=400"
                        }" alt="${
        post.title
      }" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center space-x-4 text-sm text-muted-foreground mb-2 visible fade-in">
                            <div class="flex items-center">
                                <i data-lucide="calendar" class="mr-1 h-4 w-4"></i>
                                ${formatDate(post.date)}
                            </div>
                            <div class="flex items-center">
                                <i data-lucide="clock" class="mr-1 h-4 w-4"></i>
                                ${post.readTime}
                            </div>
                        </div>
                        <h3 class="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-3">${
                          post.title
                        }</h3>
                        <p class="text-muted-foreground text-sm mb-4">${
                          post.excerpt
                        }</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${post.tags
                              .map(
                                (tag) =>
                                  `<span class="badge badge-secondary text-xs">${tag}</span>`
                              )
                              .join("")}
                        </div>
                        <button class="btn-ghost p-0 h-auto group/button">
                            Read More
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            `
    )
    .join("");

  lucide.createIcons();
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initHeaderScroll();
  initScrollAnimations();
  generateProjects();
  generateTechnologies();
  generateBlogPosts();

  // Modal close functionality
  document
    .getElementById("modal-close")
    .addEventListener("click", closeProjectModal);
  document.getElementById("project-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeProjectModal();
    }
  });

  // Hero animation
  setTimeout(() => {
    document.getElementById("hero-content").classList.add("visible");
  }, 100);

  lucide.createIcons();
});

// Make functions global for onclick handlers
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
