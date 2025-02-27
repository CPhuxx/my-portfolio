import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Background3D from './components/Background3D';

function App() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const handleThemeChange = () => {
      if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    };

    handleThemeChange();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    if (newTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <div className={`min-h-screen text-${theme === 'dark' ? '[var(--color-light)]' : '[var(--color-dark)]'} scroll-smooth relative ${theme === 'dark' ? 'bg-[var(--color-dark)]' : 'bg-[var(--color-light)]'} animate-fadeInUp`}>
      <Background3D theme={theme} />
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[var(--color-dark)]/90' : 'bg-[var(--color-light)]/90'} opacity-70`}></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-4 relative z-10">
        <Home theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;