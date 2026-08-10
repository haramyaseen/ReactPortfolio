import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "HOTEL",
    subtitle: "MANAGEMENT SYSTEM",
    type: "REACT APPLICATION",
    description:
      "A complete hotel management experience designed around structured workflows, modern interfaces and responsive user interaction.",
    tech: ["React", "JavaScript", "CSS", "UI/UX"],
    image: "/projects/hotel.png",
    link: "",
  },

  {
    number: "02",
    title: "HER",
    subtitle: "SHIELD",
    type: "WOMEN SAFETY APPLICATION",
    description:
      "A women safety application featuring SOS protection, live location sharing, fake calls, check-ins, emergency contacts and safety-focused tools.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Maps",
      "Node.js",
      "MongoDB",
    ],
    image: "/projects/hershield.png",
    link: "",
  },

  {
    number: "03",
    title: "MALL",
    subtitle: "MANAGEMENT SYSTEM",
    type: "ASP.NET APPLICATION",
    description:
      "A structured management platform designed for mall operations, stores, services and administrative workflows.",
    tech: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "Bootstrap",
    ],
    image: "/projects/mall.png",
    link: "https://github.com/haramyaseen/SmartMallManagment",
  },

  {
    number: "04",
    title: "CURRENCY",
    subtitle: "CONVERTER",
    type: "FRONTEND APPLICATION",
    description:
      "A clean and responsive currency conversion experience with API integration and a simple, intuitive interface.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "API",
    ],
    image: "/projects/currency.png",
    link: "https://sakina-saleem.github.io/CurrenSee/",
  },

  {
    number: "05",
    title: "TRAVEL",
    subtitle: "TRAVELGO",
    type: "FRONTEND WEBSITE",
    description:
      "A visually engaging travel website created around destinations, exploration and immersive browsing.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
    ],
    image: "/projects/travelgo.png",
    link: "https://haramyaseen.github.io/Travel-Website/",
  },

  {
    number: "06",
    title: "KIDS",
    subtitle: "KIDSZONE",
    type: "FRONTEND WEBSITE",
    description:
      "A playful web experience built around children's activities with a colorful visual interface and responsive layout.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI Design",
    ],
    image: "/projects/kidszone.png",
    link: "https://haramyaseen.github.io/Kids_Zone/",
  },

  {
    number: "07",
    title: "PETS",
    subtitle: "PETS HEAVEN",
    type: "FRONTEND WEBSITE",
    description:
      "A friendly pet-focused website combining visual storytelling, responsive design and a simple browsing experience.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
    ],
    image: "/projects/petsheaven.png",
    link: "https://haramyaseen.github.io/Pets-Heaven/",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        gsap.utils.toArray(".project-card");

      /* ================================
         SECTION HEADER
      ================================= */

      gsap.from(".projects-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
        },
      });

      gsap.from(".projects-heading span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
        },
      });

      gsap.from(".projects-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-intro",
          start: "top 85%",
        },
      });


      /* ================================
         PROJECT CARDS
      ================================= */

      cards.forEach((card, index) => {
        const image =
          card.querySelector(".project-image");

        const content =
          card.querySelector(".project-content");

        const number =
          card.querySelector(".project-number");

        const line =
          card.querySelector(".project-progress");


        /* CARD REVEAL */

        gsap.from(card, {
          y: 120,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        });


        /* IMAGE PARALLAX */

        gsap.fromTo(
          image,
          {
            scale: 1.25,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );


        /* CONTENT */

        gsap.from(content, {
          x: index % 2 === 0
            ? -70
            : 70,

          opacity: 0,

          duration: 1,

          ease: "power4.out",

          scrollTrigger: {
            trigger: card,

            start: "top 78%",
          },
        });


        /* NUMBER */

        gsap.from(number, {
          scale: 2,

          opacity: 0,

          duration: 1,

          ease: "power4.out",

          scrollTrigger: {
            trigger: card,

            start: "top 82%",
          },
        });


        /* PROGRESS LINE */

        gsap.fromTo(
          line,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,

            transformOrigin: "left",

            ease: "none",

            scrollTrigger: {
              trigger: card,

              start: "top 80%",

              end: "bottom 60%",

              scrub: 1,
            },
          }
        );


        /* ================================
           MOUSE IMAGE MOVEMENT
        ================================= */

        const moveImage = (e) => {
          const rect =
            card.getBoundingClientRect();

          const x =
            (e.clientX - rect.left) /
              rect.width -
            0.5;

          const y =
            (e.clientY - rect.top) /
              rect.height -
            0.5;

          gsap.to(image, {
            x: x * 25,
            y: y * 25,
            duration: 0.6,
            ease: "power3.out",
          });
        };


        const resetImage = () => {
          gsap.to(image, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        };


        card.addEventListener(
          "mousemove",
          moveImage
        );

        card.addEventListener(
          "mouseleave",
          resetImage
        );
      });


      /* ================================
         BIG BACKGROUND TEXT
      ================================= */

      gsap.to(".projects-big-text", {
        xPercent: -20,

        scrollTrigger: {
          trigger: ".projects-section",

          start: "top bottom",

          end: "bottom top",

          scrub: 2,
        },
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="projects-section"
      id="projects"
    >

      {/* BACKGROUND TEXT */}

      <div className="projects-big-text">
        SELECTED WORK
      </div>


      {/* HEADER */}

      <div className="projects-header">

        <div className="projects-eyebrow">
          <span>02</span>
          SELECTED WORK
        </div>


        <h2 className="projects-heading">

          <span>
            THINGS
          </span>

          <span>
            I'VE
          </span>

          <span>
            BUILT.
          </span>

        </h2>


        <p className="projects-intro">
          A collection of applications,
          management systems and websites
          created through code, creativity
          and problem solving.
        </p>

      </div>


      {/* PROJECT LIST */}

      <div className="projects-list">

        {projects.map((project, index) => (

          <article
            className={`project-card ${
              index % 2 !== 0
                ? "project-reverse"
                : ""
            }`}
            key={project.number}
          >

            {/* NUMBER */}

            <div className="project-number">
              {project.number}
            </div>


            {/* IMAGE */}

            <div className="project-image-wrapper">

              <div className="project-image-glow"></div>

              <img
                src={project.image}
                alt={`${project.title} ${project.subtitle}`}
                className="project-image"
              />


              <div className="project-image-overlay">
              </div>


              <a
                className={`project-view ${project.link ? "" : "disabled"}`}
                href={project.link || undefined}
                target="_blank"
                rel="noreferrer"
                aria-label={project.link ? `Open ${project.title}` : "No project link provided"}
                onClick={(e) => {
                  if (!project.link) e.preventDefault();
                }}
              >
                <span>
                  VIEW
                </span>

                <strong>
                  ↗
                </strong>
              </a>


              <div className="project-image-label">
                PROJECT {project.number}
              </div>

            </div>


            {/* CONTENT */}

            <div className="project-content">

              <div className="project-type">
                {project.type}
              </div>


              <h3>
                {project.title}
              </h3>


              <h4>
                {project.subtitle}
              </h4>


              <p>
                {project.description}
              </p>


              <div className="project-tech">

                {project.tech.map((item) => (

                  <span key={item}>
                    {item}
                  </span>

                ))}

              </div>


              <div className="project-footer">

                <span>
                  {project.number} / 07
                </span>

                <span>
                  CASE STUDY
                </span>

              </div>

            </div>


            {/* PROGRESS */}

            <div className="project-progress"></div>

          </article>

        ))}

      </div>


      {/* END */}

      <div className="projects-end">

        <span>
          MORE PROJECTS
        </span>

        <h3>
          STILL
          <br />

          <strong>
            BUILDING.
          </strong>
        </h3>

        <div className="projects-line"></div>

      </div>

    </section>
  );
}

export default Projects;