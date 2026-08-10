

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-brand", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 85%",
        },
      });

      gsap.from(".footer-nav a", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-nav",
          start: "top 90%",
        },
      });

      gsap.to(".footer-giant-h", {
        yPercent: -15,
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="footer-section"
    >
      <div className="footer-giant-h">
        H
      </div>

      <div className="footer-top">

        <div className="footer-brand">

          <div className="footer-logo">
            HARAM<span>.</span>
          </div>

          <p>
            FRONTEND DEVELOPER
            <br />
            ASP.NET DEVELOPER
            <br />
            GRAPHIC DESIGNER
          </p>

        </div>


        <nav className="footer-nav">

          <a href="#home">
            HOME
          </a>

          <a href="#projects">
            PROJECTS
          </a>

          <a href="#experience">
            EXPERIENCE
          </a>

          <a href="#services">
            SERVICES
          </a>

          <a href="#contact">
            CONTACT
          </a>

        </nav>


        <div className="footer-socials">

          <span>
            FIND ME
          </span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM ↗
          </a>

        </div>

      </div>


      <div className="footer-middle">

        <p>
          DESIGNED & BUILT
          <br />
          WITH CODE + CREATIVITY.
        </p>

        <button
          className="footer-top-button"
          onClick={scrollToTop}
        >
          BACK TO TOP
          <span>↑</span>
        </button>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 HARAM YASEEN
        </span>

        <span>
          VISUALS BY HARAM
        </span>

        <span>
          MADE WITH REACT + GSAP
        </span>

      </div>

    </footer>
  );
}

export default Footer;