'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío (aquí conectarías con tu backend o servicio de email)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Reset status después de 3 segundos
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hola@portfolio.com',
      link: 'mailto:hola@portfolio.com',
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: '+34 123 456 789',
      link: 'tel:+34123456789',
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Madrid, España',
      link: null,
    },
  ];

  return (
    <section id="contacto" className="relative py-32 px-6">
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
              Hablemos
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 mb-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Información de Contacto
              </h3>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones
                o simplemente para una charla sobre tecnología. No dudes en contactarme.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-3xl border border-white/10">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white text-lg font-semibold hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-8"
            >
              <h4 className="text-xl font-bold mb-6 text-white/90">Sígueme en</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', icon: '⚡', color: 'from-gray-600 to-gray-800' },
                  { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-800' },
                  { name: 'Twitter', icon: '🐦', color: 'from-sky-500 to-blue-600' },
                  { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-600' },
                ].map((social) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass py-4 px-6 rounded-xl bg-gradient-to-r ${social.color} bg-opacity-10 hover:bg-opacity-20 transition-all border border-white/10 hover:border-white/20`}
                  >
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <div className="text-sm font-semibold text-white/90">{social.name}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">Envíame un Mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-white/30"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/90 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-white/30"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/90 font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-white/30 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all ${
                  isSubmitting
                    ? 'bg-white/10 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
                >
                  ✓ ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                >
                  ✗ Hubo un error. Por favor, intenta de nuevo.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
