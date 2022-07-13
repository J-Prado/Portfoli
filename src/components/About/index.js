import { useEffect, useState } from 'react';
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align="justify">
            I'm a Petroleum Engineer, Chemical Engineering Student that wanted
            to go beyond, and now became a FullStack Developer. As a developer,
            I look forward my first opportunity to work with an IT company where
            I could learn about the latest technologies on challenging and
            diverse projects.
          </p>
          <p align="justify">
            As full stack developer now I can handle technologies as:
          </p>
          <ul className="list">
            <li>NodeJs</li>
            <li>Express</li>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>Sequelize</li>
          </ul>
          <p align="justify">
            {' '}
            I can also deal with SCRUM methodology as it is an important skill
            that everyone in IT industry must know. I'm confident, naturally
            curious, and perpetually working on improving my know-how.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
