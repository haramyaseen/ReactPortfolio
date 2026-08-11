import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);
const BASE_URL = import.meta.env.BASE_URL;


const achievements = [
  {
    year: "01",
    title: "COMPUTER INSTITUTE",
    role: "FOUNDER & INSTRUCTOR",
    description:
      "Founded and managed a home-based computer institute, providing practical computer education and helping students build useful digital skills.",
    tags: ["Teaching", "Training", "Management"],
  },
  {
    year: "02",
    title: "SOFTWARE EXHIBITION",
    role: "SELECTED PARTICIPANT",
    description:
      "Selected twice for one of Pakistan's major software exhibitions, presenting software projects and gaining practical exposure to the technology industry.",
    tags: ["Achievement", "Software", "Presentation"],
  },
  {
    year: "03",
    title: "FREELANCE",
    role: "FRONTEND DEVELOPER",
    description:
      "Worked on freelance projects involving frontend development, responsive interfaces, website design and digital solutions.",
    tags: ["Frontend", "Web Design", "Freelancing"],
  },
  {
    year: "04",
    title: "GRAPHIC DESIGN",
    role: "CREATIVE DESIGNER",
    description:
      "Created social media graphics, promotional visuals, branding materials and digital designs while combining visual creativity with technical skills.",
    tags: ["Photoshop", "Branding", "Visual Design"],
  },
];

const certificates = [
  {
    number: "01",
    title: "CERTIFICATION",
    image: `${BASE_URL}/certificates/Certificate1.jpeg`,
  },
  {
    number: "02",
    title: "CERTIFICATION",
    image: `${BASE_URL}/certificates/Certificate2.png`,
  },
  {
    number: "03",
    title: "CERTIFICATION",
    image: `${BASE_URL}/certificates/Certificate3.jpeg`,
  },
];

function Experience() {
  const sectionRef = useRef(null);
  const certificateRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         HEADER
      ========================= */

      gsap.from(".experience-eyebrow", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 80%",
        },
      });

      gsap.from(".experience-heading span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".experience-heading",
          start: "top 82%",
        },
      });

      gsap.from(".experience-intro", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-intro",
          start: "top 85%",
        },
      });

      /* =========================
         TIMELINE
      ========================= */

      gsap.from(".timeline-progress", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      gsap.utils
        .toArray(".experience-item")
        .forEach((item, index) => {
          gsap.from(item, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          });

          gsap.from(
            item.querySelector(".experience-index"),
            {
              scale: 0,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.8)",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
              },
            }
          );
        });

      /* =========================
         BIG NUMBER
      ========================= */

      gsap.to(".experience-big-number", {
        y: -180,
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* =========================
         CERTIFICATE INTRO
      ========================= */

      gsap.from(".certificates-header", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".certificates-section",
          start: "top 80%",
        },
      });

      /* =========================
         CERTIFICATE CARDS
      ========================= */

      gsap.from(".certificate-card", {
        y: 120,
        opacity: 0,
        rotate: 8,
        scale: 0.85,
        stagger: 0.18,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".certificate-gallery",
          start: "top 80%",
        },
      });

      /* =========================
         FLOATING ORB
      ========================= */

      gsap.to(".experience-orb", {
        y: -35,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         CERTIFICATE MOUSE TILT
      ========================= */

      certificateRefs.current.forEach((card) => {
        if (!card) return;

        const image = card.querySelector("img");

        const move = (e) => {
          const rect = card.getBoundingClientRect();

          const x =
            (e.clientX - rect.left) / rect.width - 0.5;

          const y =
            (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateY: x * 8,
            rotateX: -y * 8,
            y: -12,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(image, {
            scale: 1.05,
            x: x * 10,
            y: y * 10,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });

          gsap.to(image, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="experience-section"
      id="experience"
    >
      <div className="experience-grid-bg" />

      <div className="experience-orb" />

      <div className="experience-big-number">
        03
      </div>

      {/* =========================
          HEADER
      ========================= */}

      <div className="experience-header">
        <div className="experience-eyebrow">
          <span>03</span>
          EXPERIENCE & ACHIEVEMENTS
        </div>

        <h2 className="experience-heading">
          <span>BUILT</span>
          <span>THROUGH</span>
          <span>EXPERIENCE.</span>
        </h2>

        <p className="experience-intro">
          Development, design, teaching and
          entrepreneurship — every experience
          has added another layer to what I
          can create today.
        </p>
      </div>

      {/* =========================
          TIMELINE
      ========================= */}

      <div className="timeline">
        <div className="timeline-track" />
        <div className="timeline-progress" />

        {achievements.map((item, index) => (
          <div
            className={`experience-item ${
              index % 2 !== 0
                ? "experience-item-right"
                : ""
            }`}
            key={item.year}
          >
            <div className="experience-index">
              {item.year}
            </div>

            <div className="experience-card">
              <div className="experience-card-top">
                <span>
                  0{index + 1}
                </span>

                <small>
                  EXPERIENCE
                </small>
              </div>

              <h3>
                {item.title}
              </h3>

              <h4>
                {item.role}
              </h4>

              <p>
                {item.description}
              </p>

              <div className="experience-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          CERTIFICATES
      ========================= */}

      <div className="certificates-section">
        <div className="certificates-header">
          <div>
            <span className="mini-label">
              PROOF OF WORK
            </span>

            <h3>
              CERTIFICATES
              <span>.</span>
            </h3>
          </div>

          <p>
            Milestones from my learning,
            development and professional journey.
          </p>
        </div>

        <div className="certificate-showcase">
          <div className="certificate-glow" />

          {certificates.map(
            (certificate, index) => (
              <div
                className={`certificate-card certificate-${index + 1}`}
                key={certificate.number}
                ref={(el) =>
                  (certificateRefs.current[index] =
                    el)
                }
              >
                <div className="certificate-top">
                  <span>
                    {certificate.number}
                  </span>

                  <span>
                    2026
                  </span>
                </div>

                <div className="certificate-image">
                  <img
                    src={certificate.image}
                    alt="Certificate"
                  />

                  <div className="certificate-shine" />

                  <div className="certificate-hover">
                    <span>
                      VIEW CERTIFICATE
                    </span>

                    <strong>
                      ↗
                    </strong>
                  </div>
                </div>

                <div className="certificate-bottom">
                  <span>
                    {certificate.title}
                  </span>

                  <span>
                    {certificate.number}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* =========================
          STATEMENT
      ========================= */}

      <div className="experience-statement">
        <span>
          EXPERIENCE IS NOT JUST TIME.
        </span>

        <h3>
          IT'S WHAT
          <br />

          <strong>
            YOU BUILD
          </strong>

          <br />

          WITH IT.
        </h3>
      </div>
    </section>
  );
}

export default Experience;