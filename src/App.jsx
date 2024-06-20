import React, { useState } from 'react';
import Ordi from './assets/ordi.webp';
import Card from './components/Card';
import Items from './components/Items';

// Importer les images des cartes
import url1 from './assets/imgProject/argentBank.png';
import url2 from './assets/imgProject/724Events.png';
import url3 from './assets/imgProject/Kasa.png';
import url4 from './assets/imgProject/ninaCarducci.png';
import url5 from './assets/imgProject/sophieBluel.png';

const App = () => {
  const cardsData = [
    { text: 'Argent Bank<br /> langage: React.js, Redux toolkit<br/> Projet qui consiste à implémenter redux dans une application sécurisé.', backgroundImage: url1, link: 'https://github.com/jo33200/ArgentBank' },
    { text: "724 Events:<br/> Débugger le site d'une agence d'évènementielle<br/> rédiger le cahier de recettes<br /> tester le code", backgroundImage: url2, link: 'https://github.com/jo33200/724events' },
    { text: 'Kasa<br/>Langage: React.js<br/>Créez une application web de location immobilière', backgroundImage: url3, link: 'https://github.com/jo33200/Kasa' },
    { text: "site d'une Photographe Nina Carducci<br/>SEO et Performance<br/> Optimisation du référencement et des performances", backgroundImage: url4, link: 'https://github.com/jo33200/nina-carducci' },
    { text: "Portfolio Sophie Bluel<br/>Langage: JavaScript<br/> création d'une page web dynamique en communiquant avec une API", backgroundImage: url5, link: 'https://github.com/jo33200/Portfolio-sophie-bluel' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full h-auto flex flex-col justify-start items-center gap-20 lg:gap-20 mt-[144px] md:mt-[68px] lg:mt-[100px]'>
      <section id='Home' className='relative w-10/12 h-[450px] lg:h-[650px] xl:h-[900px] flex justify-center items-center'>
        <img src={Ordi} alt="ordinateur" className='background absolute w-full h-[400px] lg:w-full lg:h-[600px] xl:h-[850px] top-0' />
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl absolute lg:left-50 top-0 lg:top-0">Développeur Front-End</h1>
        <p className="text-white text-lg absolute top-[400px] left-50 lg:left-50 lg:top-12">
          Ex-militaire, développeur web rigoureux et créatif, je suis prêt à relever vos défis.<br/> 
          Je me suis spécialisé dans le développement front-end grâce à la formation intégrateur web chez Openclassrooms.<br/>
          Je recherche un poste de développeur front-end junior pour continuer de me développer et pouvoir continuer de monter en compétences.
          </p>
      </section>

      <section id='Portfolio' className='w-10/12 h-auto md:h-96 xl:h-[891px] flex justify-center items-center'>
        <div className="w-full h-full flex flex-col md:flex-row gap-10 space-x-4 justify-center items-center bg-neutral-950 p-10">
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