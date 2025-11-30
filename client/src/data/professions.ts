export interface Profession {
  id: string;
  name: string;
  description: string;
  alignment: {
    D: number; // 0-100
    I: number;
    S: number;
    C: number;
  };
  salaryRange: string;
  demandLevel: 'Alta' | 'Média' | 'Baixa';
  skills: string[];
  industries: string[];
  remoteOpportunity: number; // 0-100 (% of remote jobs)
}

export const professions: Profession[] = [
  // Top D (Dominância) Professions
  {
    id: 'ceo',
    name: 'CEO / Diretor Executivo',
    description: 'Lidera a empresa com visão estratégica e tomada de decisões rápida.',
    alignment: { D: 95, I: 60, S: 40, C: 70 },
    salaryRange: 'R$ 150.000 - R$ 500.000+',
    demandLevel: 'Alta',
    skills: ['Liderança', 'Estratégia', 'Decisão rápida', 'Visão de negócio'],
    industries: ['Tecnologia', 'Finanças', 'Consultoria', 'Manufatura'],
    remoteOpportunity: 30
  },
  {
    id: 'sales-director',
    name: 'Diretor de Vendas',
    description: 'Lidera equipes de vendas com foco em resultados e crescimento.',
    alignment: { D: 90, I: 85, S: 50, C: 60 },
    salaryRange: 'R$ 80.000 - R$ 300.000',
    demandLevel: 'Alta',
    skills: ['Liderança', 'Negociação', 'Comunicação', 'Motivação'],
    industries: ['Vendas', 'Tecnologia', 'Consultoria', 'Financeiro'],
    remoteOpportunity: 40
  },
  {
    id: 'project-manager',
    name: 'Gerente de Projeto',
    description: 'Coordena projetos complexos com foco em prazos e resultados.',
    alignment: { D: 85, I: 65, S: 70, C: 80 },
    salaryRange: 'R$ 60.000 - R$ 150.000',
    demandLevel: 'Alta',
    skills: ['Planejamento', 'Liderança', 'Comunicação', 'Resolução de problemas'],
    industries: ['Tecnologia', 'Construção', 'Consultoria', 'Manufatura'],
    remoteOpportunity: 70
  },
  {
    id: 'entrepreneur',
    name: 'Empreendedor',
    description: 'Cria e desenvolve novos negócios com visão e determinação.',
    alignment: { D: 95, I: 80, S: 40, C: 60 },
    salaryRange: 'Variável',
    demandLevel: 'Média',
    skills: ['Visão', 'Risco', 'Inovação', 'Persistência'],
    industries: ['Todas'],
    remoteOpportunity: 80
  },

  // Top I (Influência) Professions
  {
    id: 'marketer',
    name: 'Gerente de Marketing',
    description: 'Cria estratégias criativas para engajar e influenciar audiências.',
    alignment: { D: 70, I: 95, S: 50, C: 65 },
    salaryRange: 'R$ 50.000 - R$ 150.000',
    demandLevel: 'Alta',
    skills: ['Criatividade', 'Comunicação', 'Estratégia', 'Análise'],
    industries: ['Marketing', 'Tecnologia', 'Varejo', 'Agências'],
    remoteOpportunity: 60
  },
  {
    id: 'public-speaker',
    name: 'Palestrante / Comunicador',
    description: 'Compartilha conhecimento e inspira audiências através da fala.',
    alignment: { D: 70, I: 95, S: 40, C: 50 },
    salaryRange: 'R$ 30.000 - R$ 200.000+',
    demandLevel: 'Média',
    skills: ['Comunicação', 'Carisma', 'Conhecimento', 'Presença'],
    industries: ['Educação', 'Consultoria', 'Tecnologia', 'Eventos'],
    remoteOpportunity: 50
  },
  {
    id: 'event-manager',
    name: 'Gerente de Eventos',
    description: 'Organiza e coordena eventos que conectam e engajam pessoas.',
    alignment: { D: 75, I: 90, S: 65, C: 70 },
    salaryRange: 'R$ 40.000 - R$ 120.000',
    demandLevel: 'Média',
    skills: ['Organização', 'Comunicação', 'Criatividade', 'Coordenação'],
    industries: ['Eventos', 'Turismo', 'Consultoria', 'Corporativo'],
    remoteOpportunity: 30
  },
  {
    id: 'hr-manager',
    name: 'Gerente de Recursos Humanos',
    description: 'Desenvolve pessoas e cria cultura organizacional positiva.',
    alignment: { D: 65, I: 85, S: 80, C: 75 },
    salaryRange: 'R$ 50.000 - R$ 150.000',
    demandLevel: 'Alta',
    skills: ['Comunicação', 'Empatia', 'Liderança', 'Gestão'],
    industries: ['Corporativo', 'Tecnologia', 'Consultoria', 'Financeiro'],
    remoteOpportunity: 60
  },

  // Top S (Estabilidade) Professions
  {
    id: 'nurse',
    name: 'Enfermeiro',
    description: 'Cuida de pacientes com empatia e dedicação.',
    alignment: { D: 40, I: 60, S: 95, C: 80 },
    salaryRange: 'R$ 30.000 - R$ 80.000',
    demandLevel: 'Alta',
    skills: ['Empatia', 'Cuidado', 'Comunicação', 'Técnica'],
    industries: ['Saúde', 'Hospitais', 'Clínicas'],
    remoteOpportunity: 5
  },
  {
    id: 'teacher',
    name: 'Professor',
    description: 'Educa e desenvolve alunos com paciência e dedicação.',
    alignment: { D: 50, I: 75, S: 90, C: 80 },
    salaryRange: 'R$ 25.000 - R$ 80.000',
    demandLevel: 'Alta',
    skills: ['Paciência', 'Comunicação', 'Empatia', 'Conhecimento'],
    industries: ['Educação', 'Corporativo', 'Online'],
    remoteOpportunity: 40
  },
  {
    id: 'social-worker',
    name: 'Assistente Social',
    description: 'Ajuda comunidades com empatia e comprometimento.',
    alignment: { D: 45, I: 70, S: 95, C: 75 },
    salaryRange: 'R$ 30.000 - R$ 70.000',
    demandLevel: 'Média',
    skills: ['Empatia', 'Comunicação', 'Análise', 'Dedicação'],
    industries: ['Social', 'Saúde', 'Governo', 'ONGs'],
    remoteOpportunity: 20
  },
  {
    id: 'customer-service',
    name: 'Gerente de Atendimento ao Cliente',
    description: 'Garante satisfação de clientes com suporte consistente.',
    alignment: { D: 60, I: 80, S: 85, C: 75 },
    salaryRange: 'R$ 35.000 - R$ 100.000',
    demandLevel: 'Alta',
    skills: ['Empatia', 'Comunicação', 'Paciência', 'Resolução'],
    industries: ['Tecnologia', 'Varejo', 'Financeiro', 'Telecomunicações'],
    remoteOpportunity: 70
  },

  // Top C (Conformidade) Professions
  {
    id: 'accountant',
    name: 'Contador',
    description: 'Gerencia finanças com precisão e conformidade.',
    alignment: { D: 50, I: 40, S: 70, C: 95 },
    salaryRange: 'R$ 40.000 - R$ 150.000',
    demandLevel: 'Alta',
    skills: ['Análise', 'Precisão', 'Conformidade', 'Atenção'],
    industries: ['Financeiro', 'Corporativo', 'Consultoria', 'Governo'],
    remoteOpportunity: 80
  },
  {
    id: 'auditor',
    name: 'Auditor',
    description: 'Verifica conformidade e qualidade com rigor.',
    alignment: { D: 55, I: 35, S: 65, C: 95 },
    salaryRange: 'R$ 50.000 - R$ 180.000',
    demandLevel: 'Alta',
    skills: ['Análise', 'Atenção', 'Conformidade', 'Investigação'],
    industries: ['Financeiro', 'Corporativo', 'Governo', 'Consultoria'],
    remoteOpportunity: 70
  },
  {
    id: 'qa-engineer',
    name: 'Engenheiro de QA (Qualidade)',
    description: 'Garante qualidade de software com testes rigorosos.',
    alignment: { D: 60, I: 40, S: 75, C: 95 },
    salaryRange: 'R$ 50.000 - R$ 150.000',
    demandLevel: 'Alta',
    skills: ['Análise', 'Atenção', 'Testes', 'Documentação'],
    industries: ['Tecnologia', 'Software', 'Startups'],
    remoteOpportunity: 85
  },
  {
    id: 'data-analyst',
    name: 'Analista de Dados',
    description: 'Analisa dados com precisão para gerar insights.',
    alignment: { D: 65, I: 45, S: 60, C: 90 },
    salaryRange: 'R$ 50.000 - R$ 150.000',
    demandLevel: 'Alta',
    skills: ['Análise', 'Programação', 'Atenção', 'Visualização'],
    industries: ['Tecnologia', 'Financeiro', 'Corporativo', 'Consultoria'],
    remoteOpportunity: 80
  },

  // Balanced Profiles
  {
    id: 'consultant',
    name: 'Consultor de Negócios',
    description: 'Resolve problemas complexos com análise e comunicação.',
    alignment: { D: 80, I: 75, S: 60, C: 85 },
    salaryRange: 'R$ 60.000 - R$ 200.000',
    demandLevel: 'Alta',
    skills: ['Análise', 'Comunicação', 'Estratégia', 'Liderança'],
    industries: ['Consultoria', 'Tecnologia', 'Financeiro', 'Corporativo'],
    remoteOpportunity: 70
  },
  {
    id: 'product-manager',
    name: 'Gerente de Produto',
    description: 'Desenvolve produtos que resolvem problemas reais.',
    alignment: { D: 80, I: 70, S: 65, C: 80 },
    salaryRange: 'R$ 70.000 - R$ 180.000',
    demandLevel: 'Alta',
    skills: ['Estratégia', 'Comunicação', 'Análise', 'Liderança'],
    industries: ['Tecnologia', 'Startups', 'Corporativo'],
    remoteOpportunity: 75
  },
  {
    id: 'architect',
    name: 'Arquiteto de Software',
    description: 'Desenha soluções técnicas escaláveis e robustas.',
    alignment: { D: 75, I: 50, S: 70, C: 90 },
    salaryRange: 'R$ 80.000 - R$ 200.000',
    demandLevel: 'Alta',
    skills: ['Arquitetura', 'Programação', 'Análise', 'Liderança'],
    industries: ['Tecnologia', 'Startups', 'Corporativo'],
    remoteOpportunity: 85
  },
  {
    id: 'lawyer',
    name: 'Advogado',
    description: 'Representa clientes com análise jurídica precisa.',
    alignment: { D: 75, I: 60, S: 65, C: 90 },
    salaryRange: 'R$ 50.000 - R$ 300.000+',
    demandLevel: 'Média',
    skills: ['Análise', 'Comunicação', 'Pesquisa', 'Argumentação'],
    industries: ['Jurídico', 'Corporativo', 'Governo', 'Consultoria'],
    remoteOpportunity: 60
  }
];

export function getTopProfessions(
  profile: Record<string, number>,
  count: number = 5
): Profession[] {
  return professions
    .map(prof => {
      const alignmentScore =
        (prof.alignment.D * (profile.D || 0) +
          prof.alignment.I * (profile.I || 0) +
          prof.alignment.S * (profile.S || 0) +
          prof.alignment.C * (profile.C || 0)) / 100;
      return { ...prof, alignmentScore };
    })
    .sort((a, b) => (b.alignmentScore || 0) - (a.alignmentScore || 0))
    .slice(0, count);
}
