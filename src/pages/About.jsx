function About({ theme }) {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center relative ${
        theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'
      }`}
    >
      <div className="container mx-auto p-10 max-w-5xl text-center fade-in-up">
        <h2
          className="text-6xl md:text-8xl font-extrabold tracking-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          About Me
        </h2>
        <p className="mt-10 text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto">
          I’m a trailblazing developer sculpting immersive web experiences with cutting-edge technology.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {['React Expertise', '3D Innovation', 'UI/UX Design'].map((skill) => (
            <div
              key={skill}
              className={`glass-${theme === 'dark' ? 'dark' : 'light'} p-10 rounded-3xl shadow-[var(--shadow)] hover:scale-115 transition-all duration-600`}
            >
              <h3 style={{ color: 'var(--color-primary)' }} className="text-3xl font-bold">
                {skill}
              </h3>
              <p className="mt-6 text-lg">Pioneering modern tools for exceptional results.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
