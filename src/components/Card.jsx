import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaHandPointer } from 'react-icons/fa';

const Card = ({ text, backgroundImage, link, onMouseEnter }) => {
  const [isHovered, setIsHovered] = useState(false); // État pour gérer le survol initial
  const [isVisible, setIsVisible] = useState(false); // État pour gérer la visibilité de la carte

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardRef = useRef();

  useEffect(() => {
    const currentRef = cardRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // La carte est visible dans la vue
          } else {
            setIsVisible(false); // La carte n'est pas visible dans la vue
          }
        });
      },
      {
        threshold: 0.5, // Ajustez ce seuil selon vos besoins
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const createMarkup = () => {
    const parts = text.split('<br/>');
    let firstPart = parts[0];
    let secondPart = parts[1];
    let thirdPart = parts[2];

    if (firstPart === '724 Events:') {
      secondPart = ` ${secondPart}`;
      thirdPart = ` ${thirdPart}`;
    }

    return {
      __html: `
        ${firstPart}<br/><br/>
        <em>${secondPart}</em><br/><br/>
        ${thirdPart}
      `
    };
  };

  return (
    <div className='h-auto lg:h-[800px] xl:h-auto w-full flex flex-col lg:flex-col items-center justify-between lg:gap-20 border-b-card lg:border-none'>
      <a
        href={link}
        ref={cardRef}
        className={`relative w-[300px] lg:w-full h-[800px] bg-cover bg-center md:transition-transform md:duration-300 ${isHovered && isVisible ? 'scale-110' : ''} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Conteneur pour l'icône et le texte */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 ${isHovered && isVisible ? 'opacity-100 hover:bg-opacity-50' : 'opacity-0'}`}>
          <div className="text-white text-center flex flex-col items-center justify-center">
            <FaHandPointer className="w-12 h-12 mx-auto" />
            <p className="mt-2">Lien vers GitHub</p>
          </div>
        </div>
      </a>
      <div className=" md:w-4/5 lg:h-[600px] xl:h-[350px] text-center p-4 mt-4 lg:mt-0 bg-neutral-950 text-white">
        <h2 dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default Card;