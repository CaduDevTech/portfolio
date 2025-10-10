// Data

localStorage.setItem("theme", "dark");
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
    mensagem: [
      "Em desenvolvimento...",
      "Esta funcionalidade ainda não foi aberta ao público para esse projeto.<br>Em breve estará disponível!",
    ],
  },
  {
    id: 2,
    title: "Site De Noticas",
    description:
      "Plataforma de notícias com funcionalidades completas de autenticação e registro de usuários, implementada com alto nível de segurança, abrangendo criptografia de dados, proteção contra CSRF, prevenção de injeções SQL, e mitigação de vulnerabilidades XSS.",
    longDescription:
      "Plataforma voltada para a criação e gerenciamento de notícias, permitindo que os usuários se autentiquem, publiquem, editem e excluam suas publicações. O sistema foi desenvolvido com rigorosas medidas de segurança no código, garantindo a proteção contra vulnerabilidades como CSRF, injeção de SQL e XSS. Ideal para sites de notícias que buscam uma plataforma segura e intuitiva para gerenciar conteúdo de forma eficiente.<br><br><b>🎯 Funcionalidades principais</b><br><b>Autenticação de usuários:</b> Cadastro, login e gerenciamento de sessões.<br><b>Publicação de notícias:</b> Publicação, edição e exclusão de conteúdos.<br><b>Segurança avançada:</b> Proteção contra vulnerabilidades como CSRF, injeção de SQL e XSS.<br><b>Gestão de conteúdo:</b> Interface intuitiva para facilitar a criação e modificação das publicações.<br><b>Controle de permissões:</b> Definição de acessos para diferentes tipos de usuários.<br><br><b>🧱 Tecnologias</b><b><br>🧠 Backend:</b> PHP, MySQL<br><b>📱 Frontend:</b> Bootstrap<br><br><b>🧪 Status:</b> Protótipo inicial, com foco em aprendizado e segurança.<b><br><br>🟢 Metodologia:</b> O sistema foi desenvolvido de forma prática, com foco em segurança e usabilidade, visando a construção de um protótipo funcional, mas sem seguir uma metodologia de desenvolvimento estruturada.",
    image: "images/teste.png",
    technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript", "HTML", "CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/CaduDevTech/projeto_site_noticias",
    category: "Full Stack",
    mensagem: [
      "Não está disponível...",
      "Este projeto não tem um link de demonstração disponível!",
    ],
  },
  {
    id: 3,
    title: "Sistema de ADM de Loja",
    description:
      "Sistema de gestão para gerenciar funcionários, clientes, produtos e vendas. O sistema rastreia todas as transações, desde o funcionário que realizou a venda até o produto e cliente envolvidos, oferecendo relatórios detalhados e facilitando a gestão da loja.",
    longDescription:
      "Plataforma completa para gestão de lojas com controle de clientes, funcionários, produtos e vendas. O Sistema de Administração de Lojas oferece uma solução completa para otimizar os processos administrativos, proporcionando o controle total do ciclo de vida dos produtos e a gestão eficiente das operações diárias. Ideal para lojas de todos os portes que buscam automatizar e agilizar as tarefas diárias, melhorar a produtividade e garantir a segurança das informações.<br><br><b>🎯 Funcionalidades principais</b><br>Gestão completa de clientes: Cadastro, atualização e histórico de compras.<br>Gestão de funcionários: Cadastro, controle de acessos e performance de vendas.<br>Gestão de produtos: Controle de estoque, atualização de preços e relatórios detalhados.<br>Gestão de vendas: Registro de vendas<br>Relatórios e Análises: Relatórios detalhados de vendas, estoque e desempenho.<br>Validações de CPF e CNPJ<br>Verificação de validade de CEP, trazendo os dados do mesmo<br><br><b>🧱 Tecnologias</b><br><b>🧠 Backend:</b> MySQL, C#<br><b>📱 Frontend:</b> Windows Forms<br><br><b>🧪 Status:</b> Descontinuado, porém tenho interese em trabalhar com C#<br><br><b>🟢 Metodologia:</b> O sistema não seguiu uma metodologia de desenvolvimento definida, pois foi um dos meus primeiros projetos sérios, e na época eu não tinha conhecimento sobre metodologias eficazes para organização de código.",
    image: [
      "images/sistema_adm_loja.png",
      "images/sistema_adm_loja_db.png",
      "videos/sistema_adm_loja.mp4",
    ],
    technologies: ["C#", "Windows Forms", "MySQL", "Visual Studio"],
    demoUrl: "",
    githubUrl:
      "https://github.com/CaduDevTech/Sistema_de_Administracao_de_Loja",
    category: "Full Stack",
    mensagem: [
      "Não está disponível...",
      "Este projeto não tem um link de demonstração disponível!",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Portifolio completo com animações, efeitos de cabeçalho e design moderno. Seguindo os padrões de UI/UX moderno.",
    longDescription:
      "Portfólio Pessoal em HTML, CSS, Tailwind, Animista e FinisherHeader. Este portfólio foi desenvolvido como uma vitrine pessoal para apresentar meus projetos e habilidades no desenvolvimento web. Utilizando tecnologias modernas, como HTML, CSS, Tailwind CSS, Animista para animações e FinisherHeader para efeitos de cabeçalho, o site foi projetado para ser visualmente atrativo e responsivo, oferecendo uma navegação fluida e agradável.<br><br><b>🎯 Funcionalidades principais</b><br>Design Responsivo: Adaptável a diferentes dispositivos e tamanhos de tela.<br>Animações Elegantes: Integração com Animista para transições e efeitos visuais interativos.<br>Estilização Moderna: Utilização do framework Tailwind CSS para um design limpo e fácil de manter.<br>Cabeçalho Personalizado: Efeitos de cabeçalho dinâmico com FinisherHeader, oferecendo uma experiência visual imersiva.<br><br><b>🧱 Tecnologias</b><br><b>💻 Frontend:</b> HTML, CSS, Tailwind CSS<br><b>✨ Animações:</b> Animista<br><b>🔧 Efeitos de Cabeçalho:</b> FinisherHeader<br><br><b>🧪 Status:</b> Portfólio em produção, com todas as funcionalidades principais implementadas, incluindo animações interativas e design responsivo. Em constante atualização para refletir novos projetos e melhorias.<br><br><b>🟢 Metodologia:</b> Desenvolvido com foco em design moderno e experiências de usuário dinâmicas. O projeto foi construído de forma ágil, priorizando a usabilidade e otimização para uma navegação sem falhas em dispositivos móveis e desktops.",
    image: "images/portifolio.png",
    technologies: ["HTML", "CSS", "Tailwind CSS", "Animista", "FinisherHeader"],
    demoUrl: "",
    githubUrl: "https://github.com/CaduDevTech/Portfolio",
    category: "Frontend",
    mensagem: [
      "Você está acessando o portifolio...",
      "Você já está no portifolio, aproveite e navegue pelo site!",
    ],
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
    mensagem: [
      "Em desenvolvimento...",
      "Esta funcionalidade ainda não foi aberta ao público para esse projeto.<br>Em breve estará disponível!",
    ],
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
        icon: '<img loading="lazy" src="icones SVG/angular.svg" class="h-6 w-6"/>',
      },
      {
        name: "Ionic",
        level: "Avançado",
        icon: '<img loading="lazy" src="icones SVG/ionic.svg" class="h-6 w-6"/>',
      },
      {
        name: "TypeScript",
        level: "Intermediário",
        icon: '<img loading="lazy" src="icones SVG/typescript.svg" class="h-6 w-6"/>',
      },
      {
        name: "Tailwind CSS",
        level: "Intermediário",
        icon: '<img loading="lazy" src="icones SVG/tailwind.svg" class="h-6 w-6"/>',
      },
      {
        name: "bootstrap",
        level: "Avançado",
        icon: '<img loading="lazy" src="icones SVG/bootstrap.svg" class="h-6 w-6"/>',
      },
      {
        name: "Figma",
        level: "Básico",
        icon: '<img loading="lazy" src="icones SVG/figma.svg" class="h-6 w-6"/>',
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
        icon: '<img loading="lazy" src="icones SVG/laravel.svg" class="h-6 w-6"/>',
      },
      {
        name: "C#",
        level: "Básico",
        icon: '<img loading="lazy" src="icones SVG/csharp.svg" class="h-6 w-6"/>',
      },
      {
        name: "MySQL",
        level: "Intermediário",
        icon: '<img loading="lazy" src="icones SVG/mysql.svg" class="h-6 w-6"/>',
      },
      {
        name: "Oracle Database",
        level: "Intermediário",
        icon: '<img loading="lazy" src="icones SVG/sqlServer.svg" class="h-6 w-6"/>',
      },
      {
        name: "PHP",
        level: "Intermediário",
        icon: '<img loading="lazy" src="icones SVG/php.svg" class="h-6 w-6"/>',
      },
    ],
  },
  {
    category: "DevOps & Ferramentas",
    description: "Ferramentas e tecnologias de suporte",
    skills: [
      {
        name: "Linux",
        level: "Básico",
        icon: '<img loading="lazy" src="icones SVG/linux.svg" class="h-6 w-6"/>',
      },
      {
        name: "AWS",
        level: "Básico",
        icon: '<img loading="lazy" src="icones SVG/aws.svg" class="h-6 w-6"/>',
      },
      {
        name: "Git",
        level: "Avançado",
        icon: '<img loading="lazy" src="icones SVG/git.svg" class="h-6 w-6"/>',
      },
      {
        name: "Apache Server",
        level: "Básico",
        icon: '<img loading="lazy" src="icones SVG/apache.svg" class="h-6 w-6"/>',
      },
    ],
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Evento BAH-IA Data Science 2025",
    excerpt:
      "Foram trazidas algumas aplicações inovadoras da IA em negócios e em plataformas de streaming. Foi uma experiência extremamente enriquecedora, com palestras que agregaram muito ao meu conhecimento e ampliaram minha visão sobre o futuro da tecnologia.",
    date: "2025-09-15",
    tags: ["IA", "Machine Learning", "IA em Negócios"],
    image: "images/bahia_ia_inicial.png",
    url: "https://www.linkedin.com/posts/carlos-eduardo-tecnologia_participei-recentemente-do-evento-de-intelig%C3%AAncia-activity-7377841874314752000-rKgX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtzvM8B1xWBqruxDwP84CqRK8B8LSu68TY",
  },
  {
    id: 2,
    title: "Leitura do Livro Clear Code",
    excerpt:
      "A leitura do livro de Clean Code foi uma jornada de aprendizado profundo que me ajudou a melhorar minhas habilidades de codificação e aprimorar minha abordagem de desenvolvimento de software.",
    date: "2024-08-01",
    tags: ["Clean Code", "Design Patterns", "Boas Práticas de Codificação"],
    image: "images/clean_code_blog.png",
    url: "https://www.linkedin.com/posts/carlos-eduardo-tecnologia_progamaaexaeto-csharp-javascript-activity-7211875555321774080-6Qwz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtzvM8B1xWBqruxDwP84CqRK8B8LSu68TY",
  },
  {
    id: 3,
    title: "Cursos para aprimorar suas habilidades em Angular, Laravel e GIT",
    excerpt:
      "Concluçãos dos cursos de Angular e GIT e andamento do curso de laravel para aprimorar minhas habilidades em desenvolvimento web.",
    date: "2025-08",
    tags: ["Angular", "Laravel", "GIT"],
    image: "images/cursos_blog.jpg",
    url: "https://www.linkedin.com/in/carlos-eduardo-tecnologia/details/certifications/",
  },
  {
    id: 4,
    title: "Evento da Emaster sobre IA Generativa com AWS",
    excerpt:
      "Tive a oportunidade de participar de um evento organizado pela eMaster , com foco em IA generativa, especificamente utilizando as soluções da Amazon Web Services (AWS) . ",
    date: "2024-09",
    tags: ["AWS", "IA", "IA Generativa"],
    image: "images/evento_emaster.png",
    url: "https://www.linkedin.com/posts/carlos-eduardo-tecnologia_ia-inteligenciaartificial-iagenerativa-activity-7239652107249709056-ygF-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtzvM8B1xWBqruxDwP84CqRK8B8LSu68TY",
  },
  {
    id: 5,
    title: "Seminários  ISO 37001",
    excerpt:
      "Seminario dado pela Produs sobre Antisuborno e Anticorrupção, com foco em ISO 37001.",
    date: "2025-09-20",
    tags: ["Antisuborno", "Anticorrupção", "ISO 37001"],
    image: "images/seminario_anticorrupcao.jpg",
    url: "",
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

function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const icon_sun = document.querySelector('[name="sun-icon"]');
  const icon_moon = document.querySelector('[name="moon-icon"]');
  const html = document.documentElement;

  function toggleTheme() {
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light"
    );

    if (html.classList.contains("dark")) {
      icon_sun.style.display = "block";
      icon_moon.style.display = "none";
      animateThemeSwitch();
    } else {
      icon_sun.style.display = "none";
      icon_moon.style.display = "block";
      animateThemeSwitch();
    }
  }

  themeToggle?.addEventListener("click", toggleTheme);
  themeToggleMobile?.addEventListener("click", toggleTheme);

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
                            <img loading="lazy" src="${
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
      ? `onclick="openIndisponivel('${project.mensagem[0]}', '${project.mensagem[1]}')"`
      : `href="${project.demoUrl}"`
  } 
  target="_blank" rel="noopener noreferrer" class="btn-primary px-6 py-3 rounded-md">
    <i data-lucide="external-link" class="mr-2 h-4 w-4"></i>
    Ver Demo
