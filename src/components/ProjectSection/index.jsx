import gsap from "gsap";
import { useEffect } from "react";

import { PROJECTS } from "../../content/data";

import "./ProjectSection.css";

const ProjectSection = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.from("#proj-heading", {
      opacity: 0,
      duration: 2,
      x: -100,
    });
  }, []);
  return (
    <section id="projects" className="projects">
      <header>
        <h2 className="heading" id="proj-heading">
          Projects
        </h2>
      </header>
      <main>
        <article className="proj-cont">
          {PROJECTS.map(({ link, img, title, desc }, index) => (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={link}
              className="proj"
              key={index}
            >
              <img src={img} alt="Project Thumbnail" className="proj-img" />
              <h3 className="proj-heading orange">{title}</h3>
              <p className="proj-desc">{desc}</p>
            </a>
          ))}
        </article>
      </main>
    </section>
  );
};

export default ProjectSection;
