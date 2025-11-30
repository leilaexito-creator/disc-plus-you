import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  description: string;
  url: string;
  remote: boolean;
  source: string;
  postedDate: string;
}

export default function JobSearch() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRemote, setFilterRemote] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Mock data - em produção viriam das APIs
  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Desenvolvedor Full Stack',
      company: 'TechCorp',
      location: 'São Paulo, SP',
      salary: 'R$ 80.000 - R$ 120.000',
      description: 'Procuramos desenvolvedor Full Stack com experiência em React e Node.js',
      url: 'https://www.linkedin.com/jobs/view/1',
      remote: true,
      source: 'LinkedIn',
      postedDate: '2 dias atrás'
    },
    {
      id: '2',
      title: 'Gerente de Projeto',
      company: 'Consultoria XYZ',
      location: 'Rio de Janeiro, RJ',
      salary: 'R$ 100.000 - R$ 150.000',
      description: 'Buscamos gerente de projeto com experiência em metodologias ágeis',
      url: 'https://www.linkedin.com/jobs/view/2',
      remote: true,
      source: 'Indeed',
      postedDate: '1 dia atrás'
    },
    {
      id: '3',
      title: 'Analista de Dados',
      company: 'DataSolutions',
      location: 'Remoto',
      salary: 'R$ 70.000 - R$ 110.000',
      description: 'Analista de dados com experiência em Python e SQL',
      url: 'https://www.linkedin.com/jobs/view/3',
      remote: true,
      source: 'GitHub Jobs',
      postedDate: '3 dias atrás'
    },
    {
      id: '4',
      title: 'Especialista em Marketing Digital',
      company: 'AgênciaPro',
      location: 'Belo Horizonte, MG',
      salary: 'R$ 60.000 - R$ 90.000',
      description: 'Procuramos especialista em marketing digital com experiência em Google Ads',
      url: 'https://www.linkedin.com/jobs/view/4',
      remote: true,
      source: 'Stack Overflow',
      postedDate: '4 dias atrás'
    },
    {
      id: '5',
      title: 'Arquiteto de Software',
      company: 'Startup Tech',
      location: 'Remoto',
      salary: 'R$ 120.000 - R$ 180.000',
      description: 'Arquiteto de software sênior para liderar equipe técnica',
      url: 'https://www.linkedin.com/jobs/view/5',
      remote: true,
      source: 'We Work Remotely',
      postedDate: '5 dias atrás'
    }
  ];

  useEffect(() => {
    // Simular busca
    setLoading(true);
    setTimeout(() => {
      let filtered = mockJobs;
      
      if (searchTerm) {
        filtered = filtered.filter(job =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (filterRemote) {
        filtered = filtered.filter(job => job.remote);
      }

      setJobs(filtered);
      setLoading(false);
    }, 500);
  }, [searchTerm, filterRemote]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-teal-900 mb-4">Buscar Vagas</h1>
          <p className="text-xl text-teal-700">
            1000+ vagas globais com foco em trabalho remoto
          </p>
        </div>

        {/* Search Bar */}
        <Card className="p-6 border-2 border-teal-200 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-teal-900 mb-2">
                Buscar por cargo ou empresa
              </label>
              <Input
                type="text"
                placeholder="Ex: Desenvolvedor, Designer, Gerente..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-600 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterRemote}
                  onChange={(e) => setFilterRemote(e.target.checked)}
                  className="w-4 h-4 rounded border-teal-300"
                />
                <span className="text-teal-900 font-semibold">Apenas vagas remotas</span>
              </label>
            </div>
          </div>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job List */}
          <div className="lg:col-span-1 space-y-3 max-h-96 overflow-y-auto">
            {loading ? (
              <div className="text-center text-teal-600">Carregando...</div>
            ) : jobs.length === 0 ? (
              <div className="text-center text-teal-600">Nenhuma vaga encontrada</div>
            ) : (
              jobs.map(job => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedJob?.id === job.id
                      ? 'border-teal-600 bg-teal-100'
                      : 'border-teal-200 bg-white hover:border-teal-400'
                  }`}
                >
                  <div className="font-semibold text-teal-900">{job.title}</div>
                  <div className="text-sm text-teal-600">{job.company}</div>
                  <div className="text-xs text-teal-500 mt-1">
                    {job.remote && '🌍 Remoto'} • {job.postedDate}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Job Details */}
          {selectedJob && (
            <div className="lg:col-span-2">
              <Card className="p-8 border-2 border-teal-200 sticky top-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-teal-900 mb-2">
                    {selectedJob.title}
                  </h2>
                  <p className="text-lg text-teal-700">{selectedJob.company}</p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div>
                    <p className="text-sm text-teal-600">Localização</p>
                    <p className="font-semibold text-teal-900">{selectedJob.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-teal-600">Salário</p>
                    <p className="font-semibold text-teal-900">
                      {selectedJob.salary || 'A combinar'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-teal-600">Tipo</p>
                    <p className="font-semibold text-teal-900">
                      {selectedJob.remote ? '🌍 Remoto' : 'Presencial'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-teal-600">Fonte</p>
                    <p className="font-semibold text-teal-900">{selectedJob.source}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-bold text-teal-900 mb-3">Sobre a Vaga</h3>
                  <p className="text-teal-700 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3"
                    onClick={() => window.open(selectedJob.url, '_blank')}
                  >
                    Candidatar-se
                  </Button>
                  <Button
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3"
                    onClick={() => window.location.href = '/coaching'}
                  >
                    Preparar Entrevista
                  </Button>
                </div>

                {/* Posted Date */}
                <p className="text-sm text-teal-500 mt-4 text-center">
                  Publicado {selectedJob.postedDate}
                </p>
              </Card>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <Card className="p-6 border-2 border-teal-200 text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">1000+</div>
            <p className="text-teal-900 font-semibold">Vagas Disponíveis</p>
          </Card>
          <Card className="p-6 border-2 border-teal-200 text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">6+</div>
            <p className="text-teal-900 font-semibold">APIs Integradas</p>
          </Card>
          <Card className="p-6 border-2 border-teal-200 text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">Atualizado</div>
            <p className="text-teal-900 font-semibold">A cada hora</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
