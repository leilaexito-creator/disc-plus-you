import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DiscProfile {
  name: string;
  letter: 'D' | 'I' | 'S' | 'C';
  score: number;
  color: string;
  description: string;
  strengths: string[];
  challenges: string[];
}

const PROFILE_DATA: Record<string, DiscProfile> = {
  D: {
    name: 'Dominância',
    letter: 'D',
    score: 0,
    color: 'bg-red-500',
    description: 'Você é direto, decidido e focado em resultados. Gosta de desafios e competição.',
    strengths: ['Liderança', 'Decisão rápida', 'Ambição', 'Coragem', 'Determinação'],
    challenges: ['Impaciência', 'Agressividade', 'Dificuldade em delegar', 'Falta de empatia']
  },
  I: {
    name: 'Influência',
    letter: 'I',
    score: 0,
    color: 'bg-teal-500',
    description: 'Você é comunicativo, entusiasmado e gosta de estar cercado de pessoas.',
    strengths: ['Comunicação', 'Entusiasmo', 'Criatividade', 'Carisma', 'Otimismo'],
    challenges: ['Impulsividade', 'Falta de foco', 'Dificuldade com detalhes', 'Superficialidade']
  },
  S: {
    name: 'Estabilidade',
    letter: 'S',
    score: 0,
    color: 'bg-emerald-500',
    description: 'Você é paciente, confiável e valoriza a harmonia e a estabilidade.',
    strengths: ['Lealdade', 'Paciência', 'Empatia', 'Confiabilidade', 'Trabalho em equipe'],
    challenges: ['Resistência à mudança', 'Passividade', 'Dificuldade em tomar decisões', 'Medo de conflito']
  },
  C: {
    name: 'Conformidade',
    letter: 'C',
    score: 0,
    color: 'bg-amber-500',
    description: 'Você é cuidadoso, preciso e valoriza a qualidade e a excelência.',
    strengths: ['Atenção aos detalhes', 'Qualidade', 'Análise', 'Integridade', 'Precisão'],
    challenges: ['Perfeccionismo', 'Lentidão', 'Rigidez', 'Dificuldade em lidar com ambiguidade']
  }
};

export default function DiscResults() {
  const [profiles, setProfiles] = useState<DiscProfile[]>([]);
  const [primaryProfile, setPrimaryProfile] = useState<DiscProfile | null>(null);

  useEffect(() => {
    // Simular dados do teste (em produção, viriam do localStorage ou API)
    const mockScores = {
      D: 18,
      I: 22,
      S: 16,
      C: 14
    };

    const profilesWithScores = Object.entries(mockScores)
      .map(([letter, score]) => ({
        ...PROFILE_DATA[letter],
        score
      }))
      .sort((a, b) => b.score - a.score);

    setProfiles(profilesWithScores);
    setPrimaryProfile(profilesWithScores[0]);
  }, []);

  if (!primaryProfile) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-teal-900 mb-4">Seu Perfil DISC</h1>
          <p className="text-xl text-teal-700">Conheça seus traços de personalidade</p>
        </div>

        {/* Primary Profile */}
        <Card className="p-8 border-4 border-teal-600 mb-8 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-teal-900 mb-4">
                Seu Perfil Primário: <span className="text-teal-600">{primaryProfile.letter}</span>
              </h2>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">{primaryProfile.name}</h3>
              <p className="text-lg text-teal-700 mb-6">{primaryProfile.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-teal-900 mb-3">Pontos Fortes:</h4>
                <ul className="space-y-2">
                  {primaryProfile.strengths.map((strength, i) => (
                    <li key={i} className="flex items-center text-teal-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-teal-900 mb-3">Desafios:</h4>
                <ul className="space-y-2">
                  {primaryProfile.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-center text-teal-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Score Visualization */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                {profiles.map((profile) => (
                  <div key={profile.letter}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-teal-900">{profile.letter} - {profile.name}</span>
                      <span className="font-bold text-teal-700">{profile.score}/25</span>
                    </div>
                    <div className="w-full bg-teal-200 rounded-full h-4 overflow-hidden">
                      <div
                        className={`h-full ${profile.color} transition-all duration-500`}
                        style={{ width: `${(profile.score / 25) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* All Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {profiles.slice(1).map((profile) => (
            <Card key={profile.letter} className="p-6 border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">
                {profile.letter} - {profile.name}
              </h3>
              <p className="text-sm text-teal-600 mb-4">Pontuação: {profile.score}/25</p>
              <p className="text-teal-700 mb-4">{profile.description}</p>
              <div className="w-full bg-teal-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${profile.color} transition-all duration-500`}
                  style={{ width: `${(profile.score / 25) * 100}%` }}
                ></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
            onClick={() => window.location.href = '/professions'}
          >
            Ver Profissões Recomendadas
          </Button>
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
            onClick={() => window.location.href = '/jobs'}
          >
            Buscar Vagas
          </Button>
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
            onClick={() => window.location.href = '/coaching'}
          >
            Iniciar Mentoria
          </Button>
        </div>
      </div>
    </div>
  );
}
