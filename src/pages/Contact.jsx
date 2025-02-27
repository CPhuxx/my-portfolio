import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_name: 'Puridech',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          message: formData.message,
          reply_to: formData.email,
          to_name: formData.to_name,
        },
        publicKey
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '', to_name: 'Puridech' });
    } catch (error) {
      setError(`Failed to send message. Error: ${error?.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center relative ${
        theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'
      }`}
    >
      <div className="container mx-auto p-10 max-w-2xl fade-in-up">
        <h2
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-center"
          style={{ color: 'var(--color-primary)' }}
        >
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="mt-16 space-y-10 glass-dark p-12 rounded-3xl shadow-[var(--shadow)]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-6 bg-transparent border border-gray-300 rounded-2xl focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-6 bg-transparent border border-gray-300 rounded-2xl focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-6 bg-transparent border border-gray-300 rounded-2xl focus:outline-none h-56"
          ></textarea>
          <button type="submit" disabled={loading} className="w-full py-5 bg-blue-600 text-white rounded-full">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
