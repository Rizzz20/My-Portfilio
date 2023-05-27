import React, { useState } from "react";
import "./Home.css";

// ICON
import { AiOutlineLink, AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiGitBranch,
  DiPhp,
  DiPython,
  DiNodejs,
} from "react-icons/di";
import { SiMysql, SiFirebase } from "react-icons/si";

// IMAGE
import NizamCell from "../../assets/img/NizamCell.png";
import Sunik from "../../assets/img/Sunik.png";
import Tanjiro from "../../assets/img/Tanjiro.jpeg";
import Ace from "../../assets/img/Ace.jpg";
import Hasta from "../../assets/img/Hasta.jpg";
import Luffy from "../../assets/img/Luffy.jpg";

const Home = () => {
  // TOGGLE
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Footer Auto Year
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="filters container">
      <ul className="filters__content">
        <button
          className={
            toggleState === 1
              ? "filters__button button__active"
              : "filters__button "
          }
          onClick={() => toggleTab(1)}
        >
          Projects
        </button>

        <button
          className={
            toggleState === 2
              ? "filters__button button__active"
              : "filters__button "
          }
          onClick={() => toggleTab(2)}
        >
          Skills
        </button>
      </ul>
      {/* Filter Tabs */}
      <div className="filters__sections">
        {/* Projects */}
        <div
          className={
            toggleState === 1
              ? "projects__content grid active"
              : "projects__content grid"
          }
          data-content
        >
          {/* Nizam Cellular Leuwiliang */}
          <article className="projects__card">
            <img src={NizamCell} alt="" className="projects__img" />

            {/* Project Modal */}
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">
                  Nizam Cellular Leuwiliang
                </span>
                <h3 className="projects__title">Website Businis</h3>
                <a
                  href="https://nizamcellular.vercel.app/"
                  target="_blank"
                  className="projects__button button button__small"
                >
                  <AiOutlineLink className="link__icon" />
                </a>
              </div>
            </div>
          </article>

          {/* Sunik & Johan Cell */}
          <article className="projects__card">
            <img src={Sunik} alt="" className="projects__img" />

            {/* Project Modal */}
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">Sunik & Johan Cell</span>
                <h3 className="projects__title">Website Businis</h3>
                <a
                  href="https://sunik.vercel.app/"
                  target="_blank"
                  className="projects__button button button__small"
                >
                  <AiOutlineLink className="link__icon" />
                </a>
              </div>
            </div>
          </article>

          {/* Progress */}
          <article className="projects__card">
            <img src={Tanjiro} alt="" className="projects__img" />

            {/* Project Modal */}
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">In progress</span>
                <h3 className="projects__title">Will release</h3>
                <a href="#" className="projects__button button button__small">
                  <AiOutlineLink className="link__icon" />
                </a>
              </div>
            </div>
          </article>

          {/* Progress */}
          <article className="projects__card">
            <img src={Ace} alt="" className="projects__img" />

            {/* Project Modal */}
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">In progress</span>
                <h3 className="projects__title">Will release</h3>
                <a href="#" className="projects__button button button__small">
                  <AiOutlineLink className="link__icon" />
                </a>
              </div>
            </div>
          </article>

          {/* Progress */}
          <article className="projects__card">
            <img src={Hasta} alt="" className="projects__img" />

            {/* Project Modal */}
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">In progress</span>
                <h3 className="projects__title">Will release</h3>
                <a href="#" className="projects__button button button__small">
                  <AiOutlineLink className="link__icon" />
                </a>
              </div>
            </div>
          </article>

          {/* Progress */}
          <article className="projects__card">
            <img src={Luffy} alt="" className="projects__img" />

            {/* Project Modal */}
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">In progress</span>
                <h3 className="projects__title">Will release</h3>
                <a href="#" className="projects__button button button__small">
                  <AiOutlineLink className="link__icon" />
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* Skills */}
        <div
          className={
            toggleState === 2
              ? "skills__content grid active"
              : "skills__content grid"
          }
          data-content
        >
          {/* Frontend developer */}
          <div className="skills__area">
            <h3 className="skills__title">Frontend developer</h3>

            {/* SKills Box */}
            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <AiFillHtml5 className="skills__icon" />

                  <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Basic</span>
                  </div>
                </div>

                <div className="skills__data">
                  <DiCss3 className="skills__icon" />

                  <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
                </div>

                <div className="skills__data">
                  <DiJavascript1 className="skills__icon" />

                  <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="skills__group">
                <div className="skills__data">
                  <DiReact className="skills__icon" />

                  <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>

                <div className="skills__data">
                  <DiBootstrap className="skills__icon" />

                  <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>

                <div className="skills__data">
                  <DiGitBranch className="skills__icon" />

                  <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend developer */}
          <div className="skills__area">
            <h3 className="skills__title">Backend developer</h3>

            {/* SKills Box */}
            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <DiPhp className="skills__icon" />

                  <div>
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>

                <div className="skills__data">
                  <SiMysql className="skills__icon" />

                  <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
                </div>

                <div className="skills__data">
                  <SiFirebase className="skills__icon" />

                  <div>
                    <h3 className="skills__name">Firebase</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="skills__group">
                <div className="skills__data">
                  <DiPython className="skills__icon" />

                  <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Basic</span>
                  </div>
                </div>

                <div className="skills__data">
                  <DiNodejs className="skills__icon" />

                  <div>
                    <h3 className="skills__name">Node JS</h3>
                    <span className="skills__level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer container">
        <span className="footer__copy">
          &copy; Copyright {year} - Developed by Rizki Ramadhan. All right
          reservered.
        </span>
      </footer>
    </section>
  );
};

export default Home;
