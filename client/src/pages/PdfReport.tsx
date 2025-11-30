import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DiscScore {
  D: number;
  I: number;
  S: number;
  C: number;
}

export default function PdfReport() {
  const [scores] = useState<DiscScore>({
    D: 72,
    I: 88,
    S: 64,
    C: 56
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const generatePdf = async () => {
    setIsGenerating(true);
    
    // Simular geração de PDF
    setTimeout(() => {
      // Em produção, isso chamaria uma API para gerar o PDF
      const pdfContent = generatePdfContent();
      downloadPdf(pdfContent);
      setIsGenerating(false);
    }, 2000);
  };

  const generatePdfContent = () => {
    const profileOrder = [
      { letter: 'I', name: 'Influência', score: scores.I },
      { letter: 'D', name: 'Dominância', score: scores.D },
      { letter: 'S', name: 'Estabilidade', score: scores.S },
      { letter: 'C', name: 'Conformidade', score: scores.C }
    ].sort((a, b) => b.score - a.score);

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relatório DISC+ YOU</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937; line-height: 1.6; }
    .page { page-break-after: always; padding: 40px; }
    .cover { background: linear-gradient(135deg, #0d9488 0%, #06b6d4 100%); color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; text-align: center; }
    .cover h1 { font-size: 48px; margin-bottom: 20px; }
    .cover p { font-size: 24px; margin-bottom: 40px; }
    .cover .date { font-size: 14px; margin-top: 60px; }
    h1 { color: #0d9488; font-size: 32px; margin-bottom: 20px; border-bottom: 3px solid #0d9488; padding-bottom: 10px; }
    h2 { color: #0f766e; font-size: 24px; margin-top: 30px; margin-bottom: 15px; }
    h3 { color: #14b8a6; font-size: 18px; margin-top: 20px; margin-bottom: 10px; }
    .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
    .profile-card { border: 2px solid #0d9488; border-radius: 8px; padding: 20px; }
    .profile-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .profile-letter { font-size: 48px; font-weight: bold; color: #0d9488; }
    .profile-score { font-size: 32px; font-weight: bold; color: #0d9488; }
    .profile-name { font-size: 18px; font-weight: bold; color: #0f766e; margin-bottom: 10px; }
    .profile-description { font-size: 14px; color: #4b5563; margin-bottom: 15px; }
    .strengths, .challenges { margin: 10px 0; }
    .strengths h4, .challenges h4 { color: #0d9488; font-size: 12px; font-weight: bold; margin-bottom: 5px; }
    .strengths ul, .challenges ul { margin-left: 20px; font-size: 12px; }
    .strengths li { color: #059669; }
    .challenges li { color: #dc2626; }
    .chart { margin: 20px 0; }
    .bar-chart { display: flex; gap: 20px; margin: 20px 0; }
    .bar { display: flex; flex-direction: column; align-items: center; }
    .bar-label { font-weight: bold; color: #0d9488; margin-bottom: 5px; }
    .bar-value { width: 40px; height: 200px; background: linear-gradient(to top, #0d9488, #06b6d4); border-radius: 4px; position: relative; }
    .bar-text { position: absolute; bottom: -20px; font-size: 12px; font-weight: bold; }
    .competencies { margin: 20px 0; }
    .competency-item { display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #f0fdfa; border-left: 4px solid #0d9488; }
    .competency-name { font-weight: bold; color: #0f766e; }
    .competency-level { color: #0d9488; font-weight: bold; }
    .development-plan { background: #fff7ed; border-left: 4px solid #f59e0b; padding: 15px; margin: 15px 0; }
    .recommendation { background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px; margin: 15px 0; }
    .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 20px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #0d9488; padding: 10px; text-align: left; }
    th { background: #0d9488; color: white; }
  </style>
</head>
<body>
  <!-- COVER PAGE -->
  <div class="page cover">
    <h1>DISC+ YOU</h1>
    <p>Relatório de Análise de Personalidade</p>
    <p>e Orientação de Carreira</p>
    <div class="date">Gerado em: ${new Date().toLocaleDateString('pt-BR')}</div>
  </div>

  <!-- INTRODUCTION -->
  <div class="page">
    <h1>Introdução</h1>
    <p>Este relatório apresenta uma análise completa do seu perfil DISC, baseada em 82 perguntas distribuídas em 4 etapas:</p>
    <ul style="margin-left: 20px; margin-top: 15px;">
      <li><strong>Etapa 1 - Natural (24Q):</strong> Como você naturalmente é</li>
      <li><strong>Etapa 2 - Adaptado (24Q):</strong> Como você age no trabalho</li>
      <li><strong>Etapa 3 - Valores (18Q):</strong> O que importa para você</li>
      <li><strong>Etapa 4 - Psicológico (16Q):</strong> Como você pensa</li>
    </ul>
    <p style="margin-top: 20px;">O modelo DISC avalia quatro dimensões principais de personalidade:</p>
    <div class="profile-grid">
      <div>
        <h3>D - Dominância</h3>
        <p>Direto, decidido, focado em resultados e liderança.</p>
      </div>
      <div>
        <h3>I - Influência</h3>
        <p>Comunicativo, entusiasmado, focado em relacionamentos.</p>
      </div>
      <div>
        <h3>S - Estabilidade</h3>
        <p>Paciente, confiável, focado em harmonia e segurança.</p>
      </div>
      <div>
        <h3>C - Conformidade</h3>
        <p>Cuidadoso, preciso, focado em qualidade e análise.</p>
      </div>
    </div>
  </div>

  <!-- RESULTS PAGE 1 -->
  <div class="page">
    <h1>Seus Resultados DISC</h1>
    
    <h2>Scores por Dimensão</h2>
    <div class="bar-chart">
      <div class="bar">
        <div class="bar-label">D</div>
        <div class="bar-value" style="height: ${scores.D * 2}px;"></div>
        <div class="bar-text">${scores.D}</div>
      </div>
      <div class="bar">
        <div class="bar-label">I</div>
        <div class="bar-value" style="height: ${scores.I * 2}px;"></div>
        <div class="bar-text">${scores.I}</div>
      </div>
      <div class="bar">
        <div class="bar-label">S</div>
        <div class="bar-value" style="height: ${scores.S * 2}px;"></div>
        <div class="bar-text">${scores.S}</div>
      </div>
      <div class="bar">
        <div class="bar-label">C</div>
        <div class="bar-value" style="height: ${scores.C * 2}px;"></div>
        <div class="bar-text">${scores.C}</div>
      </div>
    </div>

    <h2>Perfil Primário: ${profileOrder[0].letter} - ${profileOrder[0].name}</h2>
    <p>Seu perfil primário é <strong>${profileOrder[0].letter}</strong>, o que significa que você é naturalmente:</p>
    <ul style="margin-left: 20px; margin-top: 10px;">
      <li>Focado em ${profileOrder[0].letter === 'D' ? 'resultados e liderança' : profileOrder[0].letter === 'I' ? 'relacionamentos e comunicação' : profileOrder[0].letter === 'S' ? 'harmonia e estabilidade' : 'qualidade e análise'}</li>
      <li>Tendência a ${profileOrder[0].letter === 'D' ? 'tomar decisões rápidas' : profileOrder[0].letter === 'I' ? 'ser entusiasmado' : profileOrder[0].letter === 'S' ? 'ser paciente' : 'ser preciso'}</li>
      <li>Valoriza ${profileOrder[0].letter === 'D' ? 'poder e vitória' : profileOrder[0].letter === 'I' ? 'aceitação e amizade' : profileOrder[0].letter === 'S' ? 'segurança e lealdade' : 'integridade e excelência'}</li>
    </ul>
  </div>

  <!-- RESULTS PAGE 2 -->
  <div class="page">
    <h1>Análise Detalhada dos Perfis</h1>
    
    ${profileOrder.map((profile, index) => `
      <div class="profile-card">
        <div class="profile-header">
          <div>
            <div class="profile-name">#${index + 1} - ${profile.letter} (${profile.name})</div>
            <div class="profile-description">Score: ${profile.score}/100</div>
          </div>
          <div class="profile-score">${profile.score}%</div>
        </div>
      </div>
    `).join('')}
  </div>

  <!-- COMPETENCIES -->
  <div class="page">
    <h1>Mapa de Competências</h1>
    <p>Baseado no seu perfil DISC, você possui as seguintes competências:</p>
    
    <h2>Competências Fortes</h2>
    <div class="competencies">
      <div class="competency-item">
        <span class="competency-name">Liderança</span>
        <span class="competency-level">Excelente</span>
      </div>
      <div class="competency-item">
        <span class="competency-name">Comunicação</span>
        <span class="competency-level">Muito Bom</span>
      </div>
      <div class="competency-item">
        <span class="competency-name">Tomada de Decisão</span>
        <span class="competency-level">Excelente</span>
      </div>
      <div class="competency-item">
        <span class="competency-name">Trabalho em Equipe</span>
        <span class="competency-level">Bom</span>
      </div>
    </div>

    <h2>Áreas para Desenvolvimento</h2>
    <div class="development-plan">
      <h3>Atenção aos Detalhes</h3>
      <p>Recomendação: Desenvolver habilidades de análise através de cursos e prática deliberada.</p>
    </div>
    <div class="development-plan">
      <h3>Paciência e Empatia</h3>
      <p>Recomendação: Trabalhar inteligência emocional através de coaching e mindfulness.</p>
    </div>
  </div>

  <!-- PROFESSIONS -->
  <div class="page">
    <h1>Profissões Recomendadas</h1>
    <p>As seguintes profissões estão 100% alinhadas com seu perfil DISC:</p>
    
    <table>
      <tr>
        <th>Profissão</th>
        <th>Alinhamento</th>
        <th>Demanda</th>
        <th>Remoto</th>
      </tr>
      <tr>
        <td>Gerente de Projeto</td>
        <td>95%</td>
        <td>Alta</td>
        <td>70%</td>
      </tr>
      <tr>
        <td>Diretor de Vendas</td>
        <td>92%</td>
        <td>Alta</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Gerente de Marketing</td>
        <td>88%</td>
        <td>Alta</td>
        <td>60%</td>
      </tr>
      <tr>
        <td>Consultor de Negócios</td>
        <td>85%</td>
        <td>Alta</td>
        <td>70%</td>
      </tr>
      <tr>
        <td>Empreendedor</td>
        <td>90%</td>
        <td>Média</td>
        <td>80%</td>
      </tr>
    </table>
  </div>

  <!-- DEVELOPMENT PLAN -->
  <div class="page">
    <h1>Plano de Desenvolvimento Pessoal</h1>
    
    <h2>Próximos 3 Meses</h2>
    <div class="recommendation">
      <h3>Objetivo 1: Melhorar Habilidades de Liderança</h3>
      <p><strong>Ação:</strong> Fazer curso de liderança avançada</p>
      <p><strong>Prazo:</strong> 6 semanas</p>
      <p><strong>Métrica:</strong> Feedback 360 com aumento de 20%</p>
    </div>

    <div class="recommendation">
      <h3>Objetivo 2: Desenvolver Inteligência Emocional</h3>
      <p><strong>Ação:</strong> Iniciar prática de meditação diária</p>
      <p><strong>Prazo:</strong> Contínuo</p>
      <p><strong>Métrica:</strong> Avaliação de bem-estar pessoal</p>
    </div>

    <div class="recommendation">
      <h3>Objetivo 3: Expandir Rede Profissional</h3>
      <p><strong>Ação:</strong> Conectar com 20 profissionais da área</p>
      <p><strong>Prazo:</strong> 3 meses</p>
      <p><strong>Métrica:</strong> Número de conexões e oportunidades geradas</p>
    </div>

    <h2>Recursos Recomendados</h2>
    <ul style="margin-left: 20px; margin-top: 15px;">
      <li><strong>Livros:</strong> "Mindset" (Carol Dweck), "Hábitos Atômicos" (James Clear)</li>
      <li><strong>Cursos:</strong> LinkedIn Learning, Coursera, Udemy</li>
      <li><strong>Mentoria:</strong> Sessões de coaching com especialista em desenvolvimento</li>
      <li><strong>Comunidades:</strong> Grupos de networking profissional</li>
    </ul>
  </div>

  <!-- FOOTER -->
  <div class="page">
    <h1>Conclusão</h1>
    <p>Este relatório fornece uma visão abrangente do seu perfil DISC e orientações para desenvolvimento profissional e pessoal.</p>
    
    <div class="recommendation">
      <h3>Próximos Passos</h3>
      <ol style="margin-left: 20px; margin-top: 10px;">
        <li>Revisar este relatório com atenção</li>
        <li>Identificar 3 áreas prioritárias para desenvolvimento</li>
        <li>Criar plano de ação com prazos específicos</li>
        <li>Iniciar sessões de mentoria com IA</li>
        <li>Buscar vagas alinhadas com seu perfil</li>
        <li>Revisar progresso mensalmente</li>
      </ol>
    </div>

    <div class="footer">
      <p>DISC+ YOU - Plataforma de Avaliação de Personalidade e Orientação de Carreira</p>
      <p>Relatório gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
      <p>© 2025 - Todos os direitos reservados</p>
    </div>
  </div>
</body>
</html>
    `;

    return html;
  };

  const downloadPdf = (htmlContent: string) => {
    // Em produção, isso usaria uma biblioteca como jsPDF ou enviaria para um servidor
    // Para demonstração, vamos criar um blob e fazer download
    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `DISC-Report-${new Date().getTime()}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-teal-900 mb-4">Relatório DISC+ YOU</h1>
          <p className="text-xl text-teal-700">
            Análise Completa de Personalidade e Orientação de Carreira
          </p>
        </div>

        {/* Preview */}
        <Card className="p-8 border-4 border-teal-600 mb-8 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">Seu Perfil Resumido</h2>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { letter: 'D', name: 'Dominância', score: scores.D, color: 'bg-red-500' },
                { letter: 'I', name: 'Influência', score: scores.I, color: 'bg-teal-500' },
                { letter: 'S', name: 'Estabilidade', score: scores.S, color: 'bg-emerald-500' },
                { letter: 'C', name: 'Conformidade', score: scores.C, color: 'bg-amber-500' }
              ].map(profile => (
                <div key={profile.letter} className="text-center p-4 bg-white rounded-lg border-2 border-teal-200">
                  <div className={`w-16 h-16 ${profile.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-2xl`}>
                    {profile.letter}
                  </div>
                  <div className="font-semibold text-teal-900">{profile.name}</div>
                  <div className="text-2xl font-bold text-teal-600 mt-2">{profile.score}</div>
                </div>
              ))}
            </div>

            <p className="text-teal-700 mb-4">
              <strong>Seu Perfil Primário:</strong> I (Influência) - Você é comunicativo, entusiasmado e focado em relacionamentos.
            </p>

            <div className="bg-teal-100 border-l-4 border-teal-600 p-4 mb-6">
              <p className="text-teal-900">
                ✨ <strong>Sugestão de profissão:</strong> Sua profissão ideal é 100% alinhada com seu perfil DISC. 
                Confira as recomendações no relatório completo!
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <Button
              onClick={generatePdf}
              disabled={isGenerating}
              className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 text-lg font-bold"
            >
              {isGenerating ? '⏳ Gerando PDF...' : '📄 Baixar Relatório Completo (PDF)'}
            </Button>
            <p className="text-sm text-teal-600 mt-4">
              O relatório inclui: análise detalhada, competências, profissões recomendadas, plano de desenvolvimento e muito mais!
            </p>
          </div>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 border-teal-200">
            <h3 className="text-xl font-bold text-teal-900 mb-3">📊 O que está incluído</h3>
            <ul className="space-y-2 text-teal-700">
              <li>✅ Análise completa dos 4 perfis DISC</li>
              <li>✅ Gráficos e visualizações</li>
              <li>✅ Mapa de competências</li>
              <li>✅ Top 5 profissões recomendadas</li>
              <li>✅ Plano de desenvolvimento pessoal</li>
              <li>✅ Recursos e recomendações</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-teal-200">
            <h3 className="text-xl font-bold text-teal-900 mb-3">🎯 Como usar</h3>
            <ul className="space-y-2 text-teal-700">
              <li>1. Baixe o relatório em PDF</li>
              <li>2. Revise sua análise completa</li>
              <li>3. Identifique áreas de desenvolvimento</li>
              <li>4. Explore as profissões recomendadas</li>
              <li>5. Inicie as sessões de mentoria</li>
              <li>6. Busque vagas alinhadas com seu perfil</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
