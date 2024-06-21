import { useState } from 'react';
import Ordi from './assets/ordi.webp';
import Card from './components/Card';
import Items from './components/Items';

// Importer les images des cartes
import url1 from './assets/imgProject/siteArgent.webp';
import url2 from './assets/imgProject/site724.webp';
import url3 from './assets/imgProject/siteKasa.webp';
import url4 from './assets/imgProject/siteNina.webp';
import url5 from './assets/imgProject/siteSophie.webp';

const App = () => {
  const cardsData = [
    { text: '<strong>Argent Bank</strong><br/>langage: React.js, Redux toolkit<br/> Projet qui consiste à implémenter redux dans une application sécurisé.', backgroundImage: url1, link: 'https://github.com/jo33200/ArgentBank' },
    { text: "<strong>724 Events:</strong><br/>Tests unitaires, d'intégration, fonctionnels<br/>Débugger le site d'une agence d'évènementielle et valider les test<br/> rédiger le cahier de recettes<br /> tester le code", backgroundImage: url2, link: 'https://github.com/jo33200/724events' },
    { text: '<strong>Kasa</strong><br/>Langage: React.js, API<br/>Créez une application web de location immobilière et récupérer les données via une API', backgroundImage: url3, link: 'https://github.com/jo33200/Kasa' },
    { text: "<strong>Nina Carducci</strong><br/>Lighthouse et Wave pour le SEO et les Performances<br/> Optimisation du référencement et des performances", backgroundImage: url4, link: 'https://github.com/jo33200/nina-carducci' },
    { text: "<strong>Portfolio Sophie Bluel</strong><br/>Langage: JavaScript<br/> création d'une page web dynamique en récupérant les données via une API dédiée", backgroundImage: url5, link: 'https://github.com/jo33200/Portfolio-sophie-bluel' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full h-auto flex flex-col justify-start items-center gap-32 md:gap-30 lg:gap-20 xl:gap-36 mt-[144px] md:mt-[68px] lg:mt-[100px]'>
    <section id='Home' className='w-10/12 h-auto lg:h-[750px] xl:h-[1000px] flex flex-col lg:flex-row justify-center items-center lg:relative'>
      <img src={Ordi} alt="ordinateur" className='w-full h-auto md:h-[400px] lg:w-full lg:h-[600px] xl:h-[850px] relative lg:absolute top-0' />
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-0 lg:absolute lg:left-50 top-0">Développeur Front-End</h1>
      <p className="text-white text-center text-lg mt-4 lg:mt-0 relative xl:absolute lg:top-[320px] xl:top-12 lg:left-50">
        Militaire en reconversion, développeur web rigoureux et créatif, je suis prêt à relever vos défis.<br/> 
        Je me suis spécialisé dans le développement front-end grâce à la formation intégrateur web chez Openclassrooms.<br/>
        Je recherche un poste de développeur front-end junior pour continuer de progresser et de monter en compétences.
      </p>
    </section>

      <section id='Portfolio' className='w-10/12 lg:w-full h-auto md:h-auto lg:h-auto xl:h-[891px] flex justify-center items-center'>
        <div className="w-full h-full xl:h-auto flex flex-col lg:flex-row lg:space-x-4 justify-center items-center bg-neutral-950 p-10 gap-20 lg:gap-0">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              text={card.text}
              backgroundImage={card.backgroundImage}
              link={card.link}
              isActive={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </section>

      <section id='Skill' className='w-full h-auto flex justify-center items-center mb-24'>
        <Items />
      </section>
    </div>
  );
};

export default App;