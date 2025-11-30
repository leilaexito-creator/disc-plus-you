import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch } from 'wouter';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import DiscTest from './pages/DiscTest';
import DiscResults from './pages/DiscResults';
import Professions from './pages/Professions';
import JobSearch from './pages/JobSearch';
import AiCoaching from './pages/AiCoaching';
import PdfReport from './pages/PdfReport';
import NotFound from './pages/NotFound';
import { Language, translations } from './data/translations';

function Layout({ children, currentLang, onLanguageChange }: { children: React.ReactNode; currentLang: Language; onLanguageChange: (lang: Language) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: translations[currentLang].nav.home, path: '/' },
    { label: translations[currentLang].nav.test, path: '/test' },
    { label: translations[currentLang].nav.results, path: '/results' },
    { label: translations[currentLang].nav.professions, path: '/professions' },
    { label: translations[currentLang].nav.jobs, path: '/jobs' },
    { label: translations[currentLang].nav.coaching, path: '/coaching' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-teal-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold">DISC+</div>
            <div className="text-xl font-semibold">YOU</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map(item => (
              <a
                key={item.path}
                href={item.path}
                className="text-white hover:text-teal-100 transition-colors font-semibold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Auth */}
          <div className="flex items-center gap-4">
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-teal-700 text-white px-3 py-2 rounded-lg border border-teal-500 hover:border-teal-300 transition-colors"
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="de">🇩🇪 DE</option>
              <option value="it">🇮🇹 IT</option>
              <option value="ja">🇯🇵 JA</option>
              <option value="zh">🇨🇳 ZH</option>
            </select>

            <button className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
              {translations[currentLang].nav.login}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-teal-700 px-4 py-4 space-y-2">
            {navItems.map(item => (
              <a
                key={item.path}
                href={item.path}
                className="block text-white hover:text-teal-100 transition-colors font-semibold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 DISC+ YOU - Plataforma de Avaliação de Personalidade e Orientação de Carreira</p>
          <p className="text-sm text-teal-300">
            Desenvolvido com ❤️ para ajudar você a descobrir seu melhor potencial
          </p>
        </div>
      </footer>
    </div>
  );
}

function Router({ currentLang }: { currentLang: Language }) {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/test" component={DiscTest} />
      <Route path="/results" component={DiscResults} />
      <Route path="/professions" component={Professions} />
      <Route path="/jobs" component={JobSearch} />
      <Route path="/coaching" component={AiCoaching} />
      <Route path="/report" component={PdfReport} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Layout currentLang={currentLang} onLanguageChange={setCurrentLang}>
            <Router currentLang={currentLang} />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
