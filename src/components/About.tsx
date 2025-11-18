'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js & APIs', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Three.js & WebGL', level: 80, color: 'from-orange-500 to-red-500' },
    { name: 'Database & Cloud', level: 82, color: 'from-cyan-500 to-blue-500' },
  ];

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Presente',
      description: 'Liderando el desarrollo de aplicaciones web innovadoras con React y Node.js',
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Solutions',
      period: '2020 - 2022',
      description: 'Creación de interfaces modernas y responsive con enfoque en UX',
    },
    {
      role: 'Web Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Desarrollo de sitios web y aplicaciones para diversos clientes',
    },
  ];

  return (
    <section id="sobre-mi" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Sobre Mí
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales únicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">Mi Historia</h3>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Soy un desarrollador full-stack con más de 5 años de experiencia
                creando aplicaciones web innovadoras y de alto rendimiento.
              </p>
              <p>
                Mi pasión es combinar código limpio con diseño excepcional para
                crear experiencias digitales que no solo funcionan perfectamente,
                sino que también sorprenden y deleitan a los usuarios.
              </p>
              <p>
                Me especializo en tecnologías modernas como React, Next.js,
                TypeScript y Node.js, y estoy constantemente aprendiendo y
                experimentando con nuevas herramientas y técnicas.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {[
                { name: 'GitHub', icon: '⚡' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Email', icon: '✉️' },
              ].map((social) => (
                <motion.button
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">Habilidades</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white/90">{skill.name}</span>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold mb-12 text-center gradient-text">
            Experiencia
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-transform"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-purple-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 inline-block">
                    {exp.period}
                  </div>
                </div>
                <p className="text-white/70 text-lg">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
