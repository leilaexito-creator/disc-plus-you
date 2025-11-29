import { useState } from "react";
import { Button } from "@/components/ui/button";
import "../styles/disc-dashboard.css";

// Dados do teste DISC (24 perguntas)
const perguntasDisc = [
  {
    id: 1,
    texto: "Você é mais:",
    opcoes: {
      D: "Direto e decisivo",
      I: "Entusiasta e comunicativo",
      S: "Paciente e estável",
      C: "Analítico e cuidadoso"
    }
  },
  {
    id: 2,
    texto: "Sob pressão, você tende a:",
    opcoes: {
      D: "Acelerar e buscar resultados",
      I: "Manter a calma e animar outros",
      S: "Permanecer consistente",
      C: "Focar em precisão"
    }
  },
  {
    id: 3,
    texto: "Seu estilo de liderança é:",
    opcoes: {
      D: "Diretivo e competitivo",
      I: "Inspirador e persuasivo",
      S: "Apoiador e colaborativo",
      C: "Estruturado e organizado"
    }
  },
  {
    id: 4,
    texto: "Em um projeto, você é:",
    opcoes: {
      D: "O líder que toma decisões",
      I: "O motivador do grupo",
      S: "O apoio confiável",
      C: "O garantidor da qualidade"
    }
  },
  {
    id: 5,
    texto: "Você se sente melhor quando:",
    opcoes: {
      D: "Alcança objetivos ambiciosos",
      I: "Conecta-se com pessoas",
      S: "Mantém harmonia no grupo",
      C: "Tudo está bem organizado"
    }
  },
  {
    id: 6,
    texto: "Sua comunicação é:",
    opcoes: {
      D: "Direta e objetiva",
      I: "Entusiasta e expressiva",
      S: "Atenciosa e empática",
      C: "Precisa e detalhada"
    }
  },
  {
    id: 7,
    texto: "Frente a mudanças, você:",
    opcoes: {
      D: "Adapta-se rapidamente",
      I: "Vê oportunidades",
      S: "Precisa de tempo",
      C: "Analisa cuidadosamente"
    }
  },
  {
    id: 8,
    texto: "Seu maior valor é:",
    opcoes: {
      D: "Alcançar resultados",
      I: "Inspirar pessoas",
      S: "Criar estabilidade",
      C: "Garantir qualidade"
    }
  },
  {
    id: 9,
    texto: "Em conflitos, você:",
    opcoes: {
      D: "Enfrenta diretamente",
      I: "Busca consenso",
      S: "Evita confronto",
      C: "Segue procedimentos"
    }
  },
  {
    id: 10,
    texto: "Você aprecia:",
    opcoes: {
      D: "Desafios e competição",
      I: "Reconhecimento e atenção",
      S: "Segurança e previsibilidade",
      C: "Ordem e eficiência"
    }
  },
  {
    id: 11,
    texto: "Sua maior fraqueza pode ser:",
    opcoes: {
      D: "Ser muito agressivo",
      I: "Falta de foco",
      S: "Resistência à mudança",
      C: "Paralisia por análise"
    }
  },
  {
    id: 12,
    texto: "Você trabalha melhor:",
    opcoes: {
      D: "De forma independente",
      I: "Em equipe animada",
      S: "Em ambiente estável",
      C: "Com processos claros"
    }
  },
  {
    id: 13,
    texto: "Seu hobby ideal é:",
    opcoes: {
      D: "Esportes competitivos",
      I: "Atividades sociais",
      S: "Hobbies relaxantes",
      C: "Aprender e estudar"
    }
  },
  {
    id: 14,
    texto: "Você motiva outros através de:",
    opcoes: {
      D: "Exemplo e resultados",
      I: "Entusiasmo e visão",
      S: "Apoio e lealdade",
      C: "Planejamento e estrutura"
    }
  },
  {
    id: 15,
    texto: "Seu ambiente de trabalho ideal tem:",
    opcoes: {
      D: "Desafios e autonomia",
      I: "Interação e reconhecimento",
      S: "Estabilidade e clareza",
      C: "Ordem e procedimentos"
    }
  },
  {
    id: 16,
    texto: "Você é conhecido por ser:",
    opcoes: {
      D: "Ambicioso e determinado",
      I: "Carismático e expressivo",
      S: "Confiável e leal",
      C: "Preciso e meticuloso"
    }
  },
  {
    id: 17,
    texto: "Quando enfrenta um problema, você:",
    opcoes: {
      D: "Age imediatamente",
      I: "Pede ajuda",
      S: "Pensa cuidadosamente",
      C: "Pesquisa a fundo"
    }
  },
  {
    id: 18,
    texto: "Sua visão de carreira é:",
    opcoes: {
      D: "Chegar ao topo",
      I: "Ser reconhecido",
      S: "Ter segurança",
      C: "Ser especialista"
    }
  },
  {
    id: 19,
    texto: "Você se sente frustrado quando:",
    opcoes: {
      D: "Não consegue vencer",
      I: "Fica isolado",
      S: "Há conflito",
      C: "Falta precisão"
    }
  },
  {
    id: 20,
    texto: "Sua abordagem com pessoas é:",
    opcoes: {
      D: "Desafiadora",
      I: "Amigável",
      S: "Acolhedora",
      C: "Profissional"
    }
  },
  {
    id: 21,
    texto: "Você aprende melhor:",
    opcoes: {
      D: "Fazendo",
      I: "Discutindo",
      S: "Observando",
      C: "Estudando"
    }
  },
  {
    id: 22,
    texto: "Seu maior medo é:",
    opcoes: {
      D: "Fracassar",
      I: "Ser ignorado",
      S: "Perder segurança",
      C: "Cometer erros"
    }
  },
  {
    id: 23,
    texto: "Você se vê como:",
    opcoes: {
      D: "Um líder nato",
      I: "Um influenciador",
      S: "Um apoiador",
      C: "Um especialista"
    }
  },
  {
    id: 24,
    texto: "Sua filosofia de vida é:",
    opcoes: {
      D: "Vencer sempre",
      I: "Aproveitar a vida",
      S: "Manter a paz",
      C: "Fazer certo"
    }
  }
];

