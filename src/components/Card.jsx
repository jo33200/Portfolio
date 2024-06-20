import PropTypes from 'prop-types';

const Card = ({ text, backgroundImage, link, isActive, onMouseEnter }) => {
  const createMarkup = () => {
    return { __html: text };
  };

  return (
    <a
      href={link}
      className={`relative w-full lg:w-1/4 h-[650px] md:h-full object-scale-down bg-cover bg-center md:transition-transform md:duration-300 ${isActive ? 'md:scale-x-125 md:scale-y-110 mdz-10 md:cursor-pointer' : ''} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseEnter={onMouseEnter}
    >
      <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4 ${isActive ? 'block' : 'hidden'} hover:bg-opacity-75`}>
        <h2 dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </a>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default Card;