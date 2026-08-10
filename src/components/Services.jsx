import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "FRONTEND",
    subtitle: "WEB DEVELOPMENT",
    description:
      "Responsive and interactive websites built with modern frontend technologies, clean layouts and attention to user experience.",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "ASP.NET",
    subtitle: "APPLICATION DEVELOPMENT",
    description:
      "Structured web applications and management systems developed with ASP.NET Core, C#, SQL Server and Entity Framework.",
    skills: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework",
      "APIs",
    ],
  },
  {
    number: "03",
    title: "GRAPHIC",
    subtitle: "DESIGN",
    description:
      "Creative digital visuals including social media posts, promotional graphics, branding materials and visual content.",
    skills: [
      "Photoshop",
      "Social Media",
      "Branding",
      "Post Design",
      "Visuals",
    ],
  },
  {
    number: "04",
    title: "DIGITAL",
    subtitle: "SOLUTIONS",
    description:
      "From idea to implementation — combining development, design and practical digital skills to create complete solutions.",
    skills: [
      "UI/UX",
      "Problem Solving",
      "Project Planning",
      "Creative Direction",
    ],
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* HEADER */

      gsap.from(".services-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      });

      gsap.from(".services-heading span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
        },
      });

      gsap.from(".services-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 85%",
        },
      });


      /* BIG BACKGROUND TEXT */

      gsap.to(".services-big-text", {
        xPercent: -20,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });


      /* SERVICE CARDS */

      gsap.utils
        .toArray(".service-card")
        .forEach((card, index) => {

          gsap.from(card, {
            y: 100,
            opacity: 0,
            rotateX: 10,
            duration: 1,
            delay: index * 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          });

          const number =
            card.querySelector(".service-number");

          gsap.from(number, {
            scale: 1.7,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          });
        });


      /* FLOATING ORB */

      gsap.to(".services-orb", {
        y: -35,
        x: 25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      /* MOUSE PARALLAX */

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

        gsap.to(".services-orb", {
          x: x * 50,
          y: y * 40,
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
      className="services-section"
      id="services"
    >

      {/* BACKGROUND */}

      <div className="services-big-text">
        SERVICES
      </div>

      <div className="services-orb"></div>


      {/* HEADER */}

      <div className="services-header">

        <div className="services-eyebrow">
          <span>06</span>
          WHAT I DO
        </div>

        <h2 className="services-heading">

          <span>
            BUILT
          </span>

          <span>
            FOR
          </span>

          <span>
            IMPACT.
          </span>

        </h2>

        <p className="services-intro">
          I combine development, design and
          practical digital skills to turn ideas
          into functional and visually engaging
          experiences.
        </p>

      </div>


      {/* SERVICES */}

      <div className="services-list">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.number}
          >

            <div className="service-number">
              {service.number}
            </div>


            <div className="service-card-content">

              <div className="service-top">

                <span>
                  SERVICE
                </span>

                <span>
                  {service.number}
                </span>

              </div>


              <h3>
                {service.title}
              </h3>

              <h4>
                {service.subtitle}
              </h4>


              <p>
                {service.description}
              </p>


              <div className="service-skills">

                {service.skills.map(
                  (skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  )
                )}

              </div>

            </div>


            <div className="service-arrow">
              ↗
            </div>


            <div className="service-hover-line"></div>

          </article>

        ))}

      </div>


      {/* BOTTOM STATEMENT */}

      <div className="services-bottom">

        <span>
          ONE SKILLSET. MANY POSSIBILITIES.
        </span>

        <h3>
          I DON'T JUST
          <br />
          <strong>
            BUILD.
          </strong>
          <br />
          I CREATE.
        </h3>

      </div>

    </section>
  );
}

export default Services;