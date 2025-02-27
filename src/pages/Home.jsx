import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import img01 from '../assets/img/img01.jpg';

function Home({ theme }) {
  const [currentWord, setCurrentWord] = useState('To');
  const words = ['To', 'My'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        return words[(currentIndex + 1) % words.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`min-h-screen flex flex-col items-center justify-center relative ${theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'} animate-fadeInUp`}>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        className="absolute inset-0 -z-10"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="var(--color-primary)" />
      </Canvas>
      <div className="text-center fade-in-up">
        <div className="mb-12">
          <div className={`w-44 h-44 md:w-64 md:h-64 rounded-full mx-auto border-6 border-[var(--color-primary)] ${theme === 'dark' ? 'bg-[var(--color-dark)]' : 'bg-[var(--color-light)]'} flex items-center justify-center shadow-[var(--shadow)] relative glow-pulse`}>
            <img
              src={img01}
              alt="Profile"
              className="w-full h-full object-cover rounded-full absolute inset-0"
            />
          </div>
        </div>

        <h1 className={`text-7xl md:text-9xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'} animate-slideInLeft`}>
          Welcome{' '}
          <span
            className="text-[var(--color-primary)] inline-block relative"
            style={{ textShadow: `0 0 15px rgba(0, 102, 204, 0.8), 0 0 5px rgba(0, 102, 204, 0.8)` }}
          >
            <span className="cycle-text">{currentWord}</span>
          </span>
        </h1>
        <p className={`text-2xl md:text-4xl mt-10 font-light max-w-4xl mx-auto ${theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'} leading-relaxed animate-fadeInUp`}>
          front-end developer
        </p>
      </div>
    </section>
  );
}

export default Home; 