// Profissões por perfil
const profissoesPorPerfil = {
  D: [
    { titulo: "CEO/Diretor Executivo", salario: "R$ 25.000 - R$ 80.000", demanda: "Alta" },
    { titulo: "Gerente de Vendas", salario: "R$ 6.000 - R$ 18.000", demanda: "Alta" },
    { titulo: "Empreendedor", salario: "Variável", demanda: "Alta" },
    { titulo: "Consultor Empresarial", salario: "R$ 8.000 - R$ 25.000", demanda: "Alta" },
    { titulo: "Gerente de Projetos", salario: "R$ 7.000 - R$ 15.000", demanda: "Alta" }
  ],
  I: [
    { titulo: "Gerente de Marketing", salario: "R$ 6.000 - R$ 15.000", demanda: "Alta" },
    { titulo: "Vendedor", salario: "R$ 3.000 - R$ 10.000", demanda: "Alta" },
    { titulo: "Produtor de Eventos", salario: "R$ 4.000 - R$ 12.000", demanda: "Média" },
    { titulo: "Relações Públicas", salario: "R$ 5.000 - R$ 14.000", demanda: "Alta" },
    { titulo: "Treinador Corporativo", salario: "R$ 5.000 - R$ 15.000", demanda: "Média" }
  ],
  S: [
    { titulo: "Recursos Humanos", salario: "R$ 4.000 - R$ 12.000", demanda: "Alta" },
    { titulo: "Assistente Administrativo", salario: "R$ 2.500 - R$ 5.000", demanda: "Alta" },
    { titulo: "Enfermeiro", salario: "R$ 3.000 - R$ 8.000", demanda: "Alta" },
    { titulo: "Professor", salario: "R$ 2.500 - R$ 7.000", demanda: "Alta" },
    { titulo: "Psicólogo", salario: "R$ 3.000 - R$ 10.000", demanda: "Alta" }
  ],
  C: [
    { titulo: "Analista de Sistemas", salario: "R$ 5.000 - R$ 15.000", demanda: "Muito Alta" },
    { titulo: "Contador", salario: "R$ 4.000 - R$ 12.000", demanda: "Alta" },
    { titulo: "Auditor", salario: "R$ 5.000 - R$ 14.000", demanda: "Alta" },
    { titulo: "Engenheiro de Software", salario: "R$ 8.000 - R$ 20.000", demanda: "Muito Alta" },
    { titulo: "Pesquisador", salario: "R$ 4.000 - R$ 12.000", demanda: "Média" }
  ]
};

