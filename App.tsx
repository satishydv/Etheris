import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { Teams } from './components/Teams';
import { Tasks } from './components/Tasks';
import { Calendar } from './components/Calendar';
import { Pipelines } from './components/Pipelines';
import { Plugins } from './components/Plugins';

export type ViewState = 'dashboard' | 'settings' | 'teams' | 'tasks' | 'calendar' | 'pipelines' | 'plugins';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'teams':
        return <Teams />;
      case 'tasks':
        return <Tasks />;
      case 'calendar':
        return <Calendar />;
      case 'pipelines':
        return <Pipelines />;
      case 'plugins':
        return <Plugins />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-etheris-dark text-etheris-primary font-sans overflow-hidden selection:bg-blue-500/30 transition-colors duration-500">
      <Sidebar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        currentView={currentView}
        onChangeView={setCurrentView}
      />
      {renderContent()}
    </div>
  );
}

export default App;