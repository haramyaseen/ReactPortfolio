import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CreativeWork.css";

gsap.registerPlugin(ScrollTrigger);

const designs = [
  {
    number: "01",
    title: "WORKSHOP",
    category: "GRAPHIC DESIGN",
    image: "/graphics/graphic1.png",
  },
  {
    number: "02",
    title: "THUMBNAIL",
    category: "PROMOTIONAL DESIGN",
    image: "/graphics/graphic2.jpeg",
  },
  {
    number: "03",
    title: "Poster",
    category: "PROMOTIONAL DESIGN",
    image: "/graphics/graphic7.png",
  },
  {
    number: "04",
    title: "SOCIAL CAMPAIGN",
    category: "CREATIVE DESIGN",
    image: "/graphics/graphic9.png",
  },
  {
    number: "05",
    title: "POSTER DESIGN",
    category: "GRAPHIC DESIGN",
    image: "/graphics/graphic5.png",
  },
  {
    number: "06",
    title: "BRAND VISUAL",
    category: "CREATIVE DIRECTION",
    image: "/graphics/graphic6.jpeg",
  },
  
];

function CreativeWork() {
  const sectionRef = useRef(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".creative-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".creative-section",
          start: "top 80%",
        },
      });

      gsap.from(".creative-heading span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".creative-heading",
          start: "top 80%",
        },
      });

      gsap.from(".creative-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".creative-intro",
          start: "top 85%",
        },
      });

      gsap.utils
        .toArray(".design-card")
        .forEach((card, index) => {

          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          });

          const image = card.querySelector(
            ".design-image"
          );

          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();

            const x =
              (e.clientX - rect.left) /
                rect.width -
              0.5;

            const y =
              (e.clientY - rect.top) /
                rect.height -
              0.5;

            gsap.to(image, {
              x: x * 18,
              y: y * 18,
              scale: 1.05,
              duration: 0.6,
              ease: "power3.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(image, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
            });
          });
        });

      gsap.to(".creative-big-text", {
        xPercent: -20,
        scrollTrigger: {
          trigger: ".creative-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedDesign(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedDesign ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDesign]);

  return (
    <section
      ref={sectionRef}
      className="creative-section"
      id="creative"
    >

      <div className="creative-big-text">
        DESIGN
      </div>

      <div className="creative-header">

        <div className="creative-eyebrow">
          <span>05</span>
          CREATIVE WORK
        </div>

        <h2 className="creative-heading">
          <span>DESIGN</span>
          <span>THAT</span>
          <span>SPEAKS.</span>
        </h2>

        <p className="creative-intro">
          A collection of visual work created
          across branding, social media,
          promotional content and digital
          experiences.
        </p>

      </div>


      <div className="creative-gallery">

        {designs.map((design, index) => (

          <article
            className={`design-card design-card-${index + 1}`}
            key={design.number}
            onClick={() =>
              setSelectedDesign(design)
            }
          >

            <div className="design-number">
              {design.number}
            </div>

            <div className="design-image-wrapper">

              <img
                src={design.image}
                alt={design.title}
                className="design-image"
              />

              <div className="design-overlay">

                <span>
                  VIEW
                </span>

                <strong>
                  ↗
                </strong>

              </div>

            </div>

            <div className="design-info">

              <div>
                <span>
                  {design.category}
                </span>

                <h3>
                  {design.title}
                </h3>
              </div>

              <span className="design-arrow">
                ↗
              </span>

            </div>

          </article>

        ))}

      </div>


      <div className="creative-bottom">

        <span>
          VISUALS BY HARAM
        </span>

        <h3>
          CODE
          <br />
          <strong>
            MEETS
          </strong>
          <br />
          CREATIVITY.
        </h3>

      </div>


      {selectedDesign && (

        <div
          className="design-modal"
          onClick={() =>
            setSelectedDesign(null)
          }
        >

          <div
            className="design-modal-inner"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="design-close"
              onClick={() =>
                setSelectedDesign(null)
              }
            >
              ×
            </button>

            <div className="design-modal-image">

              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
              />

            </div>

            <div className="design-modal-info">

              <span>
                {selectedDesign.category}
              </span>

              <h3>
                {selectedDesign.title}
              </h3>

              <p>
                A visual design project created
                as part of my creative work,
                combining composition, typography
                and visual storytelling.
              </p>

              <div className="design-modal-line"></div>

              <small>
                VISUALS BY HARAM
              </small>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default CreativeWork;