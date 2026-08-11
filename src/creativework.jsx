import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CreativeWork.css";

gsap.registerPlugin(ScrollTrigger);

const BASE_URL = import.meta.env.BASE_URL;

const designs = [
  {
    number: "01",
    title: "WORKSHOP",
    category: "GRAPHIC DESIGN",
    image: `${BASE_URL}graphics/graphic1.png`,
  },
  {
    number: "02",
    title: "THUMBNAIL",
    category: "PROMOTIONAL DESIGN",
    image: `${BASE_URL}graphics/graphic2.jpeg`,
  },
  {
    number: "03",
    title: "POSTER",
    category: "PROMOTIONAL DESIGN",
    image: `${BASE_URL}graphics/graphic7.png`,
  },
  {
    number: "04",
    title: "SOCIAL CAMPAIGN",
    category: "CREATIVE DESIGN",
    image: `${BASE_URL}graphics/graphic9.png`,
  },
  {
    number: "05",
    title: "POSTER DESIGN",
    category: "GRAPHIC DESIGN",
    image: `${BASE_URL}graphics/graphic5.png`,
  },
  {
    number: "06",
    title: "BRAND VISUAL",
    category: "CREATIVE DIRECTION",
    image: `${BASE_URL}graphics/graphic6.jpeg`,
  },
];

function CreativeWork() {
  const sectionRef = useRef(null);

  const [selectedDesign, setSelectedDesign] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================
         HEADER ANIMATION
      ===================================== */

      gsap.from(".creative-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".creative-section",
          start: "top 80%",
          once: true,
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
          once: true,
        },
      });

      gsap.from(".creative-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".creative-intro",
          start: "top 85%",
          once: true,
        },
      });

      /* =====================================
         DESIGN CARDS
      ===================================== */

      const cards = gsap.utils.toArray(".design-card");

      cards.forEach((card, index) => {
        const image = card.querySelector(".design-image");

        /* CARD REVEAL */

        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.08,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });

        /* =====================================
           DESKTOP MOUSE PARALLAX
        ===================================== */

        const handleMouseMove = (e) => {
          if (window.innerWidth <= 600) return;

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
        };

        const handleMouseLeave = () => {
          gsap.to(image, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          });
        };

        card.addEventListener(
          "mousemove",
          handleMouseMove
        );

        card.addEventListener(
          "mouseleave",
          handleMouseLeave
        );
      });

      /* =====================================
         BIG BACKGROUND TEXT
      ===================================== */

      gsap.to(".creative-big-text", {
        xPercent: -20,

        scrollTrigger: {
          trigger: ".creative-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* =====================================
         REFRESH SCROLLTRIGGER
      ===================================== */

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =====================================
     ESCAPE MODAL
  ===================================== */

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

  /* =====================================
     BODY LOCK
  ===================================== */

  useEffect(() => {
    if (selectedDesign) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
      {/* =====================================
          BACKGROUND TEXT
      ===================================== */}

      <div className="creative-big-text">
        DESIGN
      </div>

      {/* =====================================
          HEADER
      ===================================== */}

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

      {/* =====================================
          GALLERY
      ===================================== */}

      <div className="creative-gallery">
        {designs.map((design, index) => (
          <article
            className={`design-card design-card-${
              index + 1
            }`}
            key={design.number}
            onClick={() =>
              setSelectedDesign(design)
            }
          >
            {/* NUMBER */}

            <div className="design-number">
              {design.number}
            </div>

            {/* IMAGE */}

            <div className="design-image-wrapper">
              <img
                src={design.image}
                alt={design.title}
                className="design-image"
                loading={
                  index === 0
                    ? "eager"
                    : "lazy"
                }
                onError={(e) => {
                  console.error(
                    "Image not found:",
                    design.image
                  );

                  e.currentTarget.style.opacity =
                    "0.15";
                }}
              />

              <div className="design-overlay">
                <span>VIEW</span>

                <strong>↗</strong>
              </div>
            </div>

            {/* INFO */}

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

      {/* =====================================
          BOTTOM
      ===================================== */}

      <div className="creative-bottom">
        <span>
          VISUALS BY HARAM
        </span>

        <h3>
          CODE
          <br />

          <strong>MEETS</strong>
          <br />

          CREATIVITY.
        </h3>
      </div>

      {/* =====================================
          MODAL
      ===================================== */}

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
            {/* CLOSE */}

            <button
              className="design-close"
              onClick={() =>
                setSelectedDesign(null)
              }
              aria-label="Close"
            >
              ×
            </button>

            {/* IMAGE */}

            <div className="design-modal-image">
              <img
                src={selectedDesign.image}
                alt={
                  selectedDesign.title
                }
              />
            </div>

            {/* INFO */}

            <div className="design-modal-info">
              <span>
                {selectedDesign.category}
              </span>

              <h3>
                {selectedDesign.title}
              </h3>

              <p>
                A visual design project
                created as part of my
                creative work, combining
                composition, typography and
                visual storytelling.
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