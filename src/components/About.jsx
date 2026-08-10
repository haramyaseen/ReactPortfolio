import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================================
         MAIN REVEAL
      ================================= */

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      });

      introTl
        .from(".about-eyebrow", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".about-word",
          {
            yPercent: 120,
            opacity: 0,
            rotateX: -70,
            stagger: 0.12,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .from(
          ".about-copy",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      /* ================================
         GIANT NUMBER
      ================================= */

      gsap.from(".about-number", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          scrub: 1,
        },
        x: -200,
        opacity: 0,
        scale: 0.5,
      });

      /* ================================
         ORBIT
      ================================= */

      gsap.to(".orbit-system", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring.one", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring.two", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      /* ================================
         SCROLL ROTATION
      ================================= */

      gsap.to(".about-visual", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        rotateY: 8,
        rotateX: -4,
        y: -30,
      });

      /* ================================
         SKILL CHIPS
      ================================= */

      gsap.from(".skill-chip", {
        scrollTrigger: {
          trigger: ".skill-cloud",
          start: "top 80%",
        },
        scale: 0,
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      /* ================================
         CARDS
      ================================= */

      gsap.from(".experience-card", {
        scrollTrigger: {
          trigger: ".experience-grid",
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        rotateX: 15,
        stagger: 0.15,
        duration: 0.9,
        ease: "power4.out",
      });

      /* ================================
         COUNTERS
      ================================= */

      document
        .querySelectorAll(".counter")
        .forEach((counter) => {
          const target = Number(
            counter.dataset.target
          );

          const obj = { value: 0 };

          gsap.to(obj, {
            value: target,
            duration: 2,
            ease: "power2.out",

            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
            },

            onUpdate: () => {
              counter.textContent =
                Math.floor(obj.value);
            },
          });
        });

      /* ================================
         FLOATING
      ================================= */

      gsap.to(".float-a", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-b", {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-c", {
        y: -10,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ================================
         MOUSE PARALLAX
      ================================= */

      const move = (e) => {
        const x =
          e.clientX /
            window.innerWidth -
          0.5;

        const y =
          e.clientY /
            window.innerHeight -
          0.5;

        gsap.to(".about-visual", {
          x: x * 18,
          y: y * 18,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(".float-a", {
          x: x * 30,
          y: y * 25,
          duration: 1,
        });

        gsap.to(".float-b", {
          x: x * -25,
          y: y * -20,
          duration: 1.2,
        });

        gsap.to(".float-c", {
          x: x * 20,
          y: y * -25,
          duration: 1,
        });

        gsap.to(".cursor-glow", {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      window.addEventListener(
        "mousemove",
        move
      );

      /* ================================
         MAGNETIC CARDS
      ================================= */

      document
        .querySelectorAll(".experience-card")
        .forEach((card) => {
          card.addEventListener(
            "mousemove",
            (e) => {
              const rect =
                card.getBoundingClientRect();

              const x =
                e.clientX -
                rect.left -
                rect.width / 2;

              const y =
                e.clientY -
                rect.top -
                rect.height / 2;

              gsap.to(card, {
                rotateY: x * 0.04,
                rotateX: y * -0.04,
                duration: 0.4,
              });
            }
          );

          card.addEventListener(
            "mouseleave",
            () => {
              gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.6,
                ease: "power3.out",
              });
            }
          );
        });

      return () => {
        window.removeEventListener(
          "mousemove",
          move
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-section"
      id="about"
    >
      <div className="cursor-glow"></div>

      <div className="about-grid"></div>

      {/* ================================
          HEADER
      ================================= */}

      <div className="about-header">
        <div className="about-eyebrow">
          <span>01</span>
          GET TO KNOW ME
        </div>

        <h2 className="about-heading">
          <span className="about-word">
            MORE
          </span>

          <span className="about-word purple">
            THAN
          </span>

          <span className="about-word">
            CODE.
          </span>
        </h2>

        <p className="about-copy">
          I don't just build websites.
          I design experiences, develop
          systems and turn ideas into
          something people can actually
          interact with.
        </p>
      </div>

      {/* ================================
          MAIN VISUAL
      ================================= */}

      <div className="about-main">

        <div className="about-number">
          01
        </div>

        <div className="about-visual">

          <div className="orbit-system">

            <div className="orbit-ring one"></div>

            <div className="orbit-ring two"></div>

            <div className="orbit-ring three"></div>

            <div className="orbit-core">
              <span>HY</span>
            </div>

            <div className="orbit-dot dot-1">
              React
            </div>

            <div className="orbit-dot dot-2">
              .NET
            </div>

            <div className="orbit-dot dot-3">
              GSAP
            </div>

            <div className="orbit-dot dot-4">
              UI
            </div>

          </div>

          <div className="visual-caption">
            <span>CREATIVE</span>
            <strong>
              DEVELOPER
            </strong>
          </div>

          <div className="float-card float-a">
            <span>⚛</span>
            REACT
          </div>

          <div className="float-card float-b">
            <span>◆</span>
            ASP.NET
          </div>

          <div className="float-card float-c">
            <span>✦</span>
            DESIGN
          </div>

        </div>

        {/* ================================
            COPY
        ================================= */}

        <div className="about-details">

          <div className="detail-label">
            WHO I AM
          </div>

          <h3>
            Developer
            <span>+</span>
            Designer
          </h3>

          <p>
            I'm Haram Yaseen — a frontend
            developer, ASP.NET developer
            and graphic designer.

            <br />
            <br />

            My strength is combining
            <b> visual creativity </b>
            with
            <b> technical development </b>
            to create digital products
            that look impressive and
            actually work.
          </p>

          <div className="skill-cloud">

            <div className="skill-chip">
              HTML
            </div>

            <div className="skill-chip">
              CSS
            </div>

            <div className="skill-chip">
              JavaScript
            </div>

            <div className="skill-chip">
              React
            </div>

            <div className="skill-chip">
              GSAP
            </div>

            <div className="skill-chip">
              Three.js
            </div>

            <div className="skill-chip">
              ASP.NET
            </div>

            <div className="skill-chip">
              C#
            </div>

            <div className="skill-chip">
              SQL
            </div>

            <div className="skill-chip">
              Graphic Design
            </div>

          </div>

        </div>
      </div>

      {/* ================================
          EXPERIENCE NUMBERS
      ================================= */}

      <div className="experience-grid">

        <div className="experience-card">

          <span className="card-index">
            01
          </span>

          <strong>
            <span
              className="counter"
              data-target="10"
            >
              0
            </span>
            +
          </strong>

          <small>
            PROJECTS
          </small>

          <p>
            Websites, management
            systems & digital
            experiences.
          </p>

        </div>

        <div className="experience-card">

          <span className="card-index">
            02
          </span>

          <strong>
            <span
              className="counter"
              data-target="3"
            >
              0
            </span>
            +
          </strong>

          <small>
            CERTIFICATIONS
          </small>

          <p>
            Continuous learning,
            development and
            creative growth.
          </p>

        </div>

        <div className="experience-card">

          <span className="card-index">
            03
          </span>

          <strong>
            <span
              className="counter"
              data-target="2"
            >
              0
            </span>
            +
          </strong>

          <small>
            YEARS EXPERIENCE
          </small>

          <p>
            Teaching, development,
            design and freelance
            work.
          </p>

        </div>

        <div className="experience-card accent-card">

          <span className="card-index">
            04
          </span>

          <strong>
            ∞
          </strong>

          <small>
            CURIOSITY
          </small>

          <p>
            Always learning.
            Always building.
            Always experimenting.
          </p>

        </div>

      </div>

      {/* ================================
          MARQUEE
      ================================= */}

      <div className="about-marquee">
        <div>
          DESIGN • DEVELOP • CREATE •
          EXPERIENCE • DESIGN • DEVELOP •
          CREATE • EXPERIENCE •
        </div>
      </div>

    </section>
  );
}

export default About;