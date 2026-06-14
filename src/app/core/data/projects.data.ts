import { Project, ProjectCategory } from '../models/portfolio.models';

export const PROJECT_FILTERS: ProjectCategory[] = ['all', 'Full Stack', 'Frontend', 'Backend', 'Cloud'];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'SIGAF - Sistema de Gerenciamento de Ativos Físicos',
    description:
      'Sistema completo para gestão de ativos físicos e patrimônio empresarial. Rastreia bens via QRCode, controla depreciação, manutenções, movimentações e gera termos de responsabilidade.',
    longDescriptionHtml:
      ' Plataforma completa para controle patrimonial com rastreabilidade, depreciação contábil, manutenção, movimentação de bens e auditoria. O <b>SIGAF</b> permite o gerenciamento do ciclo de vida completo de ativos físicos empresariais — desde aquisição, uso e manutenção, até a baixa e histórico contábil. Ideal para empresas que precisam atender a auditorias, controlar perdas e manter conformidade fiscal (CFC, LGPD, ISO, etc.).<br><br><b>🎯 Funcionalidades principais</b><br>-Gestão completa de ativos físicos (TI, frota, imóveis, mobiliário, EPIs etc)<br>-Controle de depreciação contábil com base na Resolução CFC 1.177/09<br>-Inventário físico e check-in/out via smartphone<br>-Manutenção preventiva e corretiva com laudos<br>-Termo de responsabilidade gerado em PDF<br>-Transferência entre setores/filiais com histórico<br>-Logs de auditoria detalhados (quem, o que, quando)<br>-Suporte a multi-empresas (multi-tenancy SaaS)<br><br><b>🧱 Tecnologias</b><br><b>🧠 Backend:</b> Laravel 10+, MySQL/PostgreSQL, Spatie packages<br><b>📱 Frontend:</b> Angular 20 / Ionic 7 (Mobile-first)<br><b>🔒 Segurança:</b> Laravel Sanctum, RBAC, Activity Log, uploads assinados<br><b>🧪 Status:</b> Projeto em desenvolvimento<br>Projeto ainda sendo criado telas e lógica de front-end, sempre pensando na segurança.<br><br>🟢Metodologia:</b> Projeto desenvolvido com o Trello para ajudar com o desenvolvimento',
    media: ['assets/images/login_sigaf.jpg', 'assets/images/dashboard_sigaf.jpg'],
    technologies: ['Angular', 'Ionic', 'Laravel', 'MySQL', 'TypeScript'],
    demoUrl: '',
    githubUrl: '',
    category: 'Full Stack',
    unavailable: {
      title: 'Em desenvolvimento...',
      descriptionHtml:
        'Esta funcionalidade ainda não foi aberta ao público para esse projeto.<br>Em breve estará disponível!',
    },
  },
  {
    id: 2,
    title: 'Site De Noticas',
    description:
      'Plataforma de notícias com funcionalidades completas de autenticação e registro de usuários, implementada com alto nível de segurança, abrangendo criptografia de dados, proteção contra CSRF, prevenção de injeções SQL, e mitigação de vulnerabilidades XSS.',
    longDescriptionHtml:
      'Plataforma voltada para a criação e gerenciamento de notícias, permitindo que os usuários se autentiquem, publiquem, editem e excluam suas publicações. O sistema foi desenvolvido com rigorosas medidas de segurança no código, garantindo a proteção contra vulnerabilidades como CSRF, injeção de SQL e XSS. Ideal para sites de notícias que buscam uma plataforma segura e intuitiva para gerenciar conteúdo de forma eficiente.<br><br><b>🎯 Funcionalidades principais</b><br><b>Autenticação de usuários:</b> Cadastro, login e gerenciamento de sessões.<br><b>Publicação de notícias:</b> Publicação, edição e exclusão de conteúdos.<br><b>Segurança avançada:</b> Proteção contra vulnerabilidades como CSRF, injeção de SQL e XSS.<br><b>Gestão de conteúdo:</b> Interface intuitiva para facilitar a criação e modificação das publicações.<br><b>Controle de permissões:</b> Definição de acessos para diferentes tipos de usuários.<br><br><b>🧱 Tecnologias</b><b><br>🧠 Backend:</b> PHP, MySQL<br><b>📱 Frontend:</b> Bootstrap<br><br><b>🧪 Status:</b> Protótipo inicial, com foco em aprendizado e segurança.<b><br><br>🟢 Metodologia:</b> O sistema foi desenvolvido de forma prática, com foco em segurança e usabilidade, visando a construção de um protótipo funcional, mas sem seguir uma metodologia de desenvolvimento estruturada.',
    media: ['assets/images/site_noticia_1.png', 'assets/images/site_noticia_2.png', 'assets/images/site_noticia_3.png', 'assets/images/site_noticia_4.png'],
    technologies: ['PHP', 'Bootstrap', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    demoUrl: '',
    githubUrl: 'https://github.com/CaduDevTech/projeto_site_noticias',
    category: 'Full Stack',
    unavailable: {
      title: 'Não está disponível...',
      descriptionHtml: 'Este projeto não tem um link de demonstração disponível!',
    },
  },
  {
    id: 3,
    title: 'Sistema de ADM de Loja',
    description:
      'Sistema de gestão para gerenciar funcionários, clientes, produtos e vendas. O sistema rastreia todas as transações, desde o funcionário que realizou a venda até o produto e cliente envolvidos, oferecendo relatórios detalhados e facilitando a gestão da loja.',
    longDescriptionHtml:
      'Plataforma completa para gestão de lojas com controle de clientes, funcionários, produtos e vendas. O Sistema de Administração de Lojas oferece uma solução completa para otimizar os processos administrativos, proporcionando o controle total do ciclo de vida dos produtos e a gestão eficiente das operações diárias. Ideal para lojas de todos os portes que buscam automatizar e agilizar as tarefas diárias, melhorar a produtividade e garantir a segurança das informações.<br><br><b>🎯 Funcionalidades principais</b><br>Gestão completa de clientes: Cadastro, atualização e histórico de compras.<br>Gestão de funcionários: Cadastro, controle de acessos e performance de vendas.<br>Gestão de produtos: Controle de estoque, atualização de preços e relatórios detalhados.<br>Gestão de vendas: Registro de vendas<br>Relatórios e Análises: Relatórios detalhados de vendas, estoque e desempenho.<br>Validações de CPF e CNPJ<br>Verificação de validade de CEP, trazendo os dados do mesmo<br><br><b>🧱 Tecnologias</b><br><b>🧠 Backend:</b> MySQL, C#<br><b>📱 Frontend:</b> Windows Forms<br><br><b>🧪 Status:</b> Descontinuado, porém tenho interese em trabalhar com C#<br><br><b>🟢 Metodologia:</b> O sistema não seguiu uma metodologia de desenvolvimento definida, pois foi um dos meus primeiros projetos sérios, e na época eu não tinha conhecimento sobre metodologias eficazes para organização de código.',
    media: [
      'assets/images/sistema_adm_loja.png',
      'assets/images/sistema_adm_loja_db.png',
      'assets/videos/sistema_adm_loja.mp4',
    ],
    technologies: ['C#', 'Windows Forms', 'MySQL', 'Visual Studio'],
    demoUrl: '',
    githubUrl: 'https://github.com/CaduDevTech/Sistema_de_Administracao_de_Loja',
    category: 'Full Stack',
    unavailable: {
      title: 'Não está disponível...',
      descriptionHtml: 'Este projeto não tem um link de demonstração disponível!',
    },
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'Portifolio completo com animações, efeitos de cabeçalho e design moderno. Seguindo os padrões de UI/UX moderno.',
    longDescriptionHtml:
      'Portfólio Pessoal em HTML, CSS, Tailwind, Animista e FinisherHeader. Este portfólio foi desenvolvido como uma vitrine pessoal para apresentar meus projetos e habilidades no desenvolvimento web. Utilizando tecnologias modernas, como HTML, CSS, Tailwind CSS, Animista para animações e FinisherHeader para efeitos de cabeçalho, o site foi projetado para ser visualmente atrativo e responsivo, oferecendo uma navegação fluida e agradável.<br><br><b>🎯 Funcionalidades principais</b><br>Design Responsivo: Adaptável a diferentes dispositivos e tamanhos de tela.<br>Animações Elegantes: Integração com Animista para transições e efeitos visuais interativos.<br>Estilização Moderna: Utilização do framework Tailwind CSS para um design limpo e fácil de manter.<br>Cabeçalho Personalizado: Efeitos de cabeçalho dinâmico com FinisherHeader, oferecendo uma experiência visual imersiva.<br><br><b>🧱 Tecnologias</b><br><b>💻 Frontend:</b> HTML, CSS, Tailwind CSS<br><b>✨ Animações:</b> Animista<br><b>🔧 Efeitos de Cabeçalho:</b> FinisherHeader<br><br><b>🧪 Status:</b> Portfólio em produção, com todas as funcionalidades principais implementadas, incluindo animações interativas e design responsivo. Em constante atualização para refletir novos projetos e melhorias.<br><br><b>🟢 Metodologia:</b> Desenvolvido com foco em design moderno e experiências de usuário dinâmicas. O projeto foi construído de forma ágil, priorizando a usabilidade e otimização para uma navegação sem falhas em dispositivos móveis e desktops.',
    media: ['assets/images/portifolio.png'],
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Animista', 'FinisherHeader'],
    demoUrl: '',
    githubUrl: 'https://github.com/CaduDevTech/Portfolio',
    category: 'Frontend',
    unavailable: {
      title: 'Você está acessando o portifolio...',
      descriptionHtml: 'Você já está no portifolio, aproveite e navegue pelo site!',
    },
  },
  {
    id: 6,
    title: 'Gerenciamento de Infraestrutura em Nuvem com AWS',
    description:
      'Projeto prático em computação em nuvem utilizando serviços AWS para configurar infraestrutura, publicar um site, gerenciar permissões, estruturar rede, configurar banco de dados, armazenamento e monitoramento.',
    longDescriptionHtml:
'Projeto prático desenvolvido durante a formação em Fundamentos de Computação em Nuvem com AWS pela Escola da Nuvem, com foco em infraestrutura cloud para hospedagem de aplicação web.<br><br>Utilizei Amazon EC2, IAM, VPC, RDS, S3, CloudWatch e Linux para publicar um site, configurar permissões, estruturar rede, integrar banco de dados, armazenar objetos e monitorar o ambiente.<br><br><b>🎯 Funcionalidades e práticas realizadas</b><br>Configuração de instância EC2 para hospedagem de aplicação web.<br>Publicação de site com acesso público em ambiente AWS.<br>Configuração de usuários, permissões e políticas com IAM.<br>Estruturação de rede utilizando VPC.<br>Configuração de banco de dados relacional com Amazon RDS.<br>Criação e configuração de bucket no Amazon S3.<br>Monitoramento de métricas e anomalias com Amazon CloudWatch.<br>Uso de Linux para configuração e operação básica do ambiente.<br><br><b>🧱 Tecnologias e serviços utilizados</b><br><b>☁️ Cloud:</b> AWS<br><b>💻 Computação:</b> Amazon EC2<br><b>🔐 Segurança e Acesso:</b> AWS IAM<br><b>🌐 Rede:</b> Amazon VPC<br><b>🗄️ Banco de Dados:</b> Amazon RDS<br><b>📦 Armazenamento:</b> Amazon S3<br><b>📊 Monitoramento:</b> Amazon CloudWatch<br><b>🐧 Sistema Operacional:</b> Linux<br><br><b>🧪 Status:</b> Projeto prático de laboratório concluído durante a formação, com foco em aprendizado, configuração de serviços AWS e aplicação de conceitos fundamentais de infraestrutura em nuvem.<br><br><b>🟢 Metodologia:</b> Desenvolvido com abordagem prática, priorizando o entendimento do fluxo completo de uma aplicação em ambiente cloud: provisionamento de infraestrutura, configuração de rede, controle de acesso, publicação de aplicação, integração com banco de dados, armazenamento de arquivos e monitoramento operacional.<br><br><b>📌 Aprendizados principais</b><br>-Compreensão prática de infraestrutura em nuvem com AWS.<br>-Configuração de servidores cloud utilizando EC2 e Linux.<br>-Aplicação de conceitos de segurança com IAM.<br>-Estruturação de redes utilizando VPC.<br>-Integração entre aplicação e banco de dados com RDS.<br>-Uso de S3 para armazenamento de objetos.<br>-Monitoramento e observabilidade com CloudWatch.<br>-Noções de boas práticas em segurança, disponibilidade, escalabilidade e operação em ambiente cloud.',
    media: ['assets/images/curso_aws_escola_da_nuvem.jpg', 'assets/images/curso_aws_EC2.jpg', 'assets/images/curso_aws_s3.jpg','assets/images/curso_aws_certificado.jpg'],
    technologies: [
      'AWS',
      'Amazon EC2',
      'AWS IAM',
      'Amazon VPC',
      'Amazon RDS',
      'Amazon S3',
      'Amazon CloudWatch',
      'Linux',
      'Cloud Computing',
      'Redes',
      'Segurança em Nuvem',
      'Banco de Dados',
    ],
    demoUrl: '',
    githubUrl: '',
    category: 'Cloud',
    unavailable: {
      title: 'Projeto de laboratório AWS',
      descriptionHtml:
        'Este projeto foi desenvolvido como experiência prática durante a formação em computação em nuvem. Por envolver recursos de laboratório, credenciais, configurações de conta e boas práticas de segurança, a demonstração pública não está disponível. A descrição técnica apresenta os serviços configurados e os principais aprendizados obtidos.',
    },
  },
];
