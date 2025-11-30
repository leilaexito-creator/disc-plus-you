import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface CoachingSession {
  number: number;
  title: string;
  objective: string;
  tools: string[];
  homework: string;
  recommendations: string[];
  completed: boolean;
}

const COACHING_SESSIONS: CoachingSession[] = [
  {
    number: 1,
    title: 'Autoconhecimento e Mapeamento de Valores',
    objective: 'Entender seu perfil DISC profundamente e alinhar com seus valores',
    tools: ['Wheel of Life', 'Mapa de Valores', 'Análise SWOT'],
    homework: 'Escrever 3 objetivos de carreira para os próximos 5 anos',
    recommendations: ['Livro: "Mindset" - Carol Dweck', 'Filme: "A Rede Social"'],
    completed: false
  },
  {
    number: 2,
    title: 'Desenvolvimento de Habilidades Profissionais',
    objective: 'Identificar gaps de habilidades e criar plano de desenvolvimento',
    tools: ['Skills Matrix', 'Gap Analysis', 'Learning Plan'],
    homework: 'Escolher 3 habilidades para desenvolver e criar timeline',
    recommendations: ['Livro: "Hábitos Atômicos" - James Clear', 'Curso: LinkedIn Learning'],
    completed: false
  },
  {
    number: 3,
    title: 'Comunicação Efetiva e Liderança',
    objective: 'Melhorar habilidades de comunicação e liderança',
    tools: ['Communication Audit', 'Feedback 360', 'Leadership Assessment'],
    homework: 'Praticar apresentação e receber feedback',
    recommendations: ['Livro: "Comunicação Não-Violenta" - Marshall Rosenberg', 'TED Talk: Simon Sinek'],
    completed: false
  },
  {
    number: 4,
    title: 'Gestão de Carreira e Networking',
    objective: 'Estratégia de carreira e construção de rede profissional',
    tools: ['Career Timeline', 'Networking Plan', 'Personal Branding'],
    homework: 'Conectar com 10 profissionais da sua área',
    recommendations: ['Livro: "Nunca Coma Sozinho" - Keith Ferrazzi', 'LinkedIn Profile Optimization'],
    completed: false
  },
  {
    number: 5,
    title: 'Resolução de Conflitos e Inteligência Emocional',
    objective: 'Desenvolver inteligência emocional e habilidades de resolução de conflitos',
    tools: ['Emotional Intelligence Assessment', 'Conflict Resolution Framework'],
    homework: 'Aplicar técnicas de resolução em um conflito real',
    recommendations: ['Livro: "Inteligência Emocional" - Daniel Goleman', 'Meditação Mindfulness'],
    completed: false
  },
  {
    number: 6,
    title: 'Empreendedorismo e Inovação',
    objective: 'Explorar oportunidades de empreendedorismo e inovação',
    tools: ['Business Model Canvas', 'Lean Startup', 'Innovation Workshop'],
    homework: 'Desenvolver ideia de negócio ou projeto inovador',
    recommendations: ['Livro: "A Startup Enxuta" - Eric Ries', 'Documentário: "The Founder"'],
    completed: false
  },
  {
    number: 7,
    title: 'Equilíbrio Vida-Trabalho e Bem-estar',
    objective: 'Criar estratégia de equilíbrio e bem-estar pessoal',
    tools: ['Work-Life Balance Assessment', 'Wellness Plan', 'Time Management'],
    homework: 'Implementar 3 práticas de bem-estar por 2 semanas',
    recommendations: ['Livro: "O Poder do Hábito" - Charles Duhigg', 'App: Headspace'],
    completed: false
  },
  {
    number: 8,
    title: 'Preparação para Entrevistas e Negociação',
    objective: 'Técnicas de entrevista e negociação salarial',
    tools: ['Interview Preparation', 'Salary Negotiation', 'Mock Interview'],
    homework: 'Fazer mock interview e praticar respostas',
    recommendations: ['Livro: "Nunca Divida a Diferença" - Chris Voss', 'YouTube: Interview Tips'],
    completed: false
  },
  {
    number: 9,
    title: 'Adaptação a Mudanças e Resiliência',
    objective: 'Desenvolver resiliência e capacidade de adaptação',
    tools: ['Change Management', 'Resilience Building', 'Scenario Planning'],
    homework: 'Refletir sobre mudanças passadas e aprendizados',
    recommendations: ['Livro: "Antifragile" - Nassim Taleb', 'Podcast: TED Talks Daily'],
    completed: false
  },
  {
    number: 10,
    title: 'Plano de Ação e Próximos Passos',
    objective: 'Consolidar aprendizados e criar plano de ação concreto',
    tools: ['Action Plan', 'Goal Setting', 'Accountability System'],
    homework: 'Implementar plano de ação e revisar mensalmente',
    recommendations: ['Livro: "Objetivos Radicais" - John Doerr', 'Mentoria Contínua'],
    completed: false
  }
];