</a>
                <a 
  ${
    project.githubUrl === ""
      ? `onclick="openIndisponivel('${project.mensagem[0]}', '${project.mensagem[1]}')"`
      : `href="${project.githubUrl}"`
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

const modalIndisponivel = document.getElementById("modalIndisponivel");
const closeIndisponivel = document.getElementById("closeIndisponivel");

function openIndisponivel($title, $description) {
  const modalIndisponivelMensagemTitle = document.getElementById(
    "modalIndisponivelMensagemTitle"
  );
  const modalIndisponivelMensagemDescription = document.getElementById(
    "modalIndisponivelMensagemDescription"
  );

  modalIndisponivelMensagemTitle.innerHTML = $title;
  modalIndisponivelMensagemDescription.innerHTML = $description;

  modalIndisponivel.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
closeIndisponivel.addEventListener("click", () => {
  modalIndisponivel.classList.add("hidden");
  document.body.style.overflow = "auto";
});

function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  // Certifique-se de que project.images seja um array de URLs de imagem ou vídeo
  const images = Array.isArray(project.image) ? project.image : [project.image]; // Se 'project.images' não for um array, cria um com a única imagem

  // Carrossel de imagens/vídeos
  let carouselContent = "";
  for (let i = 0; i < images.length; i++) {
    const isVideo = images[i].endsWith(".mp4");
    carouselContent += `
      <div class="carousel-item w-full ${i === 0 ? "" : "hidden"}">
        ${
          isVideo
            ? `
          <video loading="lazy" disablepictureinpicture canplay class="w-full h-full object-cover rounded-lg mb-6" controls>
            <source src="${images[i]}" type="video/mp4">
            Seu navegador não suporta a tag de vídeo.
          </video>
        `
            : `
          <img loading="lazy" src="${images[i]}" alt="Image ${
                i + 1
              }" class="w-full h-full object-cover rounded-lg mb-6">
        `
        }
      </div>`;
  }

  const carousel = ` 
  <div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <div class="flex overflow-hidden">
      ${carouselContent}
    </div>
    <button id="prev" type="button" class="absolute top-1/2 left-0 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button id="next" type="button" class="absolute top-1/2 right-0 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 cursor-pointer group focus:outline-none" data-carousel-next>
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
      ? `onclick="openIndisponivel('${project.mensagem[0]}', '${project.mensagem[1]}')"`
      : `href="${project.demoUrl}"`
  } 
  target="_blank" rel="noopener noreferrer" class="btn-primary px-6 py-3 rounded-md">
    <i data-lucide="external-link" class="mr-2 h-4 w-4"></i>
    Ver Demo
</a>
       <a 
  ${
    project.githubUrl === ""
      ? `onclick="openIndisponivel('${project.mensagem[0]}', '${project.mensagem[1]}')"`
      : `href="${project.githubUrl}"`
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

// Função para controlar o início do vídeo
function handleVideoPlay(event) {
  const video = event.target;

  // Pausar todos os vídeos
  const allVideos = document.querySelectorAll(".video-element");
  allVideos.forEach((v) => {
    if (v !== video) {
      v.pause();
    }
  });

  // Se o vídeo não estiver pausado, inicie-o
  if (video.paused) {
    video.play();
  }
}

// Quando o conteúdo for renderizado, adicione o evento de clique aos vídeos
document.addEventListener("DOMContentLoaded", () => {
  // Adicionar evento de clique a todos os vídeos
  const videos = document.querySelectorAll(".video-element");
  videos.forEach((video) => {
    video.addEventListener("click", handleVideoPlay); // Inicia o vídeo ao clicar
  });
});

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
    return new Date(dateString).toLocaleDateString("PT-BR", {
      year: "numeric",
      month: "long",
    });
  }

  blogGrid.innerHTML = blogPosts
    .map(
      (post, index) => `
                <div class="card-hover bg-card rounded-xl overflow-hidden shadow-lg fade-in visible cursor-pointer" style="animation-delay: ${
                  index * 100
                }ms;">
                    <div class="relative overflow-hidden rounded-t-lg group">
                        <img loading="lazy" src="${
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
                        <a href="${
                          post.url
                        }" target="_blank" class="btn-ghost p-0 h-auto group/button">
                            Ler mais
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform"></i>
                        </a>
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
  animateThemeSwitch();
  createThemeInstances();

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