// Sessões de coaching
const sessoesCooching = [
  {
    numero: 1,
    titulo: "Conhecendo Você - Estado Atual",
    objetivo: "Estabelecer rapport e mapear estado atual",
    ferramentas: ["Roda da Vida", "Linha do Tempo", "Rapport"]
  },
  {
    numero: 2,
    titulo: "Visão e Objetivos",
    objetivo: "Definir visão clara e objetivos SMART",
    ferramentas: ["Metas SMART", "Visão Futura"]
  },
  {
    numero: 3,
    titulo: "Análise SWOT Pessoal",
    objetivo: "Identificar forças, fraquezas, oportunidades e ameaças",
    ferramentas: ["SWOT Pessoal", "Matriz de Prioridades"]
  },
  {
    numero: 4,
    titulo: "Plano de Ação",
    objetivo: "Criar plano detalhado de ação",
    ferramentas: ["Plano de Ação", "Timeline"]
  },
  {
    numero: 5,
    titulo: "Desenvolvimento de Habilidades",
    objetivo: "Identificar e desenvolver habilidades críticas",
    ferramentas: ["Mapa de Habilidades", "Plano de Desenvolvimento"]
  },
  {
    numero: 6,
    titulo: "Relacionamentos e Networking",
    objetivo: "Fortalecer relacionamentos profissionais",
    ferramentas: ["Mapa de Relacionamentos", "Estratégia de Networking"]
  },
  {
    numero: 7,
    titulo: "Gestão de Tempo e Produtividade",
    objetivo: "Otimizar tempo e aumentar produtividade",
    ferramentas: ["Matriz de Eisenhower", "Planejamento Semanal"]
  },
  {
    numero: 8,
    titulo: "Inteligência Emocional",
    objetivo: "Desenvolver inteligência emocional",
    ferramentas: ["Teste de IE", "Plano de Desenvolvimento Emocional"]
  },
  {
    numero: 9,
    titulo: "Superando Obstáculos",
    objetivo: "Identificar e superar bloqueios",
    ferramentas: ["Análise de Obstáculos", "Estratégias de Superação"]
  },
  {
    numero: 10,
    titulo: "Consolidação e Continuidade",
    objetivo: "Consolidar aprendizados e planejar continuidade",
    ferramentas: ["Revisão de Progresso", "Plano de Continuidade"]
  }
];

