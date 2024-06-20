import React from 'react';
import Logo1 from '../assets/logoItems/logoHtml.svg';
import Logo2 from '../assets/logoItems/logoJavascript.svg';
import Logo3 from '../assets/logoItems/logoReact.svg';
import Logo4 from '../assets/logoItems/logoVite.svg';
import Logo5 from '../assets/logoItems/logoCss.svg';
import Logo6 from '../assets/logoItems/logoSass.svg';
import Logo7 from '../assets/logoItems/logoTailwind.svg';
import Logo8 from '../assets/logoItems/logoTypescript.svg';
import Logo9 from '../assets/logoItems/logoRedux.svg';
import Logo10 from '../assets/logoItems/logoNode.svg';
import Logo11 from '../assets/logoItems/logoMongodb.svg';
import Logo12 from '../assets/logoItems/logoGit.svg';
import Logo13 from '../assets/logoItems/logoGithub.svg';
import Logo14 from '../assets/logoItems/logoFigma.svg';
import Logo15 from '../assets/logoItems/logoNotion.svg';
import Logo16 from '../assets/logoItems/logoAgile.svg';

const items = [
    { logo: Logo1, alt: 'Logo 1', name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { logo: Logo2, alt: 'Logo 2', name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { logo: Logo3, alt: 'Logo 3', name: 'React', link: 'https://reactjs.org/' },
    { logo: Logo4, alt: 'Logo 4', name: 'Vite', link: 'https://vitejs.dev/' },
    { logo: Logo5, alt: 'Logo 5', name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { logo: Logo6, alt: 'Logo 6', name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
    { logo: Logo7, alt: 'Logo 7', name: 'Sass', link: 'https://sass-lang.com/' },
    { logo: Logo8, alt: 'Logo 8', name: 'Typescript', link: 'https://www.typescriptlang.org/' },
    { logo: Logo9, alt: 'Logo 9', name: 'Redux', link: 'https://redux.js.org/' },
    { logo: Logo10, alt: 'Logo 16', name: 'Node.js', link: 'https://nodejs.org/' },
    { logo: Logo11, alt: 'Logo 8', name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { logo: Logo12, alt: 'Logo 6', name: 'Git', link: 'https://git-scm.com/' },
    { logo: Logo13, alt: 'Logo 7', name: 'GitHub', link: 'https://github.com/' },
    { logo: Logo14, alt: 'Logo 9', name: 'Figma', link: 'https://www.figma.com/' },
    { logo: Logo15, alt: 'Logo 10', name: 'Notion', link: 'https://www.notion.so/' },
    { logo: Logo16, alt: 'Logo 12', name: 'Agile', link: 'https://www.agilealliance.org/agile101/' },
];

const indexClasses = {
    0: ['border-none-left border-none-right border-none-bottom border-none-top border-cbr-gradient'],
    1: ['border-none-top border-t-gradient border-none-bottom'],
    2: ['border-none-top border-t-gradient border-none-bottom'],
    3: ['border-none-right border-none-top border-cbl-gradient border-none-left border-none-bottom'],
    4: ['border-none-left border-tr-gradient border-none-right'],
    5: ['red-border'],
    6: ['red-border'],
    7: ['border-none-right border-tl-gradient border-none-left'],
    8: ['border-none-left border-tr-gradient border-none-right'],
    9: ['red-border'],
    10: ['red-border'],
    11: ['border-none-right border-r-gradient border-none-left'],
    12: ['border-none-left', 'border-none-bottom border-cr-gradient border-cbr-gradient border-none-top'],
    13: ['border-none-bottom border-b-gradient border-none-top'],
    14: ['border-none-bottom border-b-gradient border-none-top'],
    15: ['border-none-bottom border-none-top', 'border-none-right border-cl-gradient'],
};

const defaultClasses = ['red-border'];

const getGridItemClasses = (index) => {
    const classes = indexClasses[index] || defaultClasses;
    return classes.join(' ');
};

const Items = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-0">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`grid-item ${getGridItemClasses(index)}`}
                >
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative block w-full h-full transform transition-transform duration-300 hover:scale-125">
                        <img src={item.logo} alt={item.alt} className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 m-5 md:m-10 lg:m-20 " />
                        <span className="item-name absolute inset-1 md:inset-5 lg:inset-9 flex justify-center items-end opacity-0 transition-opacity duration-300">{item.name}</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Items;