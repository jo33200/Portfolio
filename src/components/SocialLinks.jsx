import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = ({ className }) => {
  return (
    <div className={`flex space-x-4 gap-5 ${className}`}>
      <a
        href="https://github.com/jo33200"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/torres-jordan/" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;