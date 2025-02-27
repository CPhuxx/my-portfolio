function Footer({ theme }) {
  return (
    <footer className={`bg-${theme === 'dark' ? '[var(--color-dark)]' : '[var(--color-light)]'} text-${theme === 'dark' ? '[var(--color-light)]' : '[var(--color-dark)]'} py-12 border-t border-[var(--color-primary)]/30`}>
      <div className="container mx-auto text-center">
        <p className="text-xl font-light">© 2025 Puridech. All rights reserved.</p>
        <div className="mt-6 flex justify-center gap-6">
          {['FaFacebook', 'FaTwitter', 'FaInstagram', 'FaLinkedin'].map((icon, i) => (
            <a key={i} href="#" className={`text-2xl ${theme === 'dark' ? 'text-[var(--color-primary)] hover:text-[var(--color-light)]' : 'text-[var(--color-primary)] hover:text-[var(--color-dark)]'} transition-all duration-600`}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;