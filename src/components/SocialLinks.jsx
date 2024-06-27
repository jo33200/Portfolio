import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = ({ className }) => {
  return (
    <div className={`flex space-x-4 sm:gap-5 ${className}`}>
      <a
        href="https://github.com/jo33200"
        alt="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/torres-jordan/" 
        alt="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
};

export default SocialLinks;