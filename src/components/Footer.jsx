import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // ATUALIZE COM SEUS LINKS
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/RomuloPF' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/RomuloPF' },
    { icon: FaInstagram, href: 'https://www.instagram.com/daquebrada.dev' },
  ];

  return (
    <footer className="w-full py-8 text-center border-t border-purple-neon/20 mt-16">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-neon text-2xl transition-colors duration-300"
          >
            <link.icon />
          </a>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </p>
      <p className="text-sm text-purple-neon mt-2">
        Feito por <span className="font-bold text-blue-neon">@daquebrada.dev</span> 💻
      </p>
    </footer>
  );
};

export default Footer;