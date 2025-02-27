import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // เพิ่ม FaTimes กลับมา
import { AiFillHome } from 'react-icons/ai';
import { IoPerson } from 'react-icons/io5';
import { RiFolderOpenFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import Select from 'react-select';
import img01 from '../assets/img/img01.jpg';

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ตัวเลือกสำหรับ dropdown
  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  // ฟังก์ชันจัดการการเลือก theme จาก dropdown
  const handleThemeChange = (selectedOption) => {
    toggleTheme(selectedOption.value);
  };

  // สไตล์สำหรับ react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      borderRadius: '0.5rem',
      padding: '2px',
      minWidth: '100px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#0066CC',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF',
      borderRadius: '0.5rem',
      border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)') : 'transparent',
      color: theme === 'dark' ? '#FFFFFF' : '#000000',
      '&:hover': {
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === 'dark' ? '#FFFFFF' : '#000000',
    }),
  };

  return (
    <nav className={`fixed top-0 w-full ${theme === 'dark' ? 'glass text-[var(--color-light)]' : 'glass-light text-[var(--color-dark)]'} p-2 sm:p-4 md:p-6 shadow-[var(--shadow)] z-20 animate-fadeInUp`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold ${theme === 'dark' ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'} tracking-tight relative animate-slideInLeft`}>
          Portfolio
          <span className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-0 w-3/4 h-0.5 sm:h-1 md:h-1 bg-[var(--color-primary)] rounded-full opacity-80 blur-lg"></span>
        </h1>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {/* Dropdown สำหรับเลือก theme */}
          <Select
            options={themeOptions}
            value={themeOptions.find(option => option.value === theme)}
            onChange={handleThemeChange}
            styles={customStyles}
            className="w-24 sm:w-28 md:w-32 animate-fadeInUp"
            isSearchable={false}
            placeholder=""
          />

          {/* เมนูไอคอนสำหรับเดสก์ท็อป (ซ่อนในมือถือ) */}
          <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-14 text-lg sm:text-xl md:text-xl font-semibold items-center">
            {[
              { icon: AiFillHome, href: '#home', label: 'Home' },
              { icon: IoPerson, href: '#about', label: 'About' },
              { icon: RiFolderOpenFill, href: '#projects', label: 'Projects' },
              { icon: AiOutlineMail, href: '#contact', label: 'Contact' },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className={`relative group ${theme === 'dark' ? 'text-[var(--color-light)] hover:text-[var(--color-primary)] hover:animate-bounce-hover' : 'text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:animate-bounce-hover'} transition-all duration-600 p-2 sm:p-3 md:p-4 rounded-full hover:bg-${theme === 'dark' ? '[var(--color-light)]/15' : '[var(--color-dark)]/10'}`}
                >
                  <item.icon className="text-lg sm:text-xl md:text-2xl animate-float" />
                  <span className="absolute inset-x-1 sm:inset-x-2 md:inset-x-3 bottom-0 h-0.5 sm:h-1 md:h-1 bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-600 rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* ปุ่ม Hamburger/ปิด สำหรับมือถือ (ขวาสุด) */}
          <button
            className={`md:hidden p-4 sm:p-6 rounded-full bg-[var(--color-primary)]/30 hover:bg-[var(--color-primary)] hover:text-[var(--color-light)] hover:animate-scale-hover transition-all duration-600 z-30`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Toggle menu'}
          >
            {isOpen ? <FaTimes className="text-2xl sm:text-3xl" /> : <FaBars className="text-2xl sm:text-3xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden fixed top-0 left-0 w-3/4 h-full ${theme === 'dark' ? 'bg-[rgba(0,0,0,0.5)] text-[var(--color-light)]' : 'bg-[rgba(255,255,255,0.2)] text-[var(--color-dark)]'} p-4 sm:p-6 shadow-[var(--shadow)] slide-in backdrop-blur-md`}
        >
          <div className="flex flex-col items-start">
            {/* รูปโปรไฟล์และชื่อ */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={img01}
                alt="Profile"
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[var(--color-primary)] object-cover`}
              />
              <h2 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-[var(--color-light)]' : 'text-[var(--color-dark)]'}`}>Puridech</h2>
            </div>

            {/* ไอคอนโซเชียลมีเดีย */}
            <div className="flex gap-2 sm:gap-3 mb-4">
              <a href="https://github.com/puridech" target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-[var(--color-primary)] hover:text-[var(--color-light)]' : 'text-[var(--color-primary)] hover:text-[var(--color-dark)]'} transition-all duration-600`}>
                <FaGithub />
              </a>
              <a href="https://facebook.com/puridech" target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-[var(--color-primary)] hover:text-[var(--color-light)]' : 'text-[var(--color-primary)] hover:text-[var(--color-dark)]'} transition-all duration-600`}>
                <FaFacebook />
              </a>
              <a href="https://instagram.com/puridech" target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-[var(--color-primary)] hover:text-[var(--color-light)]' : 'text-[var(--color-primary)] hover:text-[var(--color-dark)]'} transition-all duration-600`}>
                <FaInstagram />
              </a>
              <a href="https://twitter.com/puridech" target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-[var(--color-primary)] hover:text-[var(--color-light)]' : 'text-[var(--color-primary)] hover:text-[var(--color-dark)]'} transition-all duration-600`}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/in/puridech" target="_blank" rel="noopener noreferrer" className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-[var(--color-primary)] hover:text-[var(--color-light)]' : 'text-[var(--color-primary)] hover:text-[var(--color-dark)]'} transition-all duration-600`}>
                <FaLinkedin />
              </a>
            </div>

            {/* เมนู */}
            <ul className="flex flex-col gap-2 sm:gap-4 w-full">
              {[
                { icon: AiFillHome, href: '#home', label: 'Home' },
                { icon: IoPerson, href: '#about', label: 'About' },
                { icon: RiFolderOpenFill, href: '#projects', label: 'Projects' },
                { icon: AiOutlineMail, href: '#contact', label: 'Contact' },
              ].map((item, i) => (
                <li key={i} onClick={() => setIsOpen(false)}>
                  <a
                    href={item.href}
                    className={`relative group flex items-center gap-2 ${theme === 'dark' ? 'text-[var(--color-light)] hover:text-[var(--color-primary)] hover:animate-bounce-hover' : 'text-[var(--color-dark)] hover:text-[var(--color-primary)] hover:animate-bounce-hover'} transition-all duration-600 py-2 sm:py-3 px-4 rounded`}
                  >
                    <item.icon className="text-lg sm:text-xl" />
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 sm:h-1 bg-[var(--color-primary)] group-hover:w-full transition-all duration-600 rounded-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;