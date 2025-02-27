function About({ theme }) {
  const skills = [
    { name: 'HTML/CSS', percentage: 80 },
    { name: 'React.Js', percentage: 45 },
    { name: 'Tailwinds', percentage: 65 },
    { name: 'Node.Js', percentage: 30 },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center relative ${
        theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'
      }`}
    >
      <div className="container mx-auto p-10 max-w-5xl text-center fade-in-up">
        {/* ส่วนหัว */}
        <h2
          className="text-6xl md:text-8xl font-extrabold tracking-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          About Me
        </h2>
        <p className="mt-10 text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto">
          I’m a trailblazing developer sculpting immersive web experiences with cutting-edge technology.
        </p>

        {/* ส่วนกล่องแสดงทักษะ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`glass-${theme === 'dark' ? 'dark' : 'light'} p-10 rounded-3xl shadow-[var(--shadow)] 
              transition-transform transform hover:rotate-3d hover:shadow-lg hover:shadow-[var(--color-primary)] duration-500`}
            >
              <h3 style={{ color: 'var(--color-primary)' }} className="text-3xl font-bold">
                {skill.name}
              </h3>
              <p className="mt-6 text-lg">Pioneering modern tools for exceptional results.</p>
            </div>
          ))}
        </div>

        {/* ส่วนแสดงแถบสกิล */}
        <div className="mt-20">
          <h3
            className={`text-3xl md:text-4xl font-bold mb-8 ${
              theme === 'dark' ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'
            } animate-slideInLeft`}
          >
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="w-full animate-slideInLeft">
                <div
                  className={`flex justify-between mb-2 ${
                    theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'
                  }`}
                >
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-lg font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-[var(--color-primary)]/20 rounded-full h-4 relative">
                  <div
                    className="bg-[var(--color-primary)] h-4 rounded-full transition-all duration-700 ease-out hover:glow-pulse"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
