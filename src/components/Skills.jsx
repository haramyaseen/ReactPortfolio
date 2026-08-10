import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    description:
      "Building responsive, interactive and visually polished web experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "Responsive Design",
    ],
  },

  {
    number: "02",
    title: "BACKEND",
    description:
      "Developing structured applications and management systems with reliable backend technologies.",
    skills: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework",
      "REST APIs",
    ],
  },

  {
    number: "03",
    title: "MOBILE",
    description:
      "Creating modern mobile experiences with Flutter and connected backend services.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Maps",
      "API Integration",
    ],
  },

  {
    number: "04",
    title: "CREATIVE",
    description:
      "Combining development with visual design to create stronger digital experiences.",
    skills: [
      "Graphic Design",
      "Photoshop",
      "UI Design",
      "Social Media Design",
      "Visual Branding",
    ],
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =================================
         HEADER REVEAL
      ================================= */

      gsap.from(".skills-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
      });

      gsap.from(".skills-heading span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 80%",
        },
      });


      /* =================================
         INTRO
      ================================= */

      gsap.from(".skills-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".skills-intro",
          start: "top 85%",
        },
      });


      /* =================================
         BIG BACKGROUND TEXT
      ================================= */

      gsap.to(".skills-big-text", {
        xPercent: -18,

        scrollTrigger: {
          trigger: ".skills-section",

          start: "top bottom",

          end: "bottom top",

          scrub: 2,
        },
      });


      /* =================================
         SKILL CARDS
      ================================= */

      gsap.utils
        .toArray(".skill-group")
        .forEach((card, index) => {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            rotateX: 12,
            duration: 1,

            delay: index * 0.08,

            ease: "power4.out",

            scrollTrigger: {
              trigger: card,

              start: "top 82%",
            },
          });
        });


      /* =================================
         CARD NUMBERS
      ================================= */

      gsap.utils
        .toArray(".skill-group-number")
        .forEach((number) => {
          gsap.from(number, {
            scale: 1.8,
            opacity: 0,

            duration: 1,

            ease: "power4.out",

            scrollTrigger: {
              trigger: number,

              start: "top 85%",
            },
          });
        });


      /* =================================
         SKILL PILLS
      ================================= */

      gsap.utils
        .toArray(".skill-pill")
        .forEach((pill, index) => {
          gsap.from(pill, {
            scale: 0.7,
            opacity: 0,

            duration: 0.5,

            delay: index * 0.03,

            ease: "back.out(1.7)",

            scrollTrigger: {
              trigger: pill,

              start: "top 90%",
            },
          });
        });


      /* =================================
         CENTER H
      ================================= */

      gsap.to(".skills-center-letter", {
        rotate: 360,

        duration: 25,

        repeat: -1,

        ease: "none",
      });


      /* =================================
         FLOATING ORBS
      ================================= */

      gsap.to(".skills-orb-one", {
        y: -35,
        x: 20,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });


      gsap.to(".skills-orb-two", {
        y: 30,
        x: -25,

        duration: 5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });


      /* =================================
         MOUSE PARALLAX
      ================================= */

      const handleMouseMove = (event) => {
        const section =
          sectionRef.current;

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        gsap.to(".skills-center-letter", {
          x: x * 25,
          y: y * 25,

          duration: 1,

          ease: "power3.out",
        });

        gsap.to(".skills-orb-one", {
          x: x * 60,
          y: y * 40,

          duration: 1.5,

          ease: "power3.out",
        });

        gsap.to(".skills-orb-two", {
          x: x * -50,
          y: y * -35,

          duration: 1.5,

          ease: "power3.out",
        });
      };

      sectionRef.current?.addEventListener(
        "mousemove",
        handleMouseMove
      );

      return () => {
        sectionRef.current?.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="skills-section"
      id="skills"
    >

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="skills-big-text">
        EXPERTISE
      </div>

      <div className="skills-orb skills-orb-one"></div>

      <div className="skills-orb skills-orb-two"></div>


      {/* =================================
          HEADER
      ================================= */}

      <div className="skills-header">

        <div className="skills-eyebrow">
          <span>04</span>
          SKILLS & EXPERTISE
        </div>


        <h2 className="skills-heading">
          <span>
            WHAT
          </span>

          <span>
            I
          </span>

          <span>
            CREATE.
          </span>
        </h2>


        <p className="skills-intro">
          I work across development and
          visual design — combining clean
          code, creative thinking and
          interactive experiences to build
          digital products that feel as good
          as they work.
        </p>

      </div>


      {/* =================================
          SKILLS CENTER
      ================================= */}

      <div className="skills-visual">

        <div className="skills-center-ring">

          <div className="skills-center-letter">
            H
          </div>

        </div>

        <span className="skills-floating-label top">
          CODE
        </span>

        <span className="skills-floating-label right">
          DESIGN
        </span>

        <span className="skills-floating-label bottom">
          CREATE
        </span>

        <span className="skills-floating-label left">
          BUILD
        </span>

      </div>


      {/* =================================
          SKILL GROUPS
      ================================= */}

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <article
            className="skill-group"
            key={group.number}
          >

            <div className="skill-group-number">
              {group.number}
            </div>


            <div className="skill-group-top">

              <span>
                EXPERTISE
              </span>

              <span>
                0{group.number}
              </span>

            </div>


            <h3>
              {group.title}
            </h3>


            <p>
              {group.description}
            </p>


            <div className="skill-pills">

              {group.skills.map(
                (skill) => (
                  <span
                    className="skill-pill"
                    key={skill}
                  >
                    {skill}
                  </span>
                )
              )}

            </div>


            <div className="skill-card-line"></div>

          </article>
        ))}

      </div>


      {/* =================================
          BOTTOM STATEMENT
      ================================= */}

      <div className="skills-bottom">

        <span>
          DEVELOPMENT × DESIGN
        </span>

        <h3>
          MORE THAN
          <br />

          <strong>
            JUST CODE.
          </strong>
        </h3>

        <p>
          Every project is an opportunity
          to combine technology with
          creativity.
        </p>

      </div>

    </section>
  );
}

export default Skills;