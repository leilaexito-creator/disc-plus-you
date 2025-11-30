import { useState, useMemo } from 'react';
import { discQuestions, DiscStage, DiscProfile } from '@/data/disc-questions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TestState {
  stage: DiscStage;
  currentQuestion: number;
  answers: Record<number, number>; // question id -> option index
  scores: Record<DiscProfile, number>;
  completed: boolean;
}

const STAGES: DiscStage[] = ['natural', 'adapted', 'values', 'psychological'];
const STAGE_NAMES = {
  natural: 'Como você É (Natural)',
  adapted: 'Como você age no Trabalho (Adaptado)',
  values: 'O que importa para você (Valores)',
  psychological: 'Como você pensa (Psicológico)'
};

const STAGE_DESCRIPTIONS = {
  natural: 'Responda como você naturalmente é, sem filtros.',
  adapted: 'Responda como você se comporta no ambiente profissional.',
  values: 'Responda o que realmente importa para você na vida.',
  psychological: 'Responda como você pensa e processa informações.'
};

const OPTION_PROFILES: DiscProfile[][] = [
  ['D', 'I', 'S', 'C'],
  ['D', 'I', 'S', 'C'],
  ['D', 'I', 'S', 'C'],
  ['D', 'I', 'S', 'C']
];

export default function DiscTest() {
  const [testState, setTestState] = useState<TestState>({
    stage: 'natural',
    currentQuestion: 0,
    answers: {},
    scores: { D: 0, I: 0, S: 0, C: 0 },
    completed: false
  });

  const currentStageQuestions = useMemo(() => {
    return discQuestions[testState.stage];
  }, [testState.stage]);

  const currentQuestion = useMemo(() => {
    return currentStageQuestions[testState.currentQuestion];
  }, [currentStageQuestions, testState.currentQuestion]);

  const totalQuestions = useMemo(() => {
    return Object.values(discQuestions).reduce((sum, stage) => sum + stage.length, 0);
  }, []);

  const answeredQuestions = Object.keys(testState.answers).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  const stageProgress = useMemo(() => {
    const stageQuestionCounts = {
      natural: discQuestions.natural.length,
      adapted: discQuestions.adapted.length,
      values: discQuestions.values.length,
      psychological: discQuestions.psychological.length
    };

    let completedBefore = 0;
    for (const stage of STAGES) {
      if (stage === testState.stage) break;
      completedBefore += stageQuestionCounts[stage];
    }

    return {
      completedBefore,
      currentStageProgress: (testState.currentQuestion / currentStageQuestions.length) * 100,
      totalProgress: ((completedBefore + testState.currentQuestion) / totalQuestions) * 100
    };
  }, [testState.stage, testState.currentQuestion, currentStageQuestions.length, totalQuestions]);

  const handleAnswerSelect = (optionIndex: number) => {
    const questionId = currentQuestion.id;
    const profile = OPTION_PROFILES[optionIndex % 4][optionIndex];

    setTestState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionIndex
      }
    }));

    // Auto-advance to next question after selection
    setTimeout(() => {
      handleNextQuestion();
    }, 300);
  };

  const handleNextQuestion = () => {
    if (testState.currentQuestion < currentStageQuestions.length - 1) {
      // Next question in current stage
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      // Move to next stage
      const currentStageIndex = STAGES.indexOf(testState.stage);
      if (currentStageIndex < STAGES.length - 1) {
        setTestState(prev => ({
          ...prev,
          stage: STAGES[currentStageIndex + 1],
          currentQuestion: 0
        }));
      } else {
        // Test completed
        calculateScores();
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (testState.currentQuestion > 0) {
      setTestState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    } else {
      // Go to previous stage
      const currentStageIndex = STAGES.indexOf(testState.stage);
      if (currentStageIndex > 0) {
        const prevStage = STAGES[currentStageIndex - 1];
        const prevStageQuestions = discQuestions[prevStage];
        setTestState(prev => ({
          ...prev,
          stage: prevStage,
          currentQuestion: prevStageQuestions.length - 1
        }));
      }
    }
  };

  const calculateScores = () => {
    const scores: Record<DiscProfile, number> = { D: 0, I: 0, S: 0, C: 0 };

    Object.entries(testState.answers).forEach(([questionIdStr, optionIndex]) => {
      const profile = OPTION_PROFILES[optionIndex % 4][optionIndex];
      scores[profile as DiscProfile]++;
    });

    setTestState(prev => ({
      ...prev,
      scores,
      completed: true
    }));
  };

  if (testState.completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-teal-200">
            <h1 className="text-4xl font-bold text-teal-900 mb-6">Teste Concluído! 🎉</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {(['D', 'I', 'S', 'C'] as DiscProfile[]).map(profile => (
                <div key={profile} className="text-center p-4 bg-teal-100 rounded-lg">
                  <div className="text-5xl font-bold text-teal-700 mb-2">
                    {testState.scores[profile]}
                  </div>
                  <div className="text-xl font-semibold text-teal-900">{profile}</div>
                </div>
              ))}
            </div>
            <Button 
              onClick={() => window.location.href = '/results'}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
            >
              Ver Resultado Completo
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const isAnswered = currentQuestion.id in testState.answers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-teal-900">
              {STAGE_NAMES[testState.stage]}
            </h2>
            <span className="text-sm text-teal-700">
              {answeredQuestions} / {totalQuestions} respondidas
            </span>
          </div>
          <Progress value={stageProgress.totalProgress} className="h-3" />
          <p className="text-sm text-teal-600 mt-2">{STAGE_DESCRIPTIONS[testState.stage]}</p>
        </div>

        {/* Question Card */}
        <Card className="p-8 border-2 border-teal-200 mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">
              Pergunta {testState.currentQuestion + 1} de {currentStageQuestions.length}
            </h3>
            <p className="text-xl text-teal-800">{currentQuestion.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  isAnswered && testState.answers[currentQuestion.id] === index
                    ? 'border-teal-600 bg-teal-100 text-teal-900 font-semibold'
                    : 'border-teal-200 bg-white text-teal-800 hover:border-teal-400 hover:bg-teal-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <Button
              onClick={handlePreviousQuestion}
              variant="outline"
              className="flex-1 border-teal-300 text-teal-700 hover:bg-teal-50"
              disabled={testState.stage === 'natural' && testState.currentQuestion === 0}
            >
              ← Anterior
            </Button>
            <Button
              onClick={handleNextQuestion}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              disabled={!isAnswered}
            >
              Próxima →
            </Button>
          </div>
        </Card>

        {/* Stage Indicator */}
        <div className="flex justify-center gap-2">
          {STAGES.map((stage, index) => (
            <div
              key={stage}
              className={`h-2 w-12 rounded-full transition-all ${
                STAGES.indexOf(testState.stage) > index
                  ? 'bg-teal-600'
                  : STAGES.indexOf(testState.stage) === index
                  ? 'bg-teal-400'
                  : 'bg-teal-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