export default function Home() {
  const [currentTab, setCurrentTab] = useState("inicio");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [perfil, setPerfil] = useState<string | null>(null);
  const [sessaoAtual, setSessaoAtual] = useState(1);
  const [mensagensChat, setMensagensChat] = useState<Array<{role: string, conteudo: string}>>([
    { role: "bot", conteudo: "Olá! Bem-vindo à Mentoria com IA. Estou aqui para ajudá-lo em sua jornada de desenvolvimento pessoal. Como posso ajudá-lo hoje?" }
  ]);

  const perfisDescricao = {
    D: "Dominante - Orientado para resultados, decisivo e competitivo",
    I: "Influente - Comunicativo, entusiasta e persuasivo",
    S: "Estável - Paciente, leal e consistente",
    C: "Conforme - Analítico, preciso e organizado"
  };

  const calcularPerfil = () => {
    const contagem = { D: 0, I: 0, S: 0, C: 0 };
    Object.values(respostas).forEach((p: string) => {
      contagem[p as keyof typeof contagem]++;
    });

    const max = Math.max(...Object.values(contagem));
    const predominante = Object.keys(contagem).find(
      (k) => contagem[k as keyof typeof contagem] === max
    );

    setPerfil(predominante || "D");
    setCurrentTab("resultado");
  };

  const enviarMensagem = (msg: string) => {
    if (!msg.trim()) return;

    setMensagensChat([...mensagensChat, { role: "user", conteudo: msg }]);

    setTimeout(() => {
      const respostas = [
        "Excelente observação! Vamos trabalhar nisso juntos.",
        "Entendo perfeitamente. Como você se sente sobre isso?",
        "Que interessante! Vamos explorar mais essa ideia.",
        "Você está no caminho certo. Qual é o próximo passo?",
        "Ótimo progresso! Continue assim!"
      ];
      const resposta = respostas[Math.floor(Math.random() * respostas.length)];
      setMensagensChat(prev => [...prev, { role: "bot", conteudo: resposta }]);
    }, 500);
  };

  return (
    <div className="disc-container">
      {/* SIDEBAR ESQUERDA */}
      <aside className="disc-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🎯</span>
            <h1>DISC+ YOU</h1>
          </div>
          <p className="subtitle">Dashboard Completo</p>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${currentTab === "inicio" ? "active" : ""}`}
            onClick={() => setCurrentTab("inicio")}
          >
            <span className="icon">🏠</span>
            <span className="label">Início</span>
          </button>
          {isLoggedIn && (
            <>
              <button
                className={`nav-item ${currentTab === "teste" ? "active" : ""}`}
                onClick={() => setCurrentTab("teste")}
              >
                <span className="icon">📝</span>
                <span className="label">Fazer Teste</span>
              </button>
              <button
                className={`nav-item ${currentTab === "resultado" ? "active" : ""}`}
                onClick={() => setCurrentTab("resultado")}
              >
                <span className="icon">📊</span>
                <span className="label">Resultado</span>
              </button>
              <button
                className={`nav-item ${currentTab === "profissoes" ? "active" : ""}`}
                onClick={() => setCurrentTab("profissoes")}
              >
                <span className="icon">🎯</span>
                <span className="label">Profissões</span>
              </button>
              <button
                className={`nav-item ${currentTab === "vagas" ? "active" : ""}`}
                onClick={() => setCurrentTab("vagas")}
              >
                <span className="icon">💼</span>
                <span className="label">Buscar Vagas</span>
              </button>
              <button
                className={`nav-item ${currentTab === "mentoria" ? "active" : ""}`}
                onClick={() => setCurrentTab("mentoria")}
              >
                <span className="icon">🤖</span>
                <span className="label">Mentoria IA</span>
              </button>
            </>
          )}
        </nav>

        <div className="sidebar-footer">
          {isLoggedIn && (
            <button className="logout-btn" onClick={() => {
              setIsLoggedIn(false);
              setPerfil(null);
              setRespostas({});
              setCurrentTab("inicio");
            }}>
              Sair
            </button>
          )}
          <p>© 2025 DISC+ YOU</p>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="disc-main">
        {/* LOGIN/CADASTRO */}
        {!isLoggedIn && (
          <div className="auth-panel">
            {!showLogin && !showSignup ? (
              <div className="auth-buttons">
                <button className="auth-btn login-btn" onClick={() => setShowLogin(true)}>
                  Entrar
                </button>
                <button className="auth-btn signup-btn" onClick={() => setShowSignup(true)}>
                  Cadastre-se
                </button>
              </div>
            ) : showLogin ? (
              <form onSubmit={(e) => {
                e.preventDefault();
                setIsLoggedIn(true);
                setShowLogin(false);
              }} className="auth-form">
                <h3>Entrar</h3>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit" className="submit-btn">Entrar</button>
                <button type="button" className="back-btn" onClick={() => setShowLogin(false)}>Voltar</button>
              </form>
            ) : (
              <form onSubmit={(e) => {
                e.preventDefault();
                setIsLoggedIn(true);
                setShowSignup(false);
              }} className="auth-form">
                <h3>Cadastro</h3>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit" className="submit-btn">Cadastrar</button>
                <button type="button" className="back-btn" onClick={() => setShowSignup(false)}>Voltar</button>
              </form>
            )}
          </div>
        )}

        {/* ABA: INÍCIO */}
        {currentTab === "inicio" && (
          <section className="tab-content">
            <div className="content-header">
              <h2>Bem-vindo ao DISC+ YOU</h2>
              <p>A plataforma mais completa de avaliação comportamental com Inteligência Artificial</p>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">📝</div>
                <h3>Teste DISC</h3>
                <p>24 perguntas para descobrir seu perfil comportamental</p>
                <button className="btn btn-primary" onClick={() => {
                  if (!isLoggedIn) setShowLogin(true);
                  else setCurrentTab("teste");
                }}>
                  Começar →
                </button>
              </div>
              <div className="card">
                <div className="card-icon">💼</div>
                <h3>Busca de Vagas</h3>
                <p>Encontre oportunidades perfeitas para seu perfil</p>
                <button className="btn btn-primary" onClick={() => {
                  if (!isLoggedIn) setShowLogin(true);
                  else setCurrentTab("vagas");
                }}>
                  Buscar →
                </button>
              </div>
              <div className="card">
                <div className="card-icon">🤖</div>
                <h3>Mentoria com IA</h3>
                <p>10 sessões de coaching personalizado</p>
                <button className="btn btn-primary" onClick={() => {
                  if (!isLoggedIn) setShowLogin(true);
                  else setCurrentTab("mentoria");
                }}>
                  Iniciar →
                </button>
              </div>
              <div className="card">
                <div className="card-icon">🎯</div>
                <h3>Profissões</h3>
                <p>Recomendações baseadas em seu perfil</p>
                <button className="btn btn-primary" onClick={() => {
                  if (!isLoggedIn) setShowLogin(true);
                  else setCurrentTab("profissoes");
                }}>
                  Explorar →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ABA: TESTE */}
        {currentTab === "teste" && isLoggedIn && (
          <section className="tab-content">
            <div className="content-header">
              <h2>Teste DISC+ YOU</h2>
              <p>Responda as 24 perguntas para descobrir seu perfil comportamental</p>
            </div>
            <div className="teste-container">
              {perguntasDisc.map((pergunta) => (
                <div key={pergunta.id} className="pergunta">
                  <h4>{pergunta.id}. {pergunta.texto}</h4>
                  <div className="opcoes">
                    {Object.entries(pergunta.opcoes).map(([perfil, texto]) => (
                      <button
                        key={perfil}
                        className={`opcao ${respostas[pergunta.id] === perfil ? "selected" : ""}`}
                        onClick={() => setRespostas({ ...respostas, [pergunta.id]: perfil })}
                      >
                        {texto}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button className="btn btn-success" onClick={calcularPerfil}>
                Calcular Meu Perfil →
              </button>
            </div>
          </section>
        )}

        {/* ABA: RESULTADO */}
        {currentTab === "resultado" && perfil && isLoggedIn && (
          <section className="tab-content">
            <div className="content-header">
              <h2>Seu Perfil DISC</h2>
              <p>Análise completa do seu perfil comportamental</p>
            </div>
            <div className="resultado-card">
              <h3>Perfil Predominante</h3>
              <div className="perfil-principal">
                <h2>{perfisDescricao[perfil as keyof typeof perfisDescricao]}</h2>
              </div>
            </div>
          </section>
        )}

        {/* ABA: PROFISSÕES */}
        {currentTab === "profissoes" && perfil && isLoggedIn && (
          <section className="tab-content">
            <div className="content-header">
              <h2>Profissões Recomendadas</h2>
              <p>TOP 5 carreiras ideais para seu perfil</p>
            </div>
            <div className="profissoes-container">
              {profissoesPorPerfil[perfil as keyof typeof profissoesPorPerfil]?.map((prof, index) => (
                <div key={index} className="profissao-card">
                  <div className="ranking">{index + 1}º</div>
                  <h4>{prof.titulo}</h4>
                  <p className="salario">💰 {prof.salario}</p>
                  <p className="demanda">📈 Demanda: {prof.demanda}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABA: VAGAS */}
        {currentTab === "vagas" && isLoggedIn && (
          <section className="tab-content">
            <div className="content-header">
              <h2>💼 Busca Inteligente de Vagas</h2>
              <p>Encontre oportunidades com DISC Match Score</p>
            </div>
            <div className="vagas-container">
              <div className="filtros">
                <input type="text" placeholder="Digite uma profissão..." className="input-field" />
                <button className="btn btn-primary">🔍 Buscar</button>
              </div>
              <div className="vagas-resultado">
                <p style={{textAlign: 'center', width: '100%'}}>Digite uma profissão para buscar vagas</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA: MENTORIA */}
        {currentTab === "mentoria" && isLoggedIn && (
          <section className="tab-content">
            <div className="content-header">
              <h2>🤖 Mentoria Individual com IA</h2>
              <p>Sessão {sessaoAtual} de 10: {sessoesCooching[sessaoAtual - 1]?.titulo}</p>
            </div>
            <div className="mentoria-container">
              <div className="sessao-info">
                <h4>Objetivo desta sessão:</h4>
                <p>{sessoesCooching[sessaoAtual - 1]?.objetivo}</p>
                <h4>Ferramentas utilizadas:</h4>
                <div className="ferramentas">
                  {sessoesCooching[sessaoAtual - 1]?.ferramentas.map((f, i) => (
                    <span key={i} className="ferramenta-badge">{f}</span>
                  ))}
                </div>
              </div>
              <div className="chat-box">
                <div className="chat-messages">
                  {mensagensChat.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                      <p>{msg.conteudo}</p>
                    </div>
                  ))}
                </div>
                <div className="chat-input">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        const input = e.target as HTMLInputElement;
                        enviarMensagem(input.value);
                        input.value = "";
                      }
                    }}
                  />
                  <button className="btn btn-small">Enviar</button>
                </div>
              </div>
              <div className="sessao-nav">
                <button
                  className="btn btn-small"
                  onClick={() => setSessaoAtual(Math.max(1, sessaoAtual - 1))}
                  disabled={sessaoAtual === 1}
                >
                  ← Anterior
                </button>
                <span>{sessaoAtual} / 10</span>
                <button
                  className="btn btn-small"
                  onClick={() => setSessaoAtual(Math.min(10, sessaoAtual + 1))}
                  disabled={sessaoAtual === 10}
                >
                  Próxima →
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
