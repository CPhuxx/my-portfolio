function Projects({ theme }) {
  return (
    <section id="projects" className={`min-h-screen flex items-center justify-center relative ${theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'}`}>
      <div className="container mx-auto p-10 fade-in-up">
        <h2 className={`text-6xl md:text-8xl font-extrabold ${theme === 'dark' ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'} tracking-tight text-center`}>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {[
            { title: 'Interactive Web', desc: 'A fluid, dynamic React masterpiece.', link: 'https://example.com' },
            { title: '3D Portfolio', desc: 'The cosmic site you’re exploring!', link: 'https://animesh-rawat.web.app' },
          ].map((project, i) => (
            <div
              key={i}
              className={`glass-${theme === 'dark' ? 'dark' : 'light'} p-10 rounded-3xl shadow-[var(--shadow)] hover:scale-110 transition-all duration-600`}
            >
              <h3 className={`text-4xl font-bold ${theme === 'dark' ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'}`}>
                {project.title}
              </h3>
              <p className={`mt-6 text-xl ${theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'}`}>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-block px-10 py-4 bg-[var(--color-primary)] text-[var(--color-light)] rounded-full hover:bg-blue-900 transition-all duration-600 shadow-[var(--shadow)]`}
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;