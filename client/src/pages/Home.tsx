import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-teal-900 mb-6">
          Descubra Seu Potencial com DISC+ YOU
        </h1>
        <p className="text-2xl text-teal-700 mb-8 max-w-3xl mx-auto">
          Teste de personalidade completo + Recomendações de carreira + Mentoria com IA + 1000+ vagas globais
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => window.location.href = '/test'}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-bold"
          >
            🚀 Começar Teste Agora
          </Button>
          <Button
            onClick={() => window.location.href = '/report'}
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-bold"
          >
            📄 Ver Exemplo de Relatório
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-teal-900 text-center mb-12">
          Tudo que você precisa para sua carreira
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <Card className="p-6 border-2 border-teal-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-teal-900 mb-3">82 Perguntas DISC</h3>
            <p className="text-teal-700">
              Teste completo em 4 etapas: Natural, Adaptado, Valores e Psicológico
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-6 border-2 border-teal-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-teal-900 mb-3">Top 5 Profissões</h3>
            <p className="text-teal-700">
              Recomendações 100% alinhadas com seu perfil DISC
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-6 border-2 border-teal-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-teal-900 mb-3">1000+ Vagas</h3>
            <p className="text-teal-700">
              Busca global de vagas com foco em trabalho remoto
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="p-6 border-2 border-teal-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-teal-900 mb-3">Mentoria com IA</h3>
            <p className="text-teal-700">
              10 sessões de coaching estruturadas com IA
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-900 text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { number: 1, title: 'Faça o Teste', desc: '82 perguntas em 4 etapas' },
              { number: 2, title: 'Receba Análise', desc: 'Perfil DISC completo' },
              { number: 3, title: 'Explore Profissões', desc: 'Top 5 recomendadas' },
              { number: 4, title: 'Busque Vagas', desc: '1000+ oportunidades' },
              { number: 5, title: 'Inicie Mentoria', desc: '10 sessões com IA' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-teal-900 mb-2">{step.title}</h3>
                <p className="text-teal-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISC Profiles */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-teal-900 text-center mb-12">
          Entenda os 4 Perfis DISC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              letter: 'D',
              name: 'Dominância',
              color: 'bg-red-500',
              traits: ['Direto', 'Decidido', 'Ambicioso', 'Competitivo']
            },
            {
              letter: 'I',
              name: 'Influência',
              color: 'bg-teal-500',
              traits: ['Comunicativo', 'Entusiasmado', 'Criativo', 'Carismático']
            },
            {
              letter: 'S',
              name: 'Estabilidade',
              color: 'bg-emerald-500',
              traits: ['Paciente', 'Confiável', 'Leal', 'Empático']
            },
            {
              letter: 'C',
              name: 'Conformidade',
              color: 'bg-amber-500',
              traits: ['Preciso', 'Analítico', 'Meticuloso', 'Inteligente']
            }
          ].map((profile) => (
            <Card key={profile.letter} className="p-6 border-2 border-teal-200">
              <div className={`w-16 h-16 ${profile.color} rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4`}>
                {profile.letter}
              </div>
              <h3 className="text-2xl font-bold text-teal-900 mb-3">{profile.name}</h3>
              <ul className="space-y-2">
                {profile.traits.map((trait, i) => (
                  <li key={i} className="text-teal-700">✓ {trait}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-teal-600 text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Benefícios de Usar DISC+ YOU
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Autoconhecimento', desc: 'Entenda seus pontos fortes e áreas de desenvolvimento' },
              { icon: '💼', title: 'Carreira Alinhada', desc: 'Encontre profissões que combinam com você' },
              { icon: '📈', title: 'Desenvolvimento', desc: 'Plano personalizado de crescimento profissional' },
              { icon: '🤝', title: 'Networking', desc: 'Conecte-se com profissionais da sua área' },
              { icon: '🌍', title: 'Oportunidades', desc: 'Acesso a 1000+ vagas globais' },
              { icon: '🚀', title: 'Mentoria IA', desc: '10 sessões de coaching estruturadas' }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-teal-100">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-teal-900 mb-6">
          Pronto para descobrir seu potencial?
        </h2>
        <p className="text-xl text-teal-700 mb-8">
          Comece o teste DISC agora e receba análise completa em minutos
        </p>
        <Button
          onClick={() => window.location.href = '/test'}
          className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 text-xl font-bold"
        >
          🚀 Começar Teste Agora
        </Button>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '82', label: 'Perguntas DISC' },
              { number: '30+', label: 'Profissões' },
              { number: '1000+', label: 'Vagas Globais' },
              { number: '8', label: 'Idiomas' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <p className="text-teal-900 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
