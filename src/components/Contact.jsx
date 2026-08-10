import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =================================
         HEADER REVEAL
      ================================= */

      gsap.from(".contact-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
      });

      gsap.from(".contact-heading span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 80%",
        },
      });

      gsap.from(".contact-description", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-description",
          start: "top 85%",
        },
      });

      /* =================================
         BIG TEXT
      ================================= */

      gsap.to(".contact-big-text", {
        xPercent: -18,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* =================================
         CONTACT BUTTON
      ================================= */

      gsap.from(".contact-main-button", {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-main-button",
          start: "top 85%",
        },
      });

      /* =================================
         LINKS
      ================================= */

      gsap.utils
        .toArray(".contact-link")
        .forEach((link, index) => {
          gsap.from(link, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".contact-links",
              start: "top 85%",
            },
          });
        });

      /* =================================
         ORB
      ================================= */

      gsap.to(".contact-orb-one", {
        x: 40,
        y: -40,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orb-two", {
        x: -30,
        y: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =================================
         MAGNETIC BUTTON
      ================================= */

      const button =
        document.querySelector(
          ".contact-main-button"
        );

      const handleButtonMove = (e) => {
        const rect =
          button.getBoundingClientRect();

        const x =
          e.clientX -
          rect.left -
          rect.width / 2;

        const y =
          e.clientY -
          rect.top -
          rect.height / 2;

        gsap.to(button, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const resetButton = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, .4)",
        });
      };

      if (button) {
        button.addEventListener(
          "mousemove",
          handleButtonMove
        );

        button.addEventListener(
          "mouseleave",
          resetButton
        );
      }

      return () => {
        if (button) {
          button.removeEventListener(
            "mousemove",
            handleButtonMove
          );

          button.removeEventListener(
            "mouseleave",
            resetButton
          );
        }
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      id="contact"
    >
      {/* BACKGROUND */}

      <div className="contact-big-text">
        LET'S TALK
      </div>

      <div className="contact-orb contact-orb-one"></div>

      <div className="contact-orb contact-orb-two"></div>

      {/* HEADER */}

      <div className="contact-header">
        <div className="contact-eyebrow">
          <span>07</span>
          GET IN TOUCH
        </div>

        <h2 className="contact-heading">
          <span>LET'S</span>

          <span>BUILD</span>

          <span>SOMETHING.</span>
        </h2>

        <p className="contact-description">
          Have an idea, project or opportunity
          in mind? Let's turn it into something
          useful, beautiful and memorable.
        </p>
      </div>

      {/* MAIN CTA */}

      <div className="contact-cta">
        <a
          href="mailto:your-email@gmail.com"
          className="contact-main-button"
        >
          <span className="contact-button-small">
            START A CONVERSATION
          </span>

          <strong>
            SAY HELLO
          </strong>

          <span className="contact-button-arrow">
            ↗
          </span>
        </a>
      </div>

      {/* CONTACT LINKS */}

      <div className="contact-links">

        <a
          href="mailto:your-email@gmail.com"
          className="contact-link"
        >
          <span>
            EMAIL
          </span>

          <strong>
            haramyaseen81@gmail.com
          </strong>

          <b>
            ↗
          </b>
        </a>

        <a
          href="https://www.linkedin.com/in/haram-yaseen-393b822b4/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>
            LINKEDIN
          </span>

          <strong>
            CONNECT WITH ME
          </strong>

          <b>
            ↗
          </b>
        </a>

        <a
          href="https://github.com/haramyaseen"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>
            GITHUB
          </span>

          <strong>
            VIEW MY CODE
          </strong>

          <b>
            ↗
          </b>
        </a>

        <a
          href="https://www.instagram.com/visualsbyharam/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span>
            INSTAGRAM
          </span>

          <strong>
            VISUALS BY HARAM
          </strong>

          <b>
            ↗
          </b>
        </a>

      </div>

      {/* FINAL STATEMENT */}

      <div className="contact-bottom">
        <span>
          AVAILABLE FOR FREELANCE &
          CREATIVE OPPORTUNITIES
        </span>

        <div className="contact-status">
          <i></i>
          OPEN TO WORK
        </div>
      </div>
    </section>
  );
}

export default Contact;