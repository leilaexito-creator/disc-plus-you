import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { professions, Profession } from '@/data/professions';

interface ProfessionWithScore extends Profession {
  alignmentScore?: number;
}

export default function Professions() {
  const [topProfessions, setTopProfessions] = useState<ProfessionWithScore[]>([]);
  const [selectedProfession, setSelectedProfession] = useState<ProfessionWithScore | null>(null);

  useEffect(() => {
    // Simular scores do teste DISC (em produção viriam do contexto/localStorage)
    const mockProfile = {
      D: 72,
      I: 88,
      S: 64,
      C: 56
    };

    const scored = professions
      .map(prof => {
        const alignmentScore =
          (prof.alignment.D * mockProfile.D +
            prof.alignment.I * mockProfile.I +
            prof.alignment.S * mockProfile.S +
            prof.alignment.C * mockProfile.C) / 10000;
        return { ...prof, alignmentScore };
      })
      .sort((a, b) => (b.alignmentScore || 0) - (a.alignmentScore || 0))
      .slice(0, 5);

    setTopProfessions(scored);
    setSelectedProfession(scored[0]);
  }, []);

  const getAlignmentColor = (score?: number) => {
    if (!score) return 'bg-gray-200';
    if (score >= 80) return 'bg-green-500';
    if (score >= 70) return 'bg-teal-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getAlignmentText = (score?: number) => {
    if (!score) return 'Sem dados';
    if (score >= 80) return 'Excelente';
    if (score >= 70) return 'Muito Bom';
    if (score >= 60) return 'Bom';
    if (score >= 50) return 'Aceitável';
    return 'Baixo';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-teal-900 mb-4">
            Profissões Recomendadas
          </h1>
          <p className="text-xl text-teal-700">
            Top 5 profissões 100% alinhadas com seu perfil DISC
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: List of Professions */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {topProfessions.map((prof, index) => (
                <button
                  key={prof.id}
                  onClick={() => setSelectedProfession(prof)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedProfession?.id === prof.id
                      ? 'border-teal-600 bg-teal-100'
                      : 'border-teal-200 bg-white hover:border-teal-400'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg font-bold text-teal-900">#{index + 1}</div>
                      <div className="font-semibold text-teal-800">{prof.name}</div>
                      <div className="text-sm text-teal-600 mt-1">
                        Alinhamento: {prof.alignmentScore?.toFixed(1)}%
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full ${getAlignmentColor(prof.alignmentScore)} flex items-center justify-center text-white font-bold text-sm`}>
                      {prof.alignmentScore?.toFixed(0)}%
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed View */}
          {selectedProfession && (
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-teal-200">
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-teal-900 mb-2">
                    {selectedProfession.name}
                  </h2>
                  <p className="text-lg text-teal-700">{selectedProfession.description}</p>
                </div>

                {/* Alignment Score */}
                <div className="mb-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border-2 border-teal-200">
                  <h3 className="text-lg font-bold text-teal-900 mb-4">Alinhamento com Seu Perfil</h3>
                  <div className="flex items-center gap-4">
                    <div className={`w-20 h-20 rounded-full ${getAlignmentColor(selectedProfession.alignmentScore)} flex items-center justify-center text-white font-bold text-3xl`}>
                      {selectedProfession.alignmentScore?.toFixed(0)}%
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-900">
                        {getAlignmentText(selectedProfession.alignmentScore)}
                      </div>
                      <p className="text-teal-700">Compatibilidade com seu perfil DISC</p>
                    </div>
                  </div>
                </div>

                {/* DISC Alignment Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-teal-900 mb-4">Alinhamento por Tipo</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {(['D', 'I', 'S', 'C'] as const).map(type => (
                      <div key={type} className="text-center p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="text-3xl font-bold text-teal-600 mb-2">
                          {selectedProfession.alignment[type]}%
                        </div>
                        <div className="font-semibold text-teal-900">{type}</div>
                        <div className="w-full bg-teal-200 rounded-full h-2 mt-3 overflow-hidden">
                          <div
                            className="bg-teal-600 h-full"
                            style={{ width: `${selectedProfession.alignment[type]}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Information */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-teal-900 mb-2">Salário Estimado</h4>
                    <p className="text-lg text-teal-700">{selectedProfession.salaryRange}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900 mb-2">Demanda no Mercado</h4>
                    <p className={`text-lg font-semibold ${
                      selectedProfession.demandLevel === 'Alta' ? 'text-green-600' :
                      selectedProfession.demandLevel === 'Média' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {selectedProfession.demandLevel}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900 mb-2">Oportunidades Remotas</h4>
                    <p className="text-lg text-teal-700">{selectedProfession.remoteOpportunity}%</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900 mb-2">Setores</h4>
                    <p className="text-teal-700">{selectedProfession.industries.join(', ')}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h4 className="font-bold text-teal-900 mb-4">Habilidades Principais</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfession.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full font-semibold text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3"
                    onClick={() => window.location.href = '/jobs'}
                  >
                    Buscar Vagas para {selectedProfession.name}
                  </Button>
                  <Button
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3"
                    onClick={() => window.location.href = '/coaching'}
                  >
                    Iniciar Mentoria
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
