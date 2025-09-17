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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, payment processing, and order tracking. The admin dashboard allows for inventory management and sales analytics.",
    image: "teste.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management application with real-time collaboration features. Built with React and Socket.io for instant updates. Includes drag-and-drop functionality, team management, file attachments, and progress tracking.",
    image: "teste.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
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
    image: "teste.png",
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
    image: "teste.jpg",
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
    image: "teste.png",
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
    image: "teste.jpg",
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
      { name: "Angular", level: "Intermediário", icon: '<img src="icones SVG/angular.svg" class="h-6 w-6"/>'},
      { name: "Ionic", level: "Avançado", icon: '<img src="icones SVG/ionic.svg" class="h-6 w-6"/>'},
      { name: "TypeScript", level: "Intermediário", icon: '<img src="icones SVG/typescript.svg" class="h-6 w-6"/>'},
      { name: "Tailwind CSS", level: "Intermediário", icon: '<img src="icones SVG/tailwind.svg" class="h-6 w-6"/>' },
      { name: "bootstrap", level: "Avançado", icon: '<img src="icones SVG/bootstrap.svg" class="h-6 w-6"/>' },
      { name: "Figma", level: "Básico", icon: '<img src="icones SVG/figma.svg" class="h-6 w-6"/>' },
    ],
  },
  {
    category: "Backend",
    description: "Tecnologias de servidor e banco de dados",
    skills: [
      { name: "Laravel", level: "Intermediário", icon: '<img src="icones SVG/laravel.svg" class="h-6 w-6"/>' },
      { name: "C#", level: "Básico", icon: '<img src="icones SVG/csharp.svg" class="h-6 w-6"/>' },
      { name: "MySQL", level: "Intermediário", icon: '<img src="icones SVG/mysql.svg" class="h-6 w-6"/>'},
      { name: "Oracle Database", level: "Intermediário", icon: '<img src="icones SVG/sqlServer.svg" class="h-6 w-6"/>' },
      { name: "PHP", level: "Intermediário", icon: '<img src="icones SVG/php.svg" class="h-6 w-6"/>' },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Ferramentas e tecnologias de suporte",
    skills: [
      { name: "Linux", level: "Básico", icon: '<img src="icones SVG/linux.svg" class="h-6 w-6"/>' },
      { name: "AWS", level: "Básico", icon: '<img src="icones SVG/aws.svg" class="h-6 w-6"/>' },
      { name: "Git", level: "Avançado", icon: '<img src="icones SVG/git.svg" class="h-6 w-6"/>' },
      { name: "Apache Server", level: "Básico", icon: '<img src="icones SVG/apache.svg" class="h-6 w-6"/>' },
    ],
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring large React applications with proper state management and component architecture.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    image: "teste.jpg",
  },
  {
    id: 2,
    title: "Next.js 14: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 14, including improved performance, new APIs, and enhanced developer experience.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Next.js", "React", "Web Development"],
    image: "teste.png",
  },
  {
    id: 3,
    title: "TypeScript Tips for Better Code Quality",
    excerpt:
      "Discover advanced TypeScript techniques that will help you write more maintainable and type-safe code.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["TypeScript", "Code Quality", "Development"],
    image: "teste.jpg",
  },
  {
    id: 4,
    title: "Optimizing Web Performance in 2024",
    excerpt:
      "A comprehensive guide to modern web performance optimization techniques and tools.",
    date: "2023-12-28",
    readTime: "12 min read",
    tags: ["Performance", "Optimization", "Web Development"],
    image: "teste.png",
  },
  {
    id: 5,
    title: "The Future of CSS: Container Queries and More",
    excerpt:
      "Explore the latest CSS features that are changing how we approach responsive design and layout.",
    date: "2023-12-20",
    readTime: "7 min read",
    tags: ["CSS", "Responsive Design", "Frontend"],
    image: "teste.png",
  },
  {
    id: 6,
    title: "Building APIs with Node.js and Express",
    excerpt:
      "A step-by-step guide to creating robust and scalable APIs using Node.js and Express framework.",
    date: "2023-12-15",
    readTime: "15 min read",
    tags: ["Node.js", "Express", "API Development"],
    image: "teste.png",
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
  "Team Leadership"
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
                              project.image ||
                              "/placeholder.svg?height=200&width=400"
                            }" alt="${
          project.title
        }" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button onclick="openProjectModal(${
                                  project.id
                                })" class="btn-primary px-4 py-2 rounded-md mr-2">
                                    <i data-lucide="eye" class="mr-2 h-4 w-4"></i>
                                    View Details
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
                                    ? `<span class="badge badge-outline text-xs">+${
                                        project.technologies.length - 3
                                      } more</span>`
                                    : ""
                                }
                            </div>
                            <div class="flex gap-2">
                                <a href="${
                                  project.demoUrl
                                }" target="_blank" rel="noopener noreferrer" class="btn-outline px-4 py-2 rounded-md text-sm">
                                    <i data-lucide="external-link" class="mr-2 h-4 w-4"></i>
                                    Demo
                                </a>
                                <a href="${
                                  project.githubUrl
                                }" target="_blank" rel="noopener noreferrer" class="btn-outline px-4 py-2 rounded-md text-sm">
                                    <i data-lucide="github" class="mr-2 h-4 w-4"></i>
                                    Code
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

// Project modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
                <h2 class="text-2xl font-bold text-foreground mb-4">${
                  project.title
                }</h2>
                <p class="text-muted-foreground text-base mb-6">${
                  project.longDescription
                }</p>
                <img src="${
                  project.image || "/placeholder.svg?height=300&width=600"
                }" alt="${
    project.title
  }" class="w-full h-64 object-cover rounded-lg mb-6">
                <div class="space-y-4">
                    <div>
                        <h4 class="font-semibold mb-2">Technologies Used:</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies
                              .map(
                                (tech) =>
                                  `<span class="badge badge-secondary">${tech}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="flex gap-4 pt-4">
                        <a href="${
                          project.demoUrl
                        }" target="_blank" rel="noopener noreferrer" class="btn-primary px-6 py-3 rounded-md">
                            <i data-lucide="external-link" class="mr-2 h-4 w-4"></i>
                            View Live Demo
                        </a>
                        <a href="${
                          project.githubUrl
                        }" target="_blank" rel="noopener noreferrer" class="btn-outline px-6 py-3 rounded-md">
                            <i data-lucide="github" class="mr-2 h-4 w-4"></i>
                            View Source Code
                        </a>
                    </div>
                </div>
            `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
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
                    <div class="space-y-4">
                        ${category.skills
                          .map(
                            (skill, skillIndex) => `
                            <div class="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors" style="animation-delay: ${
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
