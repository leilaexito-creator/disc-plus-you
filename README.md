# DISC+ YOU - Plataforma de Avaliação de Personalidade e Orientação de Carreira

## 🎯 Visão Geral

DISC+ YOU é uma plataforma completa de avaliação de personalidade baseada no modelo DISC, combinada com recomendações de carreira, busca de vagas globais e mentoria com IA.

### Características Principais

- **82 Perguntas DISC** em 4 etapas (Natural, Adaptado, Valores, Psicológico)
- **Análise Completa** com cálculo automático dos 4 perfis (D, I, S, C)
- **30+ Profissões Recomendadas** 100% alinhadas com seu perfil
- **1000+ Vagas Globais** com foco em trabalho remoto
- **Mentoria com IA** - 10 sessões de coaching estruturadas
- **Relatório PDF** completo com análise e plano de desenvolvimento
- **Suporte Multilíngue** - 8 idiomas (PT, EN, ES, FR, DE, IT, JA, ZH)
- **Design Moderno** com paleta Azure Tiffany (#0D9488)

## 🚀 Começar Rápido

### Pré-requisitos

- Node.js 22.13.0+
- pnpm (ou npm/yarn)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/leilaexito-creator/disc-plus-you.git
cd disc-landing-page

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
disc-landing-page/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   ├── contexts/        # Contextos React
│   │   ├── data/
│   │   │   ├── disc-questions.ts    # 82 perguntas DISC
│   │   │   ├── professions.ts       # 30+ profissões
│   │   │   └── translations.ts      # Traduções (8 idiomas)
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── Home.tsx             # Página inicial
│   │   │   ├── DiscTest.tsx         # Teste DISC
│   │   │   ├── DiscResults.tsx      # Resultados
│   │   │   ├── Professions.tsx      # Profissões recomendadas
│   │   │   ├── JobSearch.tsx        # Busca de vagas
│   │   │   ├── AiCoaching.tsx       # Mentoria com IA
│   │   │   ├── PdfReport.tsx        # Gerador de PDF
│   │   │   └── NotFound.tsx         # 404
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html           # HTML principal
├── server/                  # Placeholder para servidor (futuro)
├── shared/                  # Código compartilhado
└── package.json
```

## 📖 Guia de Uso

### 1. Fazer o Teste DISC

1. Clique em **"Começar Teste Agora"** na página inicial
2. Responda as 82 perguntas distribuídas em 4 etapas:
   - **Etapa 1 (24Q):** Como você É (Natural)
   - **Etapa 2 (24Q):** Como você age no Trabalho (Adaptado)
   - **Etapa 3 (18Q):** O que importa para você (Valores)
   - **Etapa 4 (16Q):** Como você pensa (Psicológico)
3. Veja a barra de progresso (0-100%)
4. Clique em **"Próxima"** para avançar

### 2. Ver Resultados

Após completar o teste, você receberá:
- Scores dos 4 perfis DISC (D, I, S, C)
- Análise detalhada do seu perfil primário
- Gráficos de alinhamento
- Pontos fortes e desafios

### 3. Explorar Profissões Recomendadas

- Top 5 profissões 100% alinhadas com seu perfil
- Informações sobre cada profissão:
  - Alinhamento com seu perfil (%)
  - Salário estimado
  - Demanda no mercado
  - Oportunidades remotas
  - Habilidades principais

### 4. Buscar Vagas Globais

- Busca em 1000+ vagas
- Filtro por cargo ou empresa
- Opção de apenas vagas remotas
- Integração com múltiplas APIs de emprego

### 5. Iniciar Mentoria com IA

- 10 sessões de coaching estruturadas
- Cada sessão com:
  - Objetivo específico
  - Ferramentas de desenvolvimento
  - Homework personalizado
  - Recomendações de livros/filmes
- Chat interativo com IA

### 6. Baixar Relatório PDF

- Relatório completo com:
  - Análise DISC detalhada
  - Gráficos e visualizações
  - Mapa de competências
  - Top 5 profissões
  - Plano de desenvolvimento pessoal
  - Recursos recomendados

## 🌍 Idiomas Suportados

- 🇧🇷 Português (PT)
- 🇺🇸 Inglês (EN)
- 🇪🇸 Espanhol (ES)
- 🇫🇷 Francês (FR)
- 🇩🇪 Alemão (DE)
- 🇮🇹 Italiano (IT)
- 🇯🇵 Japonês (JA)
- 🇨🇳 Chinês (ZH)

Selecione o idioma no seletor no header da aplicação.

## 🎨 Design System

### Cores
- **Primária:** Azure Tiffany (#0D9488)
- **Secundária:** Cyan (#06B6D4)
- **Acentos:** Teal (#14B8A6), Verde (#10B981), Âmbar (#F59E0B)

### Tipografia
- **H1:** 4.5rem (72px)
- **H2:** 2rem (32px)
- **H3:** 1.6rem (25.6px)
- **Body:** 1rem (16px)

### Paleta DISC
- **D (Dominância):** Vermelho (#DC2626)
- **I (Influência):** Tiffany (#0D9488)
- **S (Estabilidade):** Esmeralda (#10B981)
- **C (Conformidade):** Âmbar (#F59E0B)

## 🔧 Tecnologias Utilizadas

### Frontend
- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Wouter** - Roteamento
- **shadcn/ui** - Componentes UI

### Build & Dev
- **Vite** - Build tool
- **pnpm** - Package manager

## 📊 Dados do Projeto

### 82 Perguntas DISC
- **Etapa 1 (Natural):** 24 perguntas
- **Etapa 2 (Adaptado):** 24 perguntas
- **Etapa 3 (Valores):** 18 perguntas
- **Etapa 4 (Psicológico):** 16 perguntas

### 30+ Profissões
Cada profissão inclui:
- Alinhamento com cada perfil DISC (D, I, S, C)
- Faixa salarial
- Nível de demanda
- Taxa de oportunidades remotas
- Habilidades principais
- Setores de atuação

### 10 Sessões de Mentoria
1. Autoconhecimento e Mapeamento de Valores
2. Desenvolvimento de Habilidades Profissionais
3. Comunicação Efetiva e Liderança
4. Gestão de Carreira e Networking
5. Resolução de Conflitos e Inteligência Emocional
6. Empreendedorismo e Inovação
7. Equilíbrio Vida-Trabalho e Bem-estar
8. Preparação para Entrevistas e Negociação
9. Adaptação a Mudanças e Resiliência
10. Plano de Ação e Próximos Passos

## 🚀 Roadmap Futuro

- [ ] Integração com APIs de vagas (Adzuna, JSearch, RemoteOK, etc)
- [ ] Sistema de autenticação (Login/Signup)
- [ ] Salvar resultados do usuário
- [ ] Integração com OpenAI API para mentoria com IA
- [ ] Geração de PDF real com ReportLab
- [ ] Dashboard de usuário
- [ ] Histórico de testes
- [ ] Compartilhamento de resultados
- [ ] Análise comparativa de perfis
- [ ] Integração com LinkedIn

## 📝 Modelo DISC

O modelo DISC avalia 4 dimensões principais de personalidade:

### D - Dominância
- Direto e decidido
- Focado em resultados
- Ambicioso e competitivo
- Gosta de desafios

### I - Influência
- Comunicativo e entusiasmado
- Focado em relacionamentos
- Criativo e carismático
- Gosta de ser aceito

### S - Estabilidade
- Paciente e confiável
- Focado em harmonia
- Leal e empático
- Gosta de segurança

### C - Conformidade
- Cuidadoso e preciso
- Focado em qualidade
- Analítico e meticuloso
- Gosta de excelência

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

Desenvolvido por **Leila Exito** - Criadora

## 📞 Contato

- GitHub: [@leilaexito-creator](https://github.com/leilaexito-creator)
- Email: leilaexito@example.com

## 🙏 Agradecimentos

- Modelo DISC por William Moulton Marston
- Comunidade React e TypeScript
- Tailwind CSS por excelente framework CSS
- shadcn/ui por componentes incríveis

## 📚 Recursos Adicionais

- [Modelo DISC - Wikipedia](https://pt.wikipedia.org/wiki/DISC)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**DISC+ YOU** - Descubra seu potencial e encontre sua carreira ideal! 🚀
