import gsap from "gsap";
import { useEffect } from "react";

import landingIllustration from "../../assets/vectors/landing-il.svg";
import "./LandingSection.css";

const LandingSection = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.from(".main-heading", { opacity: 0, duration: 1.5, x: -100 }).from(
      ".sub-heading",
      { opacity: 0, duration: 1.5, x: -100 }
    );
  }, []);
  return (
    <section id="landing">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <a data-scroll href="#landing">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a data-scroll href="#about">
                About
              </a>
            </li>
            <li className="nav-link">
              <a data-scroll href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-link">
              <a data-scroll href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-link contact">
              <a href="mailto:aderinlokunoluwaseun@gmail.com">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="landing">
        <article>
          <h2 className="main-heading">
            Hey, I am <span className="orange">Oluwaseun Aderinlokun</span>
          </h2>
          <h3 className="sub-heading">
            I am a <span className="green">MERN Stack Developer</span>
          </h3>
        </article>
        <img
          src={landingIllustration}
          alt="Landing Illustration"
          className="landing-il"
        />
        <a data-scroll href="#projects" className="chevron">
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </a>
      </main>
    </section>
  );
};

export default LandingSection;
