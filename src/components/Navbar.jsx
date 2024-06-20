import { useState } from 'react';
import Name from '../assets/name.svg';
import SocialLinks from './SocialLinks';
import ContactModal from './ContactModal';

function Navbar() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <header className="min-w-full bg-neutral-950 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between h-32 md:h-16 fixed top-0 z-50 py-2">
      <nav className="min-w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between sm:px-5 gap-5">

        <a href='#Home'><img src={Name} alt="mon nom" className='w-60 h-10' /></a>
        
        <ul className='text-gray-500 font-bold text-lg flex items-center justify-center space-x-4 sm:gap-5'>
          <li className='hover:text-white cursor-pointer'><a href='#Portfolio'>Portfolio</a></li>
          <li className='hover:text-white cursor-pointer'><a href="#Skill">Skills</a></li>
          <li 
            className='hover:text-white cursor-pointer' 
            onClick={() => setContactModalOpen(true)}
          >
            Contact
          </li>
          <SocialLinks />
        </ul>
      </nav>
      {isContactModalOpen && <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />}
    </header>
  );
}

export default Navbar;