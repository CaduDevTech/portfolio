import { TechnologyGroup } from '../models/portfolio.models';

export const TECHNOLOGIES_DATA: TechnologyGroup[] = [
  {
    "category": "Frontend",
    "description": "Tecnologias de desenvolvimento front-end",
    "skills": [
      {
        "name": "Angular",
        "level": "Intermediário",
        "iconAsset": "assets/icons/angular.svg"
      },
      {
        "name": "Ionic",
        "level": "Avançado",
        "iconAsset": "assets/icons/ionic.svg"
      },
      {
        "name": "TypeScript",
        "level": "Intermediário",
        "iconAsset": "assets/icons/typescript.svg"
      },
      {
        "name": "Tailwind CSS",
        "level": "Intermediário",
        "iconAsset": "assets/icons/tailwind.svg"
      },
      {
        "name": "bootstrap",
        "level": "Avançado",
        "iconAsset": "assets/icons/bootstrap.svg"
      },
      {
        "name": "Figma",
        "level": "Básico",
        "iconAsset": "assets/icons/figma.svg"
      }
    ]
  },
  {
    "category": "Backend",
    "description": "Tecnologias de servidor e banco de dados",
    "skills": [
      {
        "name": "Laravel",
        "level": "Intermediário",
        "iconAsset": "assets/icons/laravel.svg"
      },
      {
        "name": "C#",
        "level": "Básico",
        "iconAsset": "assets/icons/csharp.svg"
      },
      {
        "name": "MySQL",
        "level": "Intermediário",
        "iconAsset": "assets/icons/mysql.svg"
      },
      {
        "name": "Oracle Database",
        "level": "Intermediário",
        "iconAsset": "assets/icons/sqlServer.svg"
      },
      {
        "name": "PHP",
        "level": "Intermediário",
        "iconAsset": "assets/icons/php.svg"
      }
    ]
  },
  {
    "category": "DevOps & Ferramentas",
    "description": "Ferramentas e tecnologias de suporte",
    "skills": [
      {
        "name": "Linux",
        "level": "Básico",
        "iconAsset": "assets/icons/linux.svg"
      },
      {
        "name": "AWS",
        "level": "Básico",
        "iconAsset": "assets/icons/aws.svg"
      },
      {
        "name": "Git",
        "level": "Avançado",
        "iconAsset": "assets/icons/git.svg"
      },
      {
        "name": "Apache Server",
        "level": "Básico",
        "iconAsset": "assets/icons/apache.svg"
      }
    ]
  }
];

export const ADDITIONAL_SKILLS: string[] = [
  "Metodologias Ágeis",
  "Trello e Jira",
  "Design Responsivo",
  "Database relacional",
  "Prompt Engineering",
  "Burb Suite e Postman",
  "RAG (Retrieval-Augmented Generation)",
  "Clean Code",
  "Documentação Técnica",
  "N8N",
  "AWS",
  
];