// Variáveis globais para armazenar os contêineres e instâncias
let darkFinisherInstance, lightFinisherInstance;
let darkFinisherContainer, lightFinisherContainer;

// Função para animar a troca de tema
function animateThemeSwitch() {
  // Verifique qual tema está armazenado
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    // Exibe o contêiner do tema escuro e esconde o do tema claro
    if (darkFinisherContainer) {
      darkFinisherContainer.style.display = "block"; // Exibe o contêiner escuro
    }
    if (lightFinisherContainer) {
      lightFinisherContainer.style.display = "none"; // Esconde o contêiner claro
    }
  } else {
    // Tema claro
    // Exibe o contêiner do tema claro e esconde o do tema escuro
    if (lightFinisherContainer) {
      lightFinisherContainer.style.display = "block"; // Exibe o contêiner claro
    }
    if (darkFinisherContainer) {
      darkFinisherContainer.style.display = "none"; // Esconde o contêiner escuro
    }
  }
}

// Função para criar as instâncias e contêineres
function createThemeInstances() {
  // Verifique se as instâncias já foram criadas, se não, crie-as
  if (!darkFinisherInstance) {
    // Criação da instância para o tema claro
    darkFinisherContainer = document.createElement("div");
    darkFinisherContainer.classList.add("finisher-header-container");
    darkFinisherContainer.style.width = "100%";
    darkFinisherContainer.style.height = "100vh";
    document.body.appendChild(darkFinisherContainer); // Adiciona ao body

    darkFinisherInstance = new FinisherHeader({
      count: 12,
      size: {
        min: 400,
        max: 700,
        pulse: 2,
      },
      speed: {
        x: {
          min: 0.6,
          max: 1.2,
        },
        y: {
          min: 0.6,
          max: 2.2,
        },
      },
      colors: {
        background: "#3a72ed",
        particles: ["#ffffff", "#3a72ed"],
      },
      blending: "overlay",
      opacity: {
        center: 0.4,
        edge: 0,
      },
      skew: 0,
      shapes: ["c"],
    });
  }

  if (!lightFinisherInstance) {
    // Criação da instância para o tema escuro
    lightFinisherContainer = document.createElement("div");
    lightFinisherContainer.classList.add("finisher-header-container");
    lightFinisherContainer.style.width = "100%";
    lightFinisherContainer.style.height = "100vh";
    document.body.appendChild(lightFinisherContainer); // Adiciona ao body

    lightFinisherInstance = new FinisherHeader({
      className: "finisher-header-container", // Classe para o contêiner
      count: 10,
      size: {
        min: 400,
        max: 900,
        pulse: 2,
      },
      speed: {
        x: {
          min: 0,
          max: 2,
        },
        y: {
          min: 2.2,
          max: 2.2,
        },
      },
      colors: {
        background: "#020817",
        particles: ["#020817", "#3576df", "#26549e", "#020817"],
      },
      blending: "overlay",
      opacity: {
        center: 0.5,
        edge: 0,
      },
      skew: 0,
      shapes: ["c"],
    });
  }
}