export default function AiCoaching() {
  const [currentSession, setCurrentSession] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const session = COACHING_SESSIONS[currentSession];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Ótima pergunta! Na sessão "${session.title}", estamos focando em ${session.objective.toLowerCase()}. 

Baseado no que você compartilhou, aqui estão algumas sugestões:

1. **Ação Imediata**: Comece com uma das ferramentas que mencionei - a ${session.tools[0]} é excelente para começar.

2. **Próximos Passos**: Dedique tempo para trabalhar no seu homework: "${session.homework}"

3. **Recursos**: Recomendo começar com "${session.recommendations[0]}" - vai te dar uma base sólida.

Como você se sente em relação a isso? Tem alguma dúvida específica?`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleNextSession = () => {
    if (currentSession < COACHING_SESSIONS.length - 1) {
      setCurrentSession(currentSession + 1);
      setMessages([]);
    }
  };

  const handlePreviousSession = () => {
    if (currentSession > 0) {
      setCurrentSession(currentSession - 1);
      setMessages([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-teal-900 mb-4">Mentoria com IA</h1>
          <p className="text-xl text-teal-700">10 Sessões de Coaching Estruturadas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Session List */}
          <div className="lg:col-span-1">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {COACHING_SESSIONS.map((s, index) => (
                <button
                  key={s.number}
                  onClick={() => {
                    setCurrentSession(index);
                    setMessages([]);
                  }}
                  className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                    currentSession === index
                      ? 'border-teal-600 bg-teal-100'
                      : 'border-teal-200 bg-white hover:border-teal-400'
                  }`}
                >
                  <div className="text-sm font-bold text-teal-900">Sessão {s.number}</div>
                  <div className="text-xs text-teal-600 mt-1">{s.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Session Info */}
            <Card className="p-6 border-2 border-teal-200">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-teal-900 mb-2">
                  Sessão {session.number}: {session.title}
                </h2>
                <p className="text-lg text-teal-700">{session.objective}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-teal-900 mb-2">Ferramentas</h4>
                  <ul className="space-y-1">
                    {session.tools.map((tool, i) => (
                      <li key={i} className="text-sm text-teal-700">• {tool}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-teal-900 mb-2">Recomendações</h4>
                  <ul className="space-y-1">
                    {session.recommendations.map((rec, i) => (
                      <li key={i} className="text-sm text-teal-700">• {rec}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-bold text-amber-900 mb-2">📝 Homework</h4>
                <p className="text-amber-800">{session.homework}</p>
              </div>
            </Card>

            {/* Chat Area */}
            <Card className="p-6 border-2 border-teal-200 flex flex-col h-96">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.length === 0 && (
                  <div className="flex items-center justify-center h-full text-teal-500">
                    <p className="text-center">
                      Olá! Sou seu coach de IA. Estou aqui para ajudar você nesta sessão.
                      <br />
                      <br />
                      Faça perguntas, compartilhe desafios ou peça orientação!
                    </p>
                  </div>
                )}
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-teal-600 text-white'
                          : 'bg-teal-100 text-teal-900'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-teal-100 text-teal-900 px-4 py-2 rounded-lg">
                      Digitando...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 px-4 py-2 border-2 border-teal-200 rounded-lg focus:border-teal-600 focus:outline-none"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={loading || !inputValue.trim()}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6"
                >
                  Enviar
                </Button>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex gap-4">
              <Button
                onClick={handlePreviousSession}
                disabled={currentSession === 0}
                variant="outline"
                className="flex-1 border-teal-300 text-teal-700 hover:bg-teal-50"
              >
                ← Sessão Anterior
              </Button>
              <Button
                onClick={handleNextSession}
                disabled={currentSession === COACHING_SESSIONS.length - 1}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Próxima Sessão →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